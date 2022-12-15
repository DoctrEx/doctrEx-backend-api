'use strict';
const {
  Model
} = require('sequelize');
import { RoleModel } from '.';
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
            Users.belongsTo(models.Roles, {
                foreignKey: 'roleId',
            })
            Users.hasMany(models.Appointments, {
                foreignKey: 'patientId',
            })
            Users.hasMany(models.Appointments, {
                foreignKey: 'doctorId',
            })
            Users.hasMany(models.Payments, {
                foreignKey: 'patientId',
            })
            Users.hasMany(models.Payments, {
                foreignKey: 'doctorId',
            })
            Users.hasMany(models.Reviews, {
                foreignKey: 'patientId',
            })
            Users.hasMany(models.Reviews, {
                foreignKey: 'doctorId',
            })
    }
  }
  Users.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    speciality: DataTypes.STRING,
    specialityLevel: DataTypes.STRING,
    subSpeciality: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    chronicalDiseases: DataTypes.STRING,
    profilePicture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};