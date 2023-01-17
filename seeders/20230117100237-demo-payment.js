'use strict'
const data = require('../data/paymentData')
const now = data.paymentData;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', now, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Payments', null, {});
  }
};