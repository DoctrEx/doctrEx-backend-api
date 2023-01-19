const db = require("../../models/index");
// const AppointmentModel = db.Appointments;
const UserModel = db.Users;

module.exports.getUser = async (request, response) => {
  try {
    const data = await UserModel.findAll({
      where: { roleId: 2 },
      attributes: ["id", "name", "profilePicture", "fees", "speciality"],
    });

    response.status(200).json(data);
  } catch {
    response.status(500).json("Some Error Occured");
  }
};
