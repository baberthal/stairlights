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
let direction = 'up';

setInterval(() => {
  leds.red.pwmWrite(dutyCycle);
  leds.green.pwmWrite(dutyCycle);
  leds.blue.pwmWrite(dutyCycle);

  if (direction === 'up') {
    dutyCycle += 5;
  } else if (direction === 'down') {
    dutyCycle -= 5;
  } else {
    throw new Error(`Unknown direction: ${direction}`);
  }

  if (dutyCycle > 255) {
    direction = 'down';
  } else {
    console.log('dutyCycle:', dutyCycle);
  }

  if (dutyCycle > 255) {
    dutyCycle = 0;
  }
}, 20);

