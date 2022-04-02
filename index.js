'use strict';

const { Gpio } = require('pigpio');

const led1 = new Gpio(22, { mode: Gpio.OUTPUT });
const led2 = new Gpio(27, { mode: Gpio.OUTPUT });
const proximitySensor = new Gpio(17, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE });

proximitySensor.on('interrupt', (level) => {
  console.log('level', level);
});
