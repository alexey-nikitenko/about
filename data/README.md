# 🤖 RoboArm Keyboard Automation - Quick Start Guide

## Welcome! 👋

Thank you for downloading the RoboArm Keyboard Automation system! This guide will help you get started from the downloaded ZIP file to controlling your robot arms.

---

## 📦 What You Downloaded

After extracting the ZIP file, you should see:

```
RoboArm/
├── dist/
│   ├── RoboArmController.exe          ← Main application
│   ├── gui_calibration.json           ← GUI settings
│   ├── keyboard_positions.json        ← Saved key positions
│   ├── keys.json                      ← Key database
│   ├── scripts.json                   ← Automation scripts
│   ├── voice_settings.json            ← Voice recognition settings
│   ├── pico_firmware/                 ← Firmware for Raspberry Pi Pico
│   │   ├── main.py
│   │   └── servo.py
│   └── vosk-model/                    ← Voice recognition model
│       ├── am/
│       ├── conf/
│       └── graph/
└── 3dToPrint/                         ← 3D printable parts
    └── ... (more STL files)
```

---

## 🛠️ What You Need to Build

### Required Hardware:

#### Electronics:
- **1x Raspberry Pi Pico** (microcontroller)
- **1x PCA9685 Servo Driver Board** (16-channel PWM driver)
- **6x SG90 or MG90S Servo Motors** (3 for each arm)
- **2x Rotary Encoders with push buttons** (for precise positioning)
- **1x 5V Power Supply with USB output** (2A or higher for servos)
- **Jumper wires** (male-to-male and male-to-female)
- **1x Breadboard** (optional, for prototyping)
- **2x USB Cables:**
  - 1x Micro-USB cable (Raspberry Pi Pico to PC)
  - 1x USB cable (Power supply to PCA9685)

#### Mechanical:
- **3D Printed Parts** (all STL files in `3dToPrint/` folder)
- **Screws and bolts** (M3 screws recommended)
- **Optional: Bearings** (for smoother movement)

### Where to Buy:
- **Amazon, AliExpress, or local electronics stores**
- **Total cost: ~$50-100 USD**

---

## 📋 Step-by-Step Setup Guide

---

## PART 1: Build the Hardware (2-4 hours)

### Step 1: 3D Print the Parts

1. **Open the `3dToPrint/` folder**
2. **Print all STL files:**
   - Left arm parts (base, segments, joints)
   - Right arm parts (base, segments, joints)
   - Mounting brackets
   - Servo holders

3. **Print Settings (Recommended):**
   - Layer height: 0.2mm
   - Infill: 20-30%
   - Supports: Yes (for overhangs)
   - Material: PLA or PETG

4. **Estimated print time:** 8-12 hours total

**Don't have a 3D printer?**
- Use online services: Shapeways, Craftcloud, or local maker spaces
- Ask at your local library (many have 3D printers!)

---

### Step 2: Assemble the Robot Arms

1. **Gather printed parts and servos**

2. **Assemble Left Arm:**
   - Attach Servo 1 & 2 (X-Y positioning) to move the clicker in 2D plane
   - Attach Servo 3 (Z-axis pressing) to end effector for key pressing
   - Secure with screws

3. **Assemble Right Arm:**
   - Attach Servo 4 & 5 (X-Y positioning) to move the clicker in 2D plane
   - Attach Servo 6 (Z-axis pressing) to end effector for key pressing
   - Mirror the left arm configuration

4. **Mount to Base:**
   - Position arms on either side of keyboard
   - Ensure they can reach their designated key areas
   - Secure firmly to prevent movement

**Tips:**
- Test servo movement before final assembly
- Leave servo wires accessible for connections
- Ensure smooth joint movement

---

### Step 3: Wire the Electronics

#### Understanding the Servo Configuration:

**Left Arm (3 servos):**
- **Servo 1 & 2**: Work together to position the clicker in X-Y plane (2 degrees of freedom)
  - These move the clicker horizontally to reach different keys
- **Servo 3**: Presses down (Z-axis) to click the key (1 degree of freedom)

