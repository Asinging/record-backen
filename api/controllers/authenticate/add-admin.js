/* eslint-disable */
const bcrypt = require("bcryptjs")
module.exports = {


  friendlyName: 'Creat user',


  description: 'creating admin user, those with the previledges to access the app fully',


  inputs: {
    fullName: {
      type: "string",

    },

    email: {
      type: "string",
      required: true
    },



    password: {
      type: "string",
      required: true
    },





  },

  exits: {
    success: {
      description: " if the the query went well the success should be thrown",
      message: "yes this is it"
    },
    cantCreate: {


      description: "cannot create this particular record"
    },
    // cannotCreateEmail: {
    //   responseType: "emailAlreadyExist",
    //   description: "custom response for email already exist "

    // }


  },


  fn: async function (inputs, exits) {
    let req = this.req
    let res = this.res
    // console.log(req.headers)
    let fullName = inputs.fullName.toLowerCase()

    let email = inputs.email.toLowerCase()


    let password = inputs.password.toLowerCase().trim()

    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(password, salt, (err, result) => {
        if (err) {
          console.log("password can't be hash")

        } else if (result) {
          password = result
          admin.create({
            full_name: fullName,
            email: email,

            password: password,



          }).fetch().then(result => {
            req.session.userId = result.id


            return exits.success({
              message: "successfuly",
              data: result,

            })

          }).catch(err => {
            // error.negotiate(err)

            return res.emailAlreadyExist("this email has been register already try a different one")
          })
          return result

        }
      })




    })






    // All done.
    return;

  }


};
