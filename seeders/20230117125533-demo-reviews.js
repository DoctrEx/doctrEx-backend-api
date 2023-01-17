'use strict'
const data = require('../data/reviewsData')
const now = data.reviewsData
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', 
    now,
    {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};