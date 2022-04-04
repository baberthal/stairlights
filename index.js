'use strict';

const { Gpio } = require('pigpio');
const LedSet = require('./src/led-set');

// const proximitySensor = new Gpio(17, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE });
const red = new Gpio(16, { mode: Gpio.OUTPUT });
const green = new Gpio(20, { mode: Gpio.OUTPUT });
const blue = new Gpio(26, { mode: Gpio.OUTPUT });
const leds = {
  red,
  green,
  blue,
};

leds.red.pwmWrite(255);
leds.green.pwmWrite(255);
leds.blue.pwmWrite(255);

for (let i = 0; i < 255; i++) {
  leds.red.pwmWrite(i);
  leds.green.pwmWrite(i);
  leds.blue.pwmWrite(i);
}

leds.red.pwmWrite(0);
leds.green.pwmWrite(0);
leds.blue.pwmWrite(0);
