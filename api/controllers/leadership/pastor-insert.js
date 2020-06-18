module.exports = {

  friendlyName: 'Insert',


  description: 'pastor insert into databa',


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
    var dateOfBirth = sails.config.myVariables.removingTrailingZeros(inputs.dateOfBirth)
    var phone = inputs.phone


    let query = await Leaders.create({
      full_name: fullName,
      department: department,
      role: "pastor",
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
