const db = require("../../models/index");
const UserModel = db.Users;

module.exports.getOne = async (request, response) => {
  try {
    const {
      params: {id},
    } = request;

    const data = await UserModel.findOne({where: { id }});

    const res = slug == "doctor" ? data.doctorPayment : data.patientPayment;
    response.status(200).json(res);
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
};
