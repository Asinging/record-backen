module.exports = {


  friendlyName: 'Insertdb',


  description: 'Insertdb queries.',


  inputs: {
    // signUpDetails: {
    //   requrired: true,
    //   type: "string"

    firstName: {
      type: "string",

    },
    // lastName: {
    //   type: "string",


    // },
    // email: {
    //   type: "string",


    // },
    // password: {
    //   type: "string",
    //   maxLenght: 15,
    //   minlenght: 6

    // },
    // rePassword: {
    //   type: "string",
    //   maxLenght: 15,
    //   minlenght: 6

    // },

    //}


  },


  exits: {
    notFound: {
      statusCode: 404,
      responseType: ""
    },
    success: {
      statusCode: 200,
      responseType: ""
    },
    serverError: {
      statusCode: 500,
      responseType: ""
    }

  },


  fn: async function (inputs, exits) {
    var userDetails = await inputs.create({
      f_name: inputs.firstName,
      // l_name: inputs.InsertDetails.lastName,
      // email: inputs.InsertDetails.email,
      // password: inputs.InsertDetails.password,
      // re_password: inputs.InsertDetails.rePassword
    });

    if (!userDetails) {
      return exits.success({
        message: 'invalid, problem creating user'
      });
    }
    return exits.success({
      message: 'User has been created successfully.',
      data: userRecord
    });
  }


}
