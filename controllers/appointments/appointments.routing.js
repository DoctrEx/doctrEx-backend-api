const { getOne } = require("./get-appointments.action");
const { postOne } = require("./post-appointments.action");
const { getUser } = require("./get-user.action");
const { getOneUser } = require("./get-user-one.action");

module.exports = {
  "/": {
    get: {
      action: getUser,
      level: "public",
    },
    post: {
      action: postOne,
      level: "public",
    },
  },
  "/:slug": {
    get: {
      action: getOne,
      level: "public",
    },
  },
  "/user/:id": {
    get: {
      action: getOneUser,
      level: "public",
    },
  },
};
