const db = require("../../models/index");
// // // const config = require("../config/auth.config");
const AppointmentModel = db.Appointments;
const UserModel = db.Users;

module.exports.getOne = async (request, response) => {
  try {
    const {
      params: { slug },
      query: { id },
    } = request;
    const alias = slug == "doctor" ? "doctorAppointment" : "patientAppointment";

    const data = await UserModel.findAll({
      where: { id },
      include: [
        {
          model: AppointmentModel,
          attributes: [
            "id",
            "dateTime",
            "status",
            "doctorName",
            "patientName",
            "profilePicture",
            "symptoms",
            "speciality",
          ],
          as: alias,
        },
      ],
    });

    let res =
      slug == "doctor" ? data[0].doctorAppointment : data[0].patientAppointment;
    response.status(200).json(res);
  } catch {
    response.status(500).json("Some Error Occured");
  }
  // if (
  //   data?.patientAppointment?.length > 0 ||
  //   data?.doctorAppointment?.length > 0
  // ) {
  //   console.log("if");
  //   const dateTime =
  //     slug == "doctor"
  //       ? data?.doctorAppointment[0]?.dateTime
  //       : data?.patientAppointment[0]?.dateTime;
  //   const status =
  //     slug == "doctor"
  //       ? data?.doctorAppointment[0]?.status
  //       : data?.patientAppointment[0]?.status;
  //   let res = {
  //     name: data?.name,
  //     profilePicture: data?.profilePicture,
  //     dateTime,
  //     status,
  //   };
  //   res =
  //     slug === " doctor"
  //       ? { ...res, symptoms: data?.doctorApointment[0]?.symptoms }
  //       : { ...res, speciality: data.speciality };
  //   response.status(200).json(res);
  // } else {
  //   console.log("else");
  //   response.status(500).json("Response not found");
  // }
};
