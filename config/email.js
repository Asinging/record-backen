const path = require("path")
const sails = require("sails")
module.exports.email = {
  service: "gmail",
  auth: {
    user: "ejesunday2@gmail.com",
    pass: "09037228349",
  },
  // templateDir: "",
  templateDir: path.resolve(sails.config.appPath, 'api/views/email'),
  from: "info@mycompany.com",
  testMode: false,
  ssl: true,
};
