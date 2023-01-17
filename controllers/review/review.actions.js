const db = require("../../models/index");
const ReviewModel = db.reviews;

module.exports.check = async (request, response) => {
  return response.json({ hekk: "hello" });
};
