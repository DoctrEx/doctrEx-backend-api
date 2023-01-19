const db = require("../../models/index");
const AppointmentModel = db.Appointments;
const PaymentModel = db.Payments;

module.exports.postOne = async (request, response) => {
  try {
    console.log("body:", request.body);
    const paymentBody = {
      fees: request.body.fees,
      doctorId: request.body.doctorId,
      patientId: request.body.patientId,
      patientName: request.body.patientName,
      doctorName: request.body.doctorName,
      profilePicture: request.body.profilePicture,
      option: "Mobile Pay",
    };
    // const data = await AppointmentModel.create(request.body);
    console.log(paymentBody);
    const data = await AppointmentModel.create(request.body);
    if (data) {
      const payment = await PaymentModel.create(paymentBody);
      response.status(200).json("Appointment Confirmed");
    }
    // console.log(payment);
  } catch {
    response.status(200).json("Some Error Occured");
  }
};
