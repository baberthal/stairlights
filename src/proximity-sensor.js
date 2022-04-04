'use strict';

const { Gpio } = require('pigpio');

class ProximitySensor {
  constructor(pin) {
    this.io = new Gpio(pin);
  }
}

module.exports = { ProximitySensor };
