/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#0B84A5" weight=100
namespace ledControl {

    //% block="Set LED on pin %pin to %state"
    //% pin.fieldEditor="pin" pin.defl=DigitalPin.P12
    //% state.defl="true"
    export function setLED(pin: DigitalPin, state: boolean): void {
        if (state) {
            pins.digitalWritePin(pin, 1); // Set the pin to HIGH (on)
        } else {
            pins.digitalWritePin(pin, 0); // Set the pin to LOW (off)
        }
    }

    //% block="Delay for %time ms"
    //% time.min=0 time.max=10000
    export function delay(time: number): void {
        basic.pause(time); // Pauses the program for a specified time
    }

    //% block="Initialize LEDs"
    export function initializeLEDs(): void {
        setLED(DigitalPin.P12, false);  // GPIO2 off
        setLED(DigitalPin.P16, true);   // GPIO16 on
    }

    //% block="Alternate LEDs every second"
    export function alternateLEDs(): void {
        setLED(DigitalPin.P12, true);   // GPIO2 on
        setLED(DigitalPin.P16, false);  // GPIO16 off
        delay(1000); // Wait for 1 second

        setLED(DigitalPin.P12, false);  // GPIO2 off
        setLED(DigitalPin.P16, true);   // GPIO16 on
        delay(1000); // Wait for 1 second
    }
}

//% color="#FF6347" weight=90
namespace serialCommunication {

    //% block="Initialize serial communication with baud rate %baudRate"
    //% baudRate.min=9600 baudRate.max=115200
    export function initializeSerial(baudRate: number): void {
        serial.redirect(
            SerialPin.P1,  // RX Pin
            SerialPin.P2,  // TX Pin
            baudRate       // Baud rate (e.g., 9600)
        );
        basic.showString("Serial Init");  // Confirm serial initialization
    }

}

//% color="#00BFFF" weight=80
namespace setupControl {

    //% block="Initialize system with serial communication at baud rate %baudRate"
    export function initializeSystem(baudRate: number): void {
        serialCommunication.initializeSerial(baudRate);  // Initialize serial with given baud rate
        ledControl.initializeLEDs();  // Initialize LEDs
    }

    
}
