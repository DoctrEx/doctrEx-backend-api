const db = require("../../models/index");
// // // const config = require("../config/auth.config");
const PaymentModel = db.Payments;
const UserModel = db.Users;

module.exports.getAll = async (request, response) => {
  try {
    const {
      params: { slug },
      query: { id },
    } = request;

    // console.log(slug, id);
    const alias = slug == "doctor" ? "doctorPayment" : "patientPayment";

    console.log(alias);
    const data = await UserModel.findAll({
      where: { id },
      include: [
        {
          model: PaymentModel,
          attributes: [
            "fees",
            "doctorName",
            "patientName",
            "profilePicture",
            "option",
          ],
          as: alias,
        },
      ],
    });
    console.table(data);
    let res = slug == "doctor" ? data[0].doctorPayment : data[0].patientPayment;
    response.status(200).json(res);
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
};
