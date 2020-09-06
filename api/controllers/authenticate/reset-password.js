const bcrypt = require('bcryptjs');
module.exports = {


  friendlyName: 'Reset newPassword',


  description: '',


  inputs: {
    newPassword: {
      type: "string"
    },
    token: {
      type: "string"
    }

  },


  exits: {
    success: {
      description: " if the the query went well the success should be thrown",
      message: "yes this is it"
    },
    notToken: {
      description: "the token to check if the person making the password request is valid"
    },
    tokenExp: {
      description: "the token has expires"
    },
  },

  fn: async function (inputs, exits) {
    let req = this.req
    let res = this.res
    let newPassword = inputs.newPassword
    let token = inputs.token


    console.log(token)
    if (!token) {
      return exits.notToken("You cannot make this password reset now try again later")
    }
    // compares the token recieved withe that of the database
    userToken = await admin.findOne({
      where: {
        token: token,
        token_exp: {

          //pick the record that has value greater than now
          ">=": Math.floor(Date.now() / 1000)
        }
      }
    })
    if (!userToken) {
      return exits.tokenExp("You could not finish up the process. pls request for a new forgot password")
    }

    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(newPassword, salt, (err, result) => {
        if (err) {
          console.log("newPassword can't be hash")
          return serverError("the server is not responding try again")
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
                name: result.full_name,
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
