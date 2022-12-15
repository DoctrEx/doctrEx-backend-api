'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      //user has one role
      'Users', // name of Source model
      'roleId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        defaultValue:1,
        allowNull:false,
        
        
      }
    ).then(() => {
        //patient can get many appointment 
        return queryInterface.addColumn(
          'Appointments', // name of Target model
          'patientId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            allowNull:false,
          }
        );
      }).then(() => {
        //doctor can get many appointment 
        return queryInterface.addColumn(
          'Appointments', // name of Target model
          'doctorId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            allowNull:false,
          }
        );
      }).then(() => {
        //patient can make many reviews
        return queryInterface.addColumn(
          'Reviews', // name of Target model
          'patientId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            allowNull:false,
          }
        );
      }).then(() => {
        //doctor can get many reviews 
        return queryInterface.addColumn(
          'Reviews', // name of Target model
          'doctorId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            allowNull:false,
          }
        );
      }).then(() => {
        //patient makes many payment 
        return queryInterface.addColumn(
          'Payments', // name of Target model
          'patientId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            allowNull:false,
          }
        );
      }).then(() => {
        //doctor can get many payment 
        return queryInterface.addColumn(
          'Payments', // name of Target model
          'doctorId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Source model
              key: 'id',
            },
            allowNull:false,
          }
        );
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
