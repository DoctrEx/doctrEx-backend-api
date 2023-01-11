const express = require("express");
const path = require("path");
const lumie = require("lumie");
var bodyParser = require("body-parser");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

lumie.load(app, {
  preURL: "api",
  verbose: true,
  ignore: ["*.spec", "*.action"],
  controllers_path: path.join(__dirname, "controllers"),
});

const server = app.listen(3001, "127.0.0.1", () => {
  const { address, port } = server.address();
  console.log("Example app listening at http://%s:%s", address, port);
});
