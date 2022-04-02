'use strict';

const { Gpio } = require('pigpio');

const led1 = new Gpio(22, { mode: Gpio.OUTPUT });
const led2 = new Gpio(27, { mode: Gpio.OUTPUT });
const proximitySensor = new Gpio(17, { mode: Gpio.INPUT, edge: Gpio.EITHER_EDGE });


proximitySensor.watch('interrupt', (level) => {
  console.log('level', level);
  led1.digitalWrite(level);
  led2.digitalWrite(level);
});

process.on('SIGINT', () => {
  led1.digitalWrite(0);
  led2.digitalWrite(0);
});
