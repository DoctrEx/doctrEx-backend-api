 const db = require("../../models/index")
const AppointmentModel = db.Appointments;


module.exports.getOne = async (request, response) => {

    const patientId = 2 // temporaray stored
    const request = { ...request, patientId }  
    const data = await AppointmentModel.create(request);


};