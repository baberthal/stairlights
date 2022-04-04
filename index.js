'use strict';

const { Gpio } = require('pigpio');

const proximitySensor = new Gpio(26, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_DOWN,
  edge: Gpio.EITHER_EDGE,
});
const red = new Gpio(16, { mode: Gpio.OUTPUT });
const green = new Gpio(20, { mode: Gpio.OUTPUT });
const blue = new Gpio(21, { mode: Gpio.OUTPUT });
const leds = {
  red,
  green,
  blue,
};

const setLeds = (r, g = r, b = r) => {
  leds.red.pwmWrite(r);
  leds.green.pwmWrite(g);
  leds.blue.pwmWrite(b);
};

setLeds(127);

proximitySensor.on('interrupt', (level) => {
  console.log('level:', level);
});

// let dutyCycle = 0;
// let direction = 'up';

// setInterval(() => {
//   leds.red.pwmWrite(dutyCycle);
//   leds.green.pwmWrite(dutyCycle);
//   leds.blue.pwmWrite(dutyCycle);

//   if (direction === 'up') {
//     dutyCycle += 5;
//   } else if (direction === 'down') {
//     dutyCycle -= 5;
//   } else {
//     throw new Error(`Unknown direction: ${direction}`);
//   }

//   if (dutyCycle === 255) {
//     direction = 'down';
//   } else if (dutyCycle === 0) {
//     direction = 'up';
//   }
// }, 20);

