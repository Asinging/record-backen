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


    phone: {
      type: "number",
      required: true,

    },

    dateOfBirth: {
      type: "string",
      required: true,

    },
    address: {
      type: "string",
      required: true
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
    console.log("can you see me am her")
    var fullName = inputs.fullName;
    var department = inputs.department;
    var dateOfBirth = inputs.dateOfBirth
    var phone = inputs.phone
    var address = inputs.address


    let query = await Leaders.create({
      full_name: fullName,
      department: department,
      role: "pastor",
      date_of_birth: dateOfBirth,
      phone: phone,
      address: address

    }).fetch()
    if (query) {

      return exits.success({
        message: "successfull",
        data: query,
        statusCode: 200

      })


    } else if (!query) {


      console.log("cant go")
      return exits.notFound("THE REQUESTED PAGE NOT FOUND")
    }


    // All done.
    return;

  }


};
