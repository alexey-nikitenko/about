# RoboDog - Autonomous AI-Powered Exploration Rover

A sophisticated 4-wheel differential drive rover with **LLM-powered autonomous navigation**, real-time lidar mapping, and web-based control interface. Built on ESP32 with Python AI brain.

![Platform](https://img.shields.io/badge/Platform-ESP32-blue)
![Python](https://img.shields.io/badge/Python-3.8+-green)
- **Open architecture** - WebSocket bridge between ESP32 and Python brain
|:----------|:--|:------------|
| GND | → | GND |
| 3V3 | → | VCC |
| GPIO 21 (SDA) | → | SDA |
| GPIO 22 (SCL) | → | SCL |

### Sensor I²C Bus (Shared)
| ESP32 Pin | → | Sensors |
|:----------|:--|:--------|
| GPIO 25 | → | SDA (MPU-6050 + VL53L0X) |
| GPIO 33 | → | SCL (MPU-6050 + VL53L0X) |

### Power Distribution
```
Battery (+) ──→ Buck VIN+
Battery (-) ──→ Buck VIN-
              │
Buck VOUT+ ──→ PCA9685 V+ ──→ [1000µF Cap] ──→ GND
Buck VOUT- ──→ PCA9685 GND ──┬──→ ESP32 GND (COMMON GROUND)
                               └──→ Sensor GND
```

### Servo Connections (PCA9685 Channels)
| Channel | Servo | Purpose |
|:--------|:------|:--------|
| 0 | Continuous | Rear Left Wheel |
| 1 | Continuous | Rear Right Wheel |
| 2 | Continuous | Front Left Wheel |
| 3 | Continuous | Front Right Wheel |
| 4 | Standard | Lidar Pan Servo |

---

## 💻 Software Setup

### 1️⃣ ESP32 Firmware

#### Prerequisites
1. Install [Arduino IDE](https://www.arduino.cc/en/software)
2. Add ESP32 board support:
   - File → Preferences → Additional Board URLs:
     ```
     https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
     ```
   - Tools → Board → Boards Manager → Search "esp32"
   - **Install version 2.0.14** (critical for library compatibility)

#### Install Libraries
**Via ZIP (recommended):**
- Download [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) as ZIP
- Download [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer) as ZIP
- Sketch → Include Library → Add .ZIP Library (add both)

**Via Library Manager:**
- Sketch → Include Library → Manage Libraries
- Install: `Adafruit PWM Servo Driver Library`
- Install: `Adafruit VL53L0X`
- Install: `Adafruit MPU6050`

#### Configure & Upload
1. Open `firmware/sketch_nov17a_copy_20251117164551/sketch_nov17a_copy_20251117164551.ino`
2. Update WiFi credentials:
   ```cpp
   const char* ssid = "YourNetworkName";
   const char* password = "YourPassword";
   ```
3. Select Board: **ESP32 Dev Module**
4. Select Port (your ESP32's COM port)
5. Upload sketch
6. Open Serial Monitor (115200 baud) → Note the IP address

#### Upload Web GUI to ESP32
The web interface files need to be uploaded to the ESP32's LittleFS filesystem:

1. After firmware upload, access: `http://<ESP32_IP>/upload`
2. Upload these files from `firmware/sketch_nov17a_copy_20251117164551/data/`:
   - `index.html`
   - `style.css`
   - `script.js`
   - `radar.js`
3. Verify by visiting: `http://<ESP32_IP>` (you should see the GUI)

---

### 2️⃣ Python Brain (AI Controller)

#### Install Dependencies
```bash
pip install asyncio websockets requests matplotlib numpy
```

#### Setup LLM Server (Ollama)
The brain requires a local LLM server. Install Ollama:

**Windows/Mac/Linux:**
```bash
# Install Ollama from https://ollama.ai
# or use package manager

# Pull the model
ollama pull qwen3:4b
```

**Configure Brain:**
Edit `brain/controller_with_viz.py` if your Ollama server is not at default location:
```python
OLLAMA_URL = "http://192.168.1.72:11434/api/generate"  # Change IP if needed
MODEL = "qwen3:4b"
```

---

- Wide Open Space (tests exploration behavior)

---

## 📊 Understanding the AI Brain

### TOON Protocol
RoboDog uses **TOON** (Token-Oriented Object Notation) instead of JSON for LLM communication. It's more concise and easier for LLMs to generate consistently.

**Example TOON Response:**
```
reasoning: Front is clear, moving forward to explore
cmd:
  action: step
  dist: 20
```

### Decision Flow
```
1. Rover performs 180° lidar scan (0-180° in 5° steps)
   ↓
2. Brain receives 37 distance measurements
   ↓
3. Gap Analysis: Find ALL navigable openings
   ↓
4. Memory: Load mission context from memory.toon
   ↓
5. LLM: Analyze situation, choose best gap
   ↓
6. Execute: Send command to rover
   ↓
**Calibration Process:**
1. Send `step 100` (100cm forward)
2. Measure actual distance traveled
3. Adjust `MS_PER_CM` proportionally
4. Repeat for rotation with `turn 90`

### Servo Direction
If wheels spin backwards, flip the values in these functions:
```cpp
void moveForward() {
    setServoAngle(WHEEL_FRONT_LEFT, 180);   // Try 0 if wrong direction
    setServoAngle(WHEEL_REAR_LEFT, 180);    // Try 0 if wrong direction
    setServoAngle(WHEEL_FRONT_RIGHT, 0);    // Try 180 if wrong direction
    setServoAngle(WHEEL_REAR_RIGHT, 0);     // Try 180 if wrong direction
}
```

---

## 🔧 Troubleshooting

### ESP32 Reboots During Scan
**Cause**: Servo current spike  
**Fix**: Add 1000µF capacitor to PCA9685 V+ and GND (observe polarity!)

### Connection Drops
**Causes**:
- WiFi interference
- Insufficient power
- Distance from router

**Fixes**:
- Increase WiFi power via web GUI settings
- Check battery voltage (should be >7V)
- Move closer to router or use WiFi extender

### LLM Timeouts
**Cause**: Model too large or server overloaded  
**Fix**:
- Use smaller model: `ollama pull qwen3:4b` (not 7b/14b)
- Close other Ollama sessions
- Increase timeout in `controller_with_viz.py` (line 561)

### Parsing Errors
**Cause**: LLM returns invalid TOON format  
**Fix**: The brain has automatic retry logic (3 attempts) and JSON fallback. Check `brain/benchmarks/ISSUES_REPORT.md` for prompt tuning.

### Web GUI Blank/404
**Cause**: LittleFS files not uploaded  
**Fix**: Upload files via `http://<ESP32_IP>/upload` endpoint

---

## 📝 Development Notes

### Conversation History References
This project evolved through several key development phases:
- **LLM Integration** ([d6690fc8](https://github.com)): Debugging TOON parser and LLM response formats
- **Memory System** ([5511065b](https://github.com)): Implementing context/memory for stateless LLM
- **Lidar Radar GUI** ([72e3e752](https://github.com)): Web-based polar radar visualization
- **WiFi Optimization** ([c12b3833](https://github.com)): Signal strength improvements

### Known Limitations
- **Position tracking**: Dead-reckoning only (no absolute positioning)
- **Map persistence**: Obstacle map resets each session
- **Sensor range**: VL53L0X effective up to ~2m
- **LLM speed**: Decision cycle ~5-10 seconds depending on model

---

## 🎓 Educational Value

This project demonstrates:
- **Embedded systems**: ESP32 programming, I²C, PWM, async web servers
- **Computer vision**: Lidar scanning, coordinate transformations
- **AI/ML**: LLM prompting, decision-making, memory systems
- **Networking**: WebSocket bidirectional communication
- **Robotics**: Differential drive, sensor fusion, SLAM basics
- **Full-stack**: Web GUI, Python backend, firmware integration

---

## 🤝 Contributing

Improvements welcome! Areas of interest:
- Better position estimation (add encoders, magnetometer fusion)
- Map persistence (save/load obstacle maps)
- Multi-rover coordination
- Alternative LLM backends (Claude, GPT, local transformers)
- Advanced behaviors (object recognition, goal-seeking)

---

## 📄 License

This project is open-source. Feel free to use, modify, and share.

---

## 🙏 Acknowledgments

Built with:
- [ESP32 Arduino Core](https://github.com/espressif/arduino-esp32)
- [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
- [Adafruit Sensor Libraries](https://github.com/adafruit)
- [Ollama](https://ollama.ai) for local LLM inference

---

**Questions? Issues? Open a discussion or issue on GitHub!**

*Last updated: 2025-11-29*