**Right Arm (3 servos):**
- **Servo 4 & 5**: Work together to position the clicker in X-Y plane (2 degrees of freedom)
  - These move the clicker horizontally to reach different keys
- **Servo 6**: Presses down (Z-axis) to click the key (1 degree of freedom)

**Total: 6 servos = 2 arms × 3 servos each**

#### Wiring Diagram:

```
USB Cable 1: PC → Raspberry Pi Pico (Micro-USB)
    - Powers the Pico
    - Provides serial communication

USB Cable 2: 5V Power Supply → PCA9685 (USB to terminal)
    - Powers the servos
    - 2A or higher required

Raspberry Pi Pico → PCA9685 (I2C Control)
    GP4 (SDA) → PCA9685 SDA
    GP5 (SCL) → PCA9685 SCL
    GND → PCA9685 GND
    3.3V → PCA9685 VCC

PCA9685 → Servos (PWM Signals)
    Channels 0-5 → 6 Servos

Rotary Encoder 1 (Left Arm):
    CLK → GP21
    DT → GP22
    SW → GP26
    + → 3.3V
    GND → GND

Rotary Encoder 2 (Right Arm):
    CLK → GP27
    DT → GP28
    SW → GP19
    + → 3.3V
    GND → GND
```

#### Power Connections (Do This First!):

**USB Cable 1: PC to Raspberry Pi Pico**
   - Connect Micro-USB cable from your computer to Pico
   - This provides power to the Pico AND data communication
   - Pico LED should light up when connected

**USB Cable 2: Power Supply to PCA9685**
   - Connect 5V USB power supply (2A minimum, 3A recommended)
   - Connect to PCA9685 V+ and GND terminals
   - This powers ONLY the servos, not the Pico
   - **Critical:** Keep servo power separate from Pico!

#### Detailed Connections:

**1. Connect PCA9685 to Raspberry Pi Pico (I2C Control):**
   - PCA9685 VCC → Pico 3.3V (Pin 36)
   - PCA9685 GND → Pico GND (Pin 38)
   - PCA9685 SDA → Pico GP4 (Pin 6)
   - PCA9685 SCL → Pico GP5 (Pin 7)

**2. Connect Servos to PCA9685:**
   - Left Arm Servo 1 (X-Y positioning) → Channel 0
   - Left Arm Servo 2 (X-Y positioning) → Channel 1
   - Left Arm Servo 3 (Z-axis pressing) → Channel 2
   - Right Arm Servo 4 (X-Y positioning) → Channel 3
   - Right Arm Servo 5 (X-Y positioning) → Channel 4
   - Right Arm Servo 6 (Z-axis pressing) → Channel 6

**3. Connect Power Supply to PCA9685:**
   - Use **USB Cable 2** from 5V power supply to PCA9685
   - Connect USB power output to PCA9685 V+ and GND terminals
   - Or use barrel jack/screw terminals depending on your power supply
   - **Important:** Servos get power from PCA9685, NOT from Pico!
   - **Power Requirements:** Minimum 2A, recommended 3A for 6 servos

**4. Connect Rotary Encoders (Optional but Recommended):**
   - Follow the pin connections listed above
   - These allow precise positioning during setup

**Safety Tips:**
- ⚠️ Double-check all connections before powering on
- ⚠️ Never connect servo power to Pico directly
- ⚠️ Use TWO separate USB cables:
  - USB Cable 1: PC to Pico (data + Pico power)
  - USB Cable 2: Power supply to PCA9685 (servo power only)
- ⚠️ Power supply must be rated for at least 2A (3A recommended)
- ⚠️ Keep wires organized and secured
- ⚠️ Connect Pico to PC first, then connect servo power supply

---

## PART 2: Flash Firmware to Raspberry Pi Pico (15 minutes)

### Step 4: Install MicroPython on Pico

1. **Download Thonny IDE:**
   - Go to: https://thonny.org/
   - Download and install for your operating system
   - It's free and beginner-friendly!

2. **Connect Pico in BOOTSEL Mode:**
   - Hold down the **BOOTSEL button** on the Pico
   - While holding, plug USB cable into computer
   - Release button
   - Pico appears as a USB drive named "RPI-RP2"

