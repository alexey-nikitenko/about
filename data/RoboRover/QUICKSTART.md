# RoboDog - Quick Start Guide

## 🚀 Production Deployment (5 Minutes)

### Prerequisites
- ESP32 with RoboDog hardware assembled
- Python 3.8+ installed
- Arduino IDE installed
- Ollama running on your network

### Step 0: Install Python Dependencies

```bash
pip install -r requirements.txt
```

### Step 1: Configure (One-Time Setup)

1. **Create configuration file:**
   ```bash
   cd e:\repos\robodog
   cp config.example.json config.json
   ```

2. **Edit `config.json` with your settings:**
   ```json
   {
     "wifi": {
       "ssid": "YOUR_WIFI_NAME",
       "password": "YOUR_WIFI_PASSWORD"
     },
     "esp32": {
       "ip": "192.168.1.33"
     },
     "ollama": {
       "host": "192.168.1.72",
       "port": 11434
     }
   }
   ```

3. **Generate ESP32 credentials:**
   ```bash
   python tools/generate_credentials.py
   ```

### Step 2: Flash ESP32 (One-Time Setup)

1. Open Arduino IDE
2. Open: `firmware/sketch_nov17a_copy_20251117164551/sketch_nov17a_copy_20251117164551.ino`
3. Select Board: `ESP32 Dev Module`
4. Select Port: (Your ESP32's COM port)
5. Click **Upload** (→ button)
6. Wait for "Done uploading"

### Step 3: Upload Web UI (One-Time Setup)

In Arduino IDE:
- `Tools` → `ESP32 Sketch Data Upload`
- Wait for completion

### Step 4: Run!

```bash
python start_robodog.py
```

**That's it!** The system will:
- ✅ Check health (Ollama, ESP32, dependencies)
- ✅ Start Python Brain (in PAUSED mode)
- ✅ Open Web UI in your browser

---

## 🎮 Using the Rover

### Manual Control (Joystick)
1. Ensure AI is **PAUSED** (toggle OFF in Web UI)
2. Use the joystick in the Web UI
3. Rover responds **instantly** (< 50ms latency)

### Autonomous Mode (AI)
1. Toggle **"AI ACTIVE"** to ON in Web UI
2. Rover scans and makes LLM-based decisions
3. View conversation in "LLM DEBUG DATA" panel

### Stopping
- **Normal:** Press `Ctrl+C` in terminal
- **Emergency:** Double-click `stop_robodog.bat`

---

## 📚 Documentation

- **[PRODUCTION_RELEASE.md](PRODUCTION_RELEASE.md)** - Complete deployment guide, troubleshooting, architecture
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed hardware setup and configuration
- **[README.md](README.md)** - Full project documentation

---

## ⚠️ Troubleshooting

### "Brain: DISCONNECTED" in Web UI
- Check Python Brain is running (terminal should show logs)
- Ensure ESP32 is powered on and connected to WiFi

### Joystick doesn't work
- Toggle AI to **PAUSED**
- Ensure you flashed the updated firmware (Step 2)

### LLM errors
- Check Ollama is running: `http://192.168.1.72:11434`
- Verify IP in `config.json` matches your Ollama server

### ESP32 crashes
- Check battery is charged
- Add 1000µF capacitor to servo power rail
- Reduce WiFi power in Web UI settings

---

## ✅ System Status

**Current Version:** Production Ready (2025-11-29)

**Features:**
- ✅ Instant joystick control (ESP32 direct handling)
- ✅ LLM autonomous navigation
- ✅ Dual control modes (manual + AI)
- ✅ Auto-reconnection on connection loss
- ✅ Secure credential management
- ✅ One-command startup/shutdown

**Tested On:**
- Windows 10/11
- ESP32 WROOM-32
- Ollama with qwen3:4b model

---

## 🆘 Support

For detailed information, see:
- **Production Guide:** [PRODUCTION_RELEASE.md](PRODUCTION_RELEASE.md)
- **Setup Guide:** [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **Full README:** [README.md](README.md)
