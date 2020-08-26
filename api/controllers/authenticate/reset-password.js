const bcrypt = require('bcryptjs');
module.exports = {


  friendlyName: 'Reset newPassword',


  description: '',


  inputs: {
    newPassword: {
      type: "string"
    }

  },


  exits: {
    uccess: {
      description: " if the the query went well the success should be thrown",
      message: "yes this is it"
    },
  },


  fn: async function (inputs, exits) {
    let req = this.req
    let res = this.res
    let newPassword = inputs.newPassword
    console.log(req.session.userId)
    console.log(newPassword)
    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(newPassword, salt, (err, result) => {
        if (err) {
          console.log("newPassword can't be hash")

        } else if (result) {
          newPassword = result
          admin.updateOne({
            id: req.session.userId
          }).set({
            password: newPassword
          }).then(result => {
            console.log(result)
            // res.local.userName = result.full_name
            sails.hooks.email.send("passwordChanged", {
                Name: result.full_name,
              }, {
                to: result.email,
                subject: "Email Reset Successfull",
              },
              (err) => {
                console.log(err || "Mail Sent!");
              }
            )
            // mailer.sendWelcomeMail(query);
            return exits.success({
              message: "you Password has successfully been changed",
              data: result,

            })

          }).catch(err => {
            console.log(err)
            // error.negotiate(err)

            return res.serverError()
          })
          return result

        }
      })




    })


    // All done.
    return;

  }


};
