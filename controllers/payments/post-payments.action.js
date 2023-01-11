const db = require("../../models/index");
const PaymentModel = db.Payments;
const UserModel = db.Users;

module.exports.postOne = async (request, response) => {
  console.log(request.body);
  const patientId = request.body.patientId;

  const patient = await UserModel.findOne({
    where: { id: patientId },
  });
  console.log(patient);
  if (!patient || patient.roleId === 2) {
    response.status(500).json("Invalid patient ID");
  } else {
    try {
      await PaymentModel.create(request.body);
      response.json("Payment Recieved");
    } catch (err) {
      console.log("error", err);
      response.json("Some error occured", err);
    }
  }
};
