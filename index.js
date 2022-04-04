'use strict';

const { Gpio } = require('pigpio');
const LedSet = require('./src/led-set');

// const proximitySensor = new Gpio(17, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE });
const red = new Gpio(16, { mode: Gpio.OUTPUT });
const green = new Gpio(20, { mode: Gpio.OUTPUT });
const blue = new Gpio(21, { mode: Gpio.OUTPUT });
const leds = {
  red,
  green,
  blue,
};

leds.red.pwmWrite(255);
leds.green.pwmWrite(255);
leds.blue.pwmWrite(255);

let dutyCycle = 0;
let delta = 5;

setInterval(() => {
  leds.red.pwmWrite(dutyCycle);
  leds.green.pwmWrite(dutyCycle);
  leds.blue.pwmWrite(dutyCycle);

  dutyCycle = dutyCycle + delta;
  if (dutyCycle > 255) {
    delta = -5;
  } else if (dutyCycle <= 0) {
    delta = 5;
  }
}, 20);

