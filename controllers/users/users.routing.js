const { update } = require("./users-update.action");
const { getOne } = require("./users-get.action");

module.exports = {
  "/:id": {
    get: {
      action: getOne,
      level: "public",
    },
    put: {
      action: update,
      level: "public",
    },
  },
};
