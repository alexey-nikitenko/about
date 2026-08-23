# RoboDog Rover - Setup Guide

## 📋 Table of Contents
1. [Hardware Requirements](#hardware-requirements)
2. [Software Requirements](#software-requirements)
3. [Initial Setup](#initial-setup)
4. [Firmware Upload](#firmware-upload)
5. [First Run](#first-run)
6. [Troubleshooting](#troubleshooting)

---

## 🔧 Hardware Requirements

### Main Components
- **ESP32 Development Board** (with WiFi)
- **PCA9685 16-Channel PWM Servo Driver**
- **4x Continuous Rotation Servos** (for wheels)
- **1x Standard Servo** (for lidar pan)
- **VL53L0X Time-of-Flight Distance Sensor**
- **MPU-6050 IMU** (Accelerometer + Gyroscope)
- **Power Supply** (suitable for servos, typically 5-6V)

### Wiring
- **I2C Bus** (shared):
  - SDA: GPIO 25
  - SCL: GPIO 33
  - Devices: PCA9685, VL53L0X, MPU-6050

- **Servos** (connected to PCA9685):
  - Channel 0: Rear Left Wheel
  - Channel 1: Rear Right Wheel
  - Channel 2: Front Left Wheel
  - Channel 3: Front Right Wheel
  - Channel 4: Lidar Pan Servo

---

## 💻 Software Requirements

### On Your PC
1. **Python 3.8+**
2. **Arduino IDE** (for ESP32 firmware upload)
3. **Ollama** (running on a machine in your network)

### Python Packages
Install with: `pip install websockets requests matplotlib numpy`

### Arduino Libraries
Install via Arduino Library Manager:
- `AsyncTCP`
- `ESPAsyncWebServer`
- `Adafruit PWM Servo Driver Library`
- `Adafruit VL53L0X`
- `Adafruit MPU6050`
- `Adafruit Sensor`
- `LittleFS` (usually built-in for ESP32)

---

## 🚀 Initial Setup

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd robodog
```

### Step 2: Configure System Settings

1. **Copy the example config**:
   ```bash
   cp config.example.json config.json
   ```

2. **Edit `config.json`** with your settings:
   ```json
   {
     "ollama": {
       "host": "192.168.1.72",  // IP of machine running Ollama
       "port": 11434
     },
     "esp32": {
       "ip": "192.168.1.33"  // Will be assigned by your router
     },
     "wifi": {
       "ssid": "YourWiFiName",
       "password": "YourWiFiPassword"
     }
   }
   ```

3. **Generate credentials** for ESP32:
   ```bash
   python tools/generate_credentials.py
   ```
   
   This creates `firmware/sketch_nov17a_copy_20251117164551/credentials.h` (gitignored)

### Step 3: Run Health Check
```bash
python brain/health_check.py
```

This verifies:
- ✅ Ollama is reachable
- ✅ Python dependencies are installed
- ⚠️  ESP32 (will be offline until firmware is uploaded)

---

## 📤 Firmware Upload

### Step 1: Prepare Arduino IDE

1. **Install ESP32 Board Support**:
   - File → Preferences
   - Add to "Additional Board Manager URLs":
     ```
     https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
     ```
   - Tools → Board → Boards Manager → Search "ESP32" → Install

2. **Install Required Libraries** (see Software Requirements above)

### Step 2: Upload Firmware

1. **Open the sketch**:
   ```
   File → Open → firmware/sketch_nov17a_copy_20251117164551/sketch_nov17a_copy_20251117164551.ino
   ```

2. **Select your board**:
   - Tools → Board → ESP32 Arduino → (your ESP32 board)
   - Tools → Port → (your COM port)

3. **Upload**:
   - Click the Upload button (→)
   - Wait for "Done uploading"

4. **Upload Web UI Files** (LittleFS):
   - Tools → ESP32 Sketch Data Upload
   - This uploads files from `firmware/.../data/` folder
   - Files uploaded:
     - `index.html` - Web UI
     - `style.css` - Styling
     - `script.js` - WebSocket logic
     - `radar.js` - Radar visualization

### Step 3: Find ESP32 IP Address

1. **Open Serial Monitor** (Tools → Serial Monitor, 115200 baud)
2. **Press ESP32 reset button**
3. **Look for**:
   ```
   WiFi connected
   IP address: 192.168.1.33
   ```
4. **Update `config.json`** with this IP if different

---

## 🎮 First Run

### Option 1: Unified Startup Script (Recommended)
```bash
python start_robodog.py
```

This will:
1. ✅ Check all dependencies
2. ✅ Generate credentials
3. ✅ Start Python Brain
4. ✅ Open Web UI in browser

### Option 2: Manual Start

1. **Start Ollama** (on remote machine):
   ```bash
   ollama serve
   ```

2. **Start Python Brain**:
   ```bash
   python brain/controller_with_viz.py 192.168.1.33
   ```

3. **Open Web UI**:
   - Browser: `http://192.168.1.33`

---

## 🎯 Using the System

### Web UI Controls

1. **Manual Control**:
   - Use joystick or WASD keys to drive
   - Arrow keys to pan lidar
   - Space to emergency stop

2. **AI Control**:
   - Enter Ollama IP/Port (if different from localhost)
   - Toggle "AI ACTIVE"
   - Robot will autonomously explore

3. **LLM Debug**:
   - Click "🛠️ LLM DEBUG DATA" to expand
   - See real-time AI decision-making
   - View prompts and responses

### Python Brain Window

- **Large Map**: Shows explored area and obstacles
- **Current Scan**: Live lidar data
- **Decision Log**: AI thoughts and actions

---

## 🧪 Testing & Verification

### Run Health Checks
Before starting, verify all components are ready:
```bash
python brain/health_check.py
```

### Run End-to-End Tests
To verify the entire system (Config, AI, Dependencies) works correctly:
```bash
python tests/e2e/run_e2e_tests.py
```
This will:
1. Verify `config.json` and security rules
2. Test connection to remote Ollama server
3. Analyze LLM performance with different context sizes

---

## 🔧 Troubleshooting

### ESP32 Not Connecting to WiFi
- Check WiFi credentials in `config.json`
- Run `python tools/generate_credentials.py` again
- Re-upload firmware
- Check Serial Monitor for error messages

### "Ollama Unavailable" in Web UI
- Verify Ollama is running: `curl http://192.168.1.72:11434/api/tags`
- Check IP/port in `config.json`
- Ensure firewall allows connections

### Python Brain Won't Connect
- Verify ESP32 IP: `ping 192.168.1.33`
- Check ESP32 is powered on
- Verify Web UI loads in browser
- Check Serial Monitor for WebSocket errors

### Web UI Shows "SYNCING..." Forever
- Restart Python Brain
- Check browser console (F12) for errors
- Verify ESP32 firmware is latest version

### No LLM Decisions
- Check Ollama is running and reachable
- Verify model is loaded: `ollama list`
- Check Python Brain console for errors
- Ensure `qwen3:4b` model is available

---

## 📚 Additional Resources

- **README.md**: Project overview and architecture
- **WEBSOCKET_FIX_SUMMARY.md**: WebSocket communication details
- **WEB_UI_TEST_RESULTS.md**: Testing and validation results

---

## 🆘 Getting Help

If you encounter issues:
1. Run `python brain/health_check.py` to diagnose
2. Check Serial Monitor for ESP32 errors
3. Check Python Brain console output
4. Review browser console (F12) for Web UI errors

---

**Happy Exploring! 🤖🚀**
