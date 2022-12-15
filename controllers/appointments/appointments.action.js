 const db = require("../../models/index")
// // // const config = require("../config/auth.config");
const AppointmentModel = db.Appointments;
const UserModel = db.Users;

module.exports.getOne = async (request, response) => {

    const id = 1 // temporaray stored
    const { params: { slug } } = request
    const alias = slug == 'doctor' ? 'doctorAppointment' : 'patientAppointment' 
    
    const data = await UserModel.findOne({
        where: { id },
        include: [
            {
                model: AppointmentModel,
                attributes:["dateTime"],
                as : alias
            }
        ]
    }
        )
    
    if (data?.patientAppointment?.length > 0 || data?.doctorAppointment?.length > 0) {
        const dateTime = slug == 'doctor' ? data?.doctorAppointment[0]?.dateTime : data?.patientAppointment[0]?.dateTime
        let res = {name:data?.name,profilePicture:data?.profilePicture,dateTime}
        res = slug === ' doctor' ? {...res , symptoms:data.symptoms} : {...res , speciality:data.speciality} 
        response.status(200).json(res)
    }
    else {
        response.status(500).json('Response not found')
    }


};



