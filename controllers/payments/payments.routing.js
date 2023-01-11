const { getAll } = require("./get-payments.action");
const { postOne } = require("./post-payments.action");

module.exports = {
  "/:slug": {
    get: {
      action: getAll,
      level: "public",
    },
  },
  "/": {
    post: {
      action: postOne,
      level: "public",
    },
  },
};
