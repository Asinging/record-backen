const jwt = require("jsonwebtoken")
const fs = require("fs")
module.exports = {
  friendlyName: "Forgotten password",

  description: "",

  inputs: {
    fullName: {
      type: "string",
      required: true,
      description: "this is an already registered email address, it must exist in the database",
    },
    email: {
      type: "string",
      required: true,
      description: "this is an already registered email address, it must exist in the database",
    },
  },

  exits: {
    notFound: {
      description: "this will be triggered if the record searched does not match the searching parameter",
      message: "this is not found"
    },
    notMailed: {
      description: "can't be mailed at the moment"
    }
  },

  fn: async function (inputs, exits) {
    const res = this.res;
    const req = this.req;
    const fullName = inputs.fullName.toLowerCase().trim()
    const email = inputs.email.toLowerCase().trim()

    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 600,
      data: `${fullName}${Math.random()}`
    }, 'secret');
    if (!email) {
      return exits.notFound("this is email is never registerd")
    }
    let query = await admin.updateOne({
      where: {
        email: email
      }
    }).set({
      token: token,
      token_exp: Date.now() + 600000 // in milliseconds
    })
    if (!query) {
      console.log("i cant see any record that matches this input")
      return exits.notFound("There is no user that exist with this Username or Email address")
    }
    req.session.userId = query.id;

    console.log(token)
    mailer.sendWelcomeMail(query, token);
    return res.json({
      data: query,
      message: "visit your mail and reset your password",
    });



  },
};
