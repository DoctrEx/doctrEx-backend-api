"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointments.init(
    {
      dateTime: DataTypes.STRING,
      status: DataTypes.STRING,
      symptoms: DataTypes.STRING,
      speciality: DataTypes.STRING,
      description: DataTypes.STRING,
      file: DataTypes.STRING,
      doctorName: DataTypes.STRING,
      patientName: DataTypes.STRING,
      profilePicture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Appointments",
    }
  );
  return Appointments;
};
