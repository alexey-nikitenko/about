# RoboArm Keyboard Automation Project

This project provides a graphical user interface (GUI) to control a two-armed robotic setup for automated keyboard typing. You can teach the robot the positions of keys, write scripts for complex typing sequences, and even trigger them with voice commands.

## Table of Contents
- [Hardware Requirements](#hardware-requirements)
- [Setup Instructions](#setup-instructions)
  - [Part 1: Raspberry Pi Pico Firmware Setup](#part-1-raspberry-pi-pico-firmware-setup)

## Hardware Requirements

To build the full hardware setup, you will need:
- Raspberry Pi Pico
- PCA9685 16-Channel Servo Driver
- 6x SG90 or MG90S Servos (3 for each arm)
- 2x Rotary Encoders with push-buttons
- 4x 4x13x5 mm (695z)mm bearing
- Wires 
- A 5V 1A/2A power supply for the servos
- 3D printed parts for the robotic arms

## Setup Instructions

1.  **Flashing the firmware** onto your Raspberry Pi Pico.

---

### Part 1: Raspberry Pi Pico Firmware Setup

The Raspberry Pi Pico runs a MicroPython script to directly control the servos and encoders. The easiest way to get this set up is by using the **Thonny IDE**.

1.  **Install Thonny:** Download and install Thonny from [thonny.org](https://thonny.org/). It's a beginner-friendly Python IDE with built-in support for MicroPython on the Pico.

2.  **Install MicroPython on the Pico:**
    - Open Thonny.
    - Connect your Raspberry Pi Pico to your computer while holding down its `BOOTSEL` button. It will appear as a USB mass storage device.
    - In Thonny, go to `Tools` > `Options...` and select the `Interpreter` tab.
    - Choose `MicroPython (Raspberry Pi Pico)` as the interpreter.
    - A prompt will appear at the bottom to install MicroPython. Click it and follow the instructions.

3.  **Upload Firmware Files to the Pico:**
    - Once MicroPython is installed, you can access the Pico's internal file system through Thonny.
    - You need to upload the following files from this project to the Pico:
        - `main.py`
        - `servo.py`
    - To do this, open each file in Thonny and go to `File` > `Save as...`, then choose `Raspberry Pi Pico` as the destination. Save the file with the exact same name.

4.  **Reboot the Pico:** Once both files are saved on the Pico, press `Ctrl+D` in the Thonny shell, or unplug and reconnect the Pico (this time without holding `BOOTSEL`). The `main.py` script will run automatically on startup.

### Part: How to assemble 
https://www.youtube.com/watch?v=qxFJr5wAKV4&t