3. **Install MicroPython:**
   - Open Thonny
   - Go to: `Tools` → `Options` → `Interpreter` tab
   - Select: `MicroPython (Raspberry Pi Pico)`
   - Click: `Install or update MicroPython`
   - Follow the prompts
   - Wait for installation to complete

---

### Step 5: Upload Firmware Files to Pico

1. **Open Thonny IDE**

2. **Navigate to firmware folder:**
   - In your extracted files: `dist/pico_firmware/`
   - You'll see: `main.py` and `servo.py`

3. **Upload `servo.py`:**
   - In Thonny: `File` → `Open`
   - Select `servo.py` from `pico_firmware/` folder
   - `File` → `Save as...`
   - Choose: `Raspberry Pi Pico`
   - Save as: `servo.py` (exact name!)

4. **Upload `main.py`:**
   - In Thonny: `File` → `Open`
   - Select `main.py` from `pico_firmware/` folder
   - `File` → `Save as...`
   - Choose: `Raspberry Pi Pico`
   - Save as: `main.py` (exact name!)

5. **Verify Upload:**
   - In Thonny, click the "Files" view
   - You should see both files on the Pico

6. **Reboot Pico:**
   - In Thonny shell, press: `Ctrl+D`
   - Or unplug and replug the USB cable
   - The `main.py` script will run automatically

**Troubleshooting:**
- If Pico doesn't appear, try a different USB cable
- Make sure you're using a data cable, not just a charging cable
- Try a different USB port

---

## PART 3: Run the Application (5 minutes)

### Step 6: Launch RoboArmController

1. **Navigate to the `dist/` folder**

2. **Double-click `RoboArmController.exe`**

3. **Windows Security Warning:**
   - If Windows shows "Windows protected your PC"
   - Click: `More info`
   - Click: `Run anyway`
   - This is normal for unsigned applications

4. **Application Opens:**
   - You should see the RoboArm Controller GUI
   - Three tabs: Control, Keys, Scripts

---

### Step 7: Connect to Raspberry Pi Pico

1. **In the Application:**
   - Look for the **COM Port dropdown** at the top
   - Click the dropdown

2. **Select Your Pico:**
   - Find the COM port (e.g., COM3, COM4, COM5)
   - Usually labeled as "USB Serial Device"
   - If unsure, try each one!

3. **Click "Connect" Button**

4. **Success Indicators:**
   - Status message: "Connected successfully"
   - Servo controls become active
   - You can now control the servos!

**Can't find COM port?**
- Make sure Pico is plugged in
- Check Device Manager (Windows)
- Try unplugging and replugging
- Restart the application

---

### Step 8: Test the System

1. **Click "Align All Motors" Button:**
   - All 6 servos should move to 90° (neutral position)
   - Both arms should move to center position
   - This confirms everything is working!

2. **Test Individual Servos:**
   - Go to "Control" tab
   - Use sliders to move each servo
   - Servo 1-2: Left arm X-Y positioning (moves clicker horizontally)
   - Servo 3: Left arm Z-axis (presses down)
   - Servo 4-5: Right arm X-Y positioning (moves clicker horizontally)
   - Servo 6: Right arm Z-axis (presses down)

3. **Emergency Stop:**
   - Click "Emergency Stop" to halt all movement
   - Use this if anything goes wrong!

**If servos don't move:**
- Check power supply is connected and ON
- Verify all wiring connections
- Check servo connections to PCA9685
- Ensure firmware uploaded correctly

---

## PART 4: Teach Keys to Robot Arms (30 minutes)

### Step 9: Position Your Keyboard

1. **Place keyboard in front of robot arms**
2. **Ensure both arms can reach their designated areas:**
   - Left arm: Left side of keyboard (Q, W, E, R, A, S, D, F, etc.)
   - Right arm: Right side of keyboard (Y, U, I, O, H, J, K, L, etc.)
3. **Secure keyboard so it doesn't move**

---

### Step 10: Teach Your First Key (Left Arm)

1. **Go to "Keys" Tab**

2. **Select "Left Arm" from dropdown**

