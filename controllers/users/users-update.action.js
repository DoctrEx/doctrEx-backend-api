const db = require("../../models/index");
const UserModel = db.Users;

module.exports.update = async (request, response) => {
  try {
    const {
      params: { id },
    } = request;
    const data = await UserModel.update(request.body,{
      where: { id }
    });
    
    response.status(200).json(data);
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
};
