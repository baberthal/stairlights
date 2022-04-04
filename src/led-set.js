'use strict';

const { Gpio } = require('pigpio');

module.exports = class LedSet {
  constructor({
    redPin,
    greenPin,
    bluePin
  }) {
    this.red = new Gpio(redPin, { mode: Gpio.OUTPUT });
    this.green = new Gpio(greenPin, { mode: Gpio.OUTPUT });
    this.blue = new Gpio(bluePin, { mode: Gpio.OUTPUT });
  }

  setColor(red, green, blue) {
    this.red.pwmWrite(red);
    this.green.pwmWrite(green);
    this.blue.pwmWrite(blue);
  }
};
