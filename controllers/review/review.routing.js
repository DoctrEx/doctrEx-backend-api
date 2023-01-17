// const { update } = require("./review.action");
const { check } = require("./review.actions");
module.exports = {
  "/": {
    // post: {
    //   action: create,
    //   level: "public",
    // },
    get: {
      action: check,
      level: "public",
    },
  },
  //   "/:id": {
  //     get: {
  //       action: getOne,
  //       level: "public",
  //     },
  //   },
};
