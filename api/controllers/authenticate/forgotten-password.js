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

  exits: {},

  fn: async function (inputs, exist) {
    const res = this.res;
    const req = this.req;
    console.log(req)
    let fullName = inputs.fullName.toLowerCase()
    let email = inputs.email.toLowerCase()
    let query = await admin.findOne({
      where: {
        full_name: fullName,
        email: email,

      },
    });
    if (!query) {
      console.log("i cant see any record that matches this input")
      return res.json("i cant't see any record that matches this");
    }
    req.session.userId = query.id;
    console.log("this is is")
    Mailer = await mailer.sendWelcomeMail(query);
    if (Mailer) {
      console.log("this is successfull" + success);
    } else if (Mailer) {
      console.log("the mail can't be be  sent");
    }
    return res.json({
      data: query,
      message: "visit your mail and reset your password",
    });

    return;
  },
};
