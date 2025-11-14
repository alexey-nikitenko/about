# Hardware Architecture Explanation

## System Overview

The RoboArm system uses a **Raspberry Pi Pico** microcontroller working together with a **PCA9685 servo driver board** to control 6 servo motors (3 per arm).

---

## Why We Need the PCA9685

### Problem: Raspberry Pi Pico Limitations
- The Pico has limited PWM outputs
- Servos require precise, stable PWM signals
- 6 servos would consume most of the Pico's resources
- Servos draw high current that could damage the Pico

### Solution: PCA9685 Servo Driver
The PCA9685 is a dedicated servo controller that solves all these problems.

---

## What is the PCA9685?

### Technical Specifications:
- **Chip:** NXP PCA9685 PWM controller
- **Channels:** 16 independent PWM outputs
- **Resolution:** 12-bit (4096 steps)
- **Frequency:** 40-1000 Hz (typically 50Hz for servos)
- **Interface:** I2C (only 2 wires needed!)
- **Address:** Configurable (0x40-0x7F) - can chain up to 62 boards
- **Power:** Separate power input for servos (5-6V)

### Key Features:
1. **I2C Control** - Only uses 2 pins on the Pico (SDA + SCL)
2. **Independent Power** - Servos powered separately from logic
3. **Precise PWM** - Dedicated hardware for stable servo control
4. **Expandable** - 16 channels (we use 6, have 10 free)
5. **Low CPU Load** - Pico just sends commands, PCA9685 does the work

---

## How It Works in Our Project

### Connection Architecture:

```
Computer (GUI)
    ↓ USB Serial
Raspberry Pi Pico
    ↓ I2C (2 wires: SDA + SCL)
PCA9685 Board
    ↓ PWM Signals (6 channels)
6 Servo Motors
    ↓ Mechanical Movement
Robot Arms → Keyboard
```

### Detailed Connections:

#### Raspberry Pi Pico → PCA9685:
- **GP4 (SDA)** → PCA9685 SDA pin
- **GP5 (SCL)** → PCA9685 SCL pin
- **GND** → PCA9685 GND
- **3.3V** → PCA9685 VCC (logic power)

#### PCA9685 → Servos:
- **Channel 0** → Left Arm Servo 1 (X/Y-axis)
- **Channel 1** → Left Arm Servo 2 (X/Y-axis)
- **Channel 2** → Left Arm Servo 3 (Z-axis)
- **Channel 3** → Right Arm Servo 4 (X/Y-axis)
- **Channel 4** → Right Arm Servo 5 (X/Y-axis)
- **Channel 5** → Right Arm Servo 6 (Z-axis)
- **Channels 6-15** → Available for expansion

#### Power Supply:
- **5V Power Supply** → PCA9685 V+ terminal
- **GND** → PCA9685 GND terminal
- Servos get power from PCA9685 board
- Pico gets power from USB

---

## Communication Flow

### 1. User Action (GUI)
User clicks "Press Key A" in the GUI

### 2. Computer → Pico (USB Serial)
```
Command: "MOVE 0 90 1 45 2 120"
(Move servo 0 to 90°, servo 1 to 45°, servo 2 to 120°)
```

### 3. Pico → PCA9685 (I2C)
```python
# Pico sends I2C commands to PCA9685
pca.servo(0).angle(90)   # Channel 0 to 90°
pca.servo(1).angle(45)   # Channel 1 to 45°
pca.servo(2).angle(120)  # Channel 2 to 120°
```

### 4. PCA9685 → Servos (PWM)
PCA9685 generates precise PWM signals:
- **90°** = 1500μs pulse width
- **45°** = 1000μs pulse width
- **120°** = 1750μs pulse width

### 5. Servos → Physical Movement
Servos move to commanded positions, arm presses key

---

## Advantages of This Architecture

### 1. Simplified Wiring
- **Without PCA9685:** 6 PWM wires + 6 power wires = 12 connections
- **With PCA9685:** 2 I2C wires + power = Much cleaner!

### 2. Better Performance
- **Dedicated PWM chip** - No jitter or timing issues
- **Pico stays free** - Can handle serial communication smoothly
- **Simultaneous control** - All 6 servos update at once

### 3. Power Isolation
- **Servos isolated** - High current draw doesn't affect Pico
- **Safer** - Servo power issues won't damage microcontroller
- **Flexible** - Can use different voltage for servos if needed

### 4. Expandability
- **10 free channels** - Add more servos easily
- **Chainable** - Connect more PCA9685 boards for more servos
- **Future-proof** - Room for grippers, sensors, etc.
