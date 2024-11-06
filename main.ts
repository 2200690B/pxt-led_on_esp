/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace ledControl {
    // Define the GPIO pins for the LEDs
    let LED1 = DigitalPin.P12;  // GPIO2, mapped to P12 in MakeCode
    let LED2 = DigitalPin.P16;  // GPIO16, mapped to P16 in MakeCode

    /**
     * Initializes the LEDs by turning one on and the other off
     */
    //% block="initialize LEDs"
    export function setupLEDs(): void {
        pins.digitalWritePin(LED1, 0); // Set LED1 (GPIO2) off
        pins.digitalWritePin(LED2, 1); // Set LED2 (GPIO16) on
    }

    /**
     * Turns LED1 on and LED2 off for 1 second
     */
    //% block="turn on LED1"
    export function turnOnLED1(): void {
        pins.digitalWritePin(LED1, 1); // Turn LED1 on
        pins.digitalWritePin(LED2, 0); // Turn LED2 off
        basic.pause(1000); // Wait for 1 second
    }

    /**
     * Turns LED1 off and LED2 on for 1 second
     */
    //% block="turn on LED2"
    export function turnOnLED2(): void {
        pins.digitalWritePin(LED1, 0); // Turn LED1 off
        pins.digitalWritePin(LED2, 1); // Turn LED2 on
        basic.pause(1000); // Wait for 1 second
    }

    /**
     * Alternates the states of LED1 and LED2 every second
     */
    //% block="alternate LEDs"
    export function alternateLEDs(): void {
        turnOnLED1();
        turnOnLED2();
    }
}
