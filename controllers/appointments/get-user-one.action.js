const db = require("../../models/index");
// const AppointmentModel = db.Appointments;
const UserModel = db.Users;

module.exports.getOneUser = async (request, response) => {
  console.log("inside func");
  try {
    const data = await UserModel.findOne({
      where: { id: request.params.id },
      attributes: ["name", "profilePicture", "fees", "speciality"],
    });

    response.status(200).json(data);
  } catch {
    response.status(500).json("Some Error Occured");
  }
};
