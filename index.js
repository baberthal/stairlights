'use strict';

const { Gpio } = require('pigpio');

const led1 = new Gpio(22, { mode: Gpio.OUTPUT });
const led2 = new Gpio(27, { mode: Gpio.OUTPUT });

let dutyCycle = 0;

setInterval(() => {
  led1.pwmWrite(dutyCycle);
  let inverse = 255 - dutyCycle;
  inverse = inverse < 0 ? -inverse : inverse;
  led2.pwmWrite(255 - dutyCycle)
  dutyCycle += 5;
  if (dutyCycle > 255) {
    dutyCycle = 0;
  }
}, 20);
