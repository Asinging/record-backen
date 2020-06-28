module.exports = {

  friendlyName: 'Insert',


  description: 'minister insert into database',


  inputs: {

    fullName: {
      type: "string",
      required: true,



    },
    department: {
      type: "string",

    },


    dateOfBirth: {
      type: "string",
      required: true,

    },
    phone: {
      type: "number",
      required: true,

    }


  },


  exits: {
    success: {
      description: "a way of saying we are done with we intend to"
    },
    notFound: {}


  },


  fn: async function (inputs, exits) {
    res = this.res
    // Object.keys(inputs).forEach(f => {
    //   if (inputs.f = '')
    // })
    var fullName = inputs.fullName;
    var department = inputs.department;
    var dateOfBirth = inputs.dateOfBirth
    var phone = inputs.phone
    // var queryString = 'INSERT INTO leadership (first_name, last_name, email, role, date_of_birth, phone) VALUE("' + firstName + '","' + lastName + '","' + email + '","' + role + '","' + dateOfBirth + '","' + phone + '")'
    // var push = await Leadership.getDatastore().sendNativeQuery(queryString, (err, data) => {
    //   if (err) {
    //     console.log("querying databaser  has an error " + err)

    //   }
    //   if (data) {
    //     console.log(data)
    //     return exits.success({
    //       message: "successful",
    //       data: data,

    //     })

    //   }


    // })
    // if (push == false) {
    //   console.log("i cant seen this request at ll")

    // }
    let query = await Leaders.create({
      full_name: fullName,
      department: department,
      role: "minister",
      date_of_birth: dateOfBirth,
      phone: phone

    }).fetch()
    if (query) {

      return exits.success({
        message: "successfull",
        data: query,
        statusCode: 200

      })


    } else if (!query) {
      console.log(query)

      console.log("cant go")
      return exits.notFound("THE REQUESTED PAGE NOT FOUND")
    }


    // All done.
    return;

  }


};
