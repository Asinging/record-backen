module.exports.sendWelcomeMail = function (obj, tok) {
  sails.hooks.email.send("resetPassword", {
      name: obj.full_name,

      url: `http://localhost:8080/#/auth/resetPassword?token=${tok}`
    }, {
      to: obj.email,
      subject: "Welcome Email",
    },
    (err) => {
      console.log(err || "mail sent")
    }
  );
};
