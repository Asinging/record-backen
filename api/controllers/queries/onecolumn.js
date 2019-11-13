module.exports = {
  friendlyName: "letsSeeIfThionecolumn",
  description: "onecolumn something.",

  inputs: {
    firstName: {
      type: "string"
    },
    lastName: {
      type: "string"
    },
    email: {
      type: "string"
    },
    password: {
      type: "string"
    },
    re_password: {
      type: "string"
    }
  },

  exits: {
    success: {
      statusCode: 200,
      responseType: "",
      message: "",
      data: ""
    }
  },

  fn: async function (inputs, exits) {
    var f_name = inputs.firstName;
    var l_name = inputs.lastName;
    var email = inputs.email;
    var password = inputs.password;
    var re_password = inputs.re_password;

    var queryString = 'INSERT INTO  leadership (f_name, l_name, email, password, re_password) VALUES ("' + f_name + '","' + l_name + '","' + email + '","' + password + '","' + re_password + '")'


    var push = await Leadership.getDatastore().sendNativeQuery(
      queryString,
      (err, response) => {
        if (!push) {
          console.log(err);
        }
        console.log(response);
        return exits.success({
          message: "it has been seent successfully",
          response: {
            message: "this is the response message from the server"
          },
          response
        });
      }
    );
    // All done.
    return;
  }
};
