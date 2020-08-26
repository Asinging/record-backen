module.exports.sendWelcomeMail = function (obj) {
  sails.hooks.email.send("resetPassword", {
      Name: obj.full_name,
    }, {
      to: obj.email,
      subject: "Welcome Email",
    },
    (err) => {
      console.log(err || obj.email || "Mail Sent!");
    }
  );
};
