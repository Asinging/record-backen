const bcrypt = require("bcryptjs")
module.exports = {


  friendlyName: 'Creat user',


  description: 'creating admin user, those with the previledges to access the app fully',


  inputs: {
    fullName: {
      type: "string",
      required: true
    },

    email: {
      type: "string",
      required: true
    },

    dateOfBirth: {
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
      description: " if the the query went well the success should be thrown"
    },
    cantCreate: {
      description: "cannot create this particular record"
    }

  },


  fn: async function (inputs, exits) {
    let fullName = inputs.fullName

    let email = inputs.email

    let dateOfBirth = inputs.dateOfBirth
    //var hpassword;
    let password = inputs.password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, result) => {
        if (err) {
          console.log("password can't be hash")

        } else if (result) {
          password = result
          admin.create({
            full_name: fullName,
            email: email,
            date_of_birth: dateOfBirth,
            password: password,

          }).fetch().then(result => {

            console.log(result)
            return exits.success({
              message: "successfuly",
              data: result,

            })

          }).catch(err => {
            error.negotiate(err)
            return exits.cantCreate('this record is unable to create')
          })
          return result

        }
      })




    })






    // All done.
    return;

  }


};