3. **Position the Arm Over a Key (e.g., 'A'):**
   - Use **Servo 1 & 2 sliders** (X-Y positioning) to move the clicker horizontally over the key
   - These two servos work together to position the clicker in 2D space
   - Use **Servo 3 slider** (Z-axis) to adjust pressing depth
   - Position the clicker directly over the 'A' key

4. **Fine-Tune Position:**
   - If you have rotary encoders, use them for precision
   - Get as close as possible to the key center

5. **Save the Key Position:**
   - In "Key Name" field, type: `A`
   - Click: `Get actual data` (captures current servo angles)
   - Click: `Check Key` (tests the key press)
   - Watch the arm press the 'A' key
   - If successful, click: `Save`

6. **Repeat for More Keys:**
   - Teach 5-10 keys for the left arm
   - Common keys: Q, W, E, R, T, A, S, D, F, Space

---

### Step 11: Teach Keys to Right Arm

1. **Select "Right Arm" from dropdown**

2. **Repeat the process:**
   - Position over keys on the right side
   - Save keys: Y, U, I, O, P, H, J, K, L, Enter

3. **Tips:**
   - Start with keys that are easy to reach
   - Test each key before saving
   - You can edit positions later if needed

---

## PART 5: Create Your First Script (15 minutes)

### Step 12: Create a Simple Script

1. **Go to "Scripts" Tab**

2. **Click "New Script" Button**

3. **Name Your Script:**
   - Enter: `Type Hello`

4. **Add Steps:**
   - Click "Add Step"
   - Select: `Press Key` → Choose `H` (left arm)
   - Click "Add Step"
   - Select: `Press Key` → Choose `E` (left arm)
   - Click "Add Step"
   - Select: `Press Key` → Choose `L` (right arm)
   - Click "Add Step"
   - Select: `Press Key` → Choose `L` (right arm)
   - Click "Add Step"
   - Select: `Press Key` → Choose `O` (right arm)

5. **Optional: Add Delays:**
   - Click "Add Step"
   - Select: `Wait` → Enter `0.5` seconds
   - This adds a pause between actions

6. **Save the Script:**
   - Click: `Save Script`

---

### Step 13: Run Your First Script

1. **Open Notepad or any text editor**

2. **In RoboArm Controller:**
   - Select your "Type Hello" script
   - Click: `Run Script`

3. **Watch the Magic:**
   - Both arms will move and type "HELLO"
   - The text appears in your notepad!

**Congratulations! 🎉 Your robot arms are working!**

---

## PART 6: Voice Control (Optional - 10 minutes)

### Step 14: Set Up Voice Commands

1. **Assign Voice Trigger:**
   - Select your "Type Hello" script
   - In "Command Key" field, type: `hello robot`
   - Click: `Save`

2. **Start Voice Listening:**
   - Click: `Listen command` button
   - Status shows: "Listening..."

3. **Speak the Command:**
   - Say clearly: "hello robot"
   - Watch the script execute automatically!

4. **Voice Recognition Notes:**
   - Works completely offline (no internet needed)
   - Speak clearly and at normal pace
   - Wait for recognition confirmation
   - Model loads on first use (may take a few seconds)

---

## 🎯 Quick Reference

### Common Tasks:

**Connect to Pico:**
1. Select COM port
2. Click "Connect"

**Move a Servo:**
1. Go to "Control" tab
2. Use sliders

**Teach a Key:**
1. Go to "Keys" tab
2. Select arm
3. Position over key
4. Enter key name
5. Click "Get actual data"
6. Click "Check Key"
7. Click "Save"

**Run a Script:**
1. Go to "Scripts" tab
2. Select script
3. Click "Run Script"

**Emergency Stop:**
- Click "Emergency Stop" button (red)
- Stops all servo movement immediately

---

## 🔧 Troubleshooting

### Problem: Application won't start
**Solution:**
- Make sure all files in `dist/` folder are together
- Check Windows Defender didn't quarantine files
- Right-click exe → Properties → Unblock
- Try running as Administrator

### Problem: Can't find COM port
**Solution:**
- Ensure Pico is plugged in via USB
- Check Device Manager for "USB Serial Device"
- Try different USB port
- Reinstall Pico firmware

