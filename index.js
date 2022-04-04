'use strict';

const { Gpio } = require('pigpio');
const LedSet = require('./src/led-set');

// const proximitySensor = new Gpio(17, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE });

const leds = new LedSet({
  redPin: 16,
  greenPin: 28,
  bluePin: 21,
});

leds.setColor(255, 255, 255);
