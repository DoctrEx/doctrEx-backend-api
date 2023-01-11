const db = require("../../models/index");
const AppointmentModel = db.Appointments;

module.exports.postOne = async (request, response) => {
  const patientId = 2; // temporaray stored
  request = { ...request, patientId };
  const data = await AppointmentModel.create(request);

  response.status(200).json(data);
};
