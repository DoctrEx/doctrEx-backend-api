var nodemailer = require("nodemailer");
module.exports.postOne = async (request, response) => {
  const {
    body: { roleId, name, option, fees },
  } = request;
  try {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: 587,
      requireTLS: true,
      auth: {
        user: "doctrexservices@gmail.com",
        pass: "wssuvhivwtyufhlh",
      },
    });
    const message =
      roleId == 1
        ? `Hey ${name}!
Thanks for using our service.It is a confirmation report that you made payment of ${fees} $ using ${option} to DoctrEx for your regular checkup.

Regards,
DoctrEx.`
        : `Hey Dr.${name}!
Hope you are having a great experience on our platform.
This email is to inform you that amount of ${fees} has been transfered to your account through our platform for your services.

Regards,
DoctrEx.`;
    var mailOptions = {
      from: "doctrexservices@gmail.com",
      to: "mudasir.alam2002@gmail.com",
      subject: "Payment Report",
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("email has been send", info.response);
      }
    });
  } catch (err) {
    console.log("error", err);
    response.json("Some error occured", err);
  }
};