### Problem: Servos don't move
**Solution:**
- Check power supply is ON and connected
- Verify 5V power to PCA9685 V+ terminal
- Check servo connections to correct channels
- Test with "Align All Motors" button
- Verify I2C connections (SDA/SCL)

### Problem: Servos jitter or move erratically
**Solution:**
- Power supply may be insufficient (need 2A+)
- Check for loose connections
- Ensure proper grounding
- Reduce number of servos moving simultaneously

### Problem: Voice recognition not working
**Solution:**
- Check that `vosk-model/` folder is in `dist/` folder
- Verify microphone is connected and working
- Check Windows microphone permissions
- Speak clearly and at normal pace
- Wait for model to load (first time takes longer)

### Problem: Key presses are inaccurate
**Solution:**
- Re-teach the key position
- Use rotary encoders for fine-tuning
- Ensure keyboard doesn't move
- Check servo mounting is secure
- Adjust Z-axis (pressing depth)

### Problem: Arms collide with each other
**Solution:**
- Reposition arm bases further apart
- Assign keys more carefully (left vs right)
- Adjust arm reach in software
- Consider physical barriers

---

## 📚 Next Steps

### Now that you're set up:

1. **Teach More Keys:**
   - Add all the keys you need
   - Both arms can learn 20+ keys each

2. **Create Complex Scripts:**
   - Login sequences
   - Data entry automation
   - Gaming macros
   - Form filling

3. **Experiment with Voice Commands:**
   - Assign voice triggers to all scripts
   - Create a library of commands
   - Hands-free automation!

4. **Customize and Improve:**
   - Adjust servo speeds
   - Fine-tune positions
   - Add more arms (PCA9685 has 16 channels!)
   - Design custom end effectors

---

## 🌐 Additional Resources

### Project Website:
**https://aspeedsoftware.top/roboarm.html**
- Full documentation
- Video tutorials
- Community forum
- Updates and news

### Need Help?
- Check the troubleshooting section above
- Visit the project website
- Watch the video tutorial
- Join the community forum

### Want to Contribute?
- Share your scripts
- Post your modifications
- Help other users
- Suggest improvements

---

## ⚠️ Safety Guidelines

### Important Safety Notes:

1. **Electrical Safety:**
   - Never connect servo power to Pico directly
   - Use proper power supply (5V, 2A+)
   - Check all connections before powering on
   - Keep liquids away from electronics

2. **Mechanical Safety:**
   - Servos can pinch fingers - be careful!
   - Use Emergency Stop if needed
   - Secure all moving parts
   - Keep workspace clear

3. **Software Safety:**
   - Test scripts in safe environment first
   - Use Emergency Stop button when needed
   - Don't leave running unattended
   - Back up your key positions and scripts

---

## 📝 File Descriptions

### What Each File Does:

**RoboArmController.exe**
- Main application - double-click to run

**keys.json**
- Stores all saved key positions
- Backup this file to save your work!

**scripts.json**
- Stores all automation scripts
- Backup this file too!

**keyboard_positions.json**
- Additional position data

**gui_calibration.json**
- GUI settings and preferences

**voice_settings.json**
- Voice recognition configuration

**pico_firmware/**
- Firmware files for Raspberry Pi Pico
- Upload these to Pico using Thonny

**vosk-model/**
- Voice recognition model (40MB)
- Required for voice control
- Works completely offline

---

## 🎉 You're All Set!

Congratulations on setting up your RoboArm Keyboard Automation system!

You now have:
- ✅ Assembled robot arms
- ✅ Wired electronics
- ✅ Flashed firmware
- ✅ Running application
- ✅ Taught keys
- ✅ Created scripts
- ✅ Voice control (optional)

**Start automating and have fun! 🤖**

---

## 📞 Support

If you encounter any issues not covered in this guide:

1. **Check the troubleshooting section**
2. **Visit: https://aspeedsoftware.top/roboarm.html**
3. **Watch the video tutorial**
4. **Join the community forum**

---

**Happy Automating! 🚀**

*Last Updated: November 2025*
*Version: 1.0*


### Part: How to assemble 
https://www.youtube.com/watch?v=qxFJr5wAKV4&t