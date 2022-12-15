const express = require("express");
const path = require("path");
const lumie = require("lumie");

const app = express();

lumie.load(app, {
  preURL: "api",
  verbose: true,
  ignore: ["*.spec", "*.action"],
  controllers_path: path.join(__dirname, "controllers")
});

const server = app.listen(3000, "127.0.0.1", () => {
  const { address, port } = server.address();
  console.log("Example app listening at http://%s:%s", address, port);
});