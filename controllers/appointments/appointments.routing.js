const { getOne } = require("./get-appointments.action");
const { postOne } = require("./post-appointments.action");

module.exports = {
  "/:slug": {
    get: {
      action: getOne,
      level: "public",
    },
    post: {
      action: postOne,
      level: "public",
    },
  },
};
