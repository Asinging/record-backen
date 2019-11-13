module.exports = {

  friendlyName: 'Insert',


  description: 'Insert leadership.',


  inputs: {

    firstName: {
      type: "string",
      required: true,

    },
    lastName: {
      type: "string",
      required: true,


    },
    email: {
      type: "string",
      required: true,

    },
    role: {
      type: "string",

    },
    dateOfBirth: {
      type: "string",
      required: true,

    },
    phone: {
      type: "number",
      required: true,

    },
    password: {
      type: "string",
      required: true,
    }


  },


  exits: {



  },


  fn: async function (inputs, exits) {
    // Object.keys(inputs).forEach(f => {
    //   if (inputs.f = '')
    // })
    var firstName = inputs.firstName
    var lastName = inputs.lastName
    var email = inputs.email
    var role = inputs.role
    var dateOfBirth = inputs.dateOfBirth
    var phone = inputs.phone
    var password = inputs.password
    var queryString = 'INSERT INTO leadership (first_name, last_name, email, role, date_of_birth, phone, password) VALUE("' + firstName + '","' + lastName + '","' + email + '","' + role + '","' + dateOfBirth + '","' + phone + '","' + password + '")'
    var push = await Leadership.getDatastore().sendNativeQuery(queryString, (err, data) => {
      if (err) {
        console.log("querying databaser  has an error " + err)

      }
      if (data) {
        console.log(data)
        return exits.success({
          message: "successful",
          data: data,

        })

      }


    })
    if (push == false) {
      console.log("i cant seen this request at ll")

    }

    // All done.
    return;

  }


};
