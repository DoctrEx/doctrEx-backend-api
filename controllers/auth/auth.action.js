const db = require("../../models/index");
const UserModel = db.Users;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("../../config/auth.config");

//middlewares

module.exports.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  // Username
  console.log("middleware", req.body);
  UserModel.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.send({
        message: "Failed! Email is already in use!",
      });
      return;
    }
    next();
  });
};

//Gignup Login

module.exports.signup = async (req, res) => {
  console.log("request", req.body);
  UserModel.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    roleId: req.body.role == "patient" ? 1 : 2,
    speciality: req.body.role == "doctor" ? req.body.speciality : null,
    specialityLevel:
      req.body.role == "doctor" ? req.body.specialityLevel : null,
    chronicalDiseases:
      req.body.role == "patient" ? req.body.chronicalDiseases : null,
    dateOfBirth: req.body.dateOfBirth,
    country: req.body.country,
    address: req.body.address,
  }).then(() => {
    res.send({ message: "USER REGISTERED" });
  });
};
module.exports.signin = async (req, res) => {
  console.log("body", req.body);
  UserModel.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 1.577e8, // 24 hours
      });
      console.log(user);
      const response = {
        id: user.id,
        roleId: user.roleId,
        name: user.name,
        email: user.email,
        accessToken: token,
      };
      res.status(200).send(
        user.roleId == 1
          ? response
          : {
              ...response,
              speciality: user.speciality,
              specialityLevel: user.specialityLevel,
            }
      );
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    });
};
