/* eslint-disable linebreak-style */
const bcrypt = require('bcryptjs');
module.exports = {
  friendlyName: 'Login',

  description: 'Login auth.',

  inputs: {
    email: {
      type: 'string',
      required: true,
      allowNull: false,
    },
    password: {
      type: 'string',
      required: true,
    }
  },

  exits: {
    badUserRequest:{
      description:"this should be thrown when the client request for a user that does not exist",
    
    }
  },

  fn: async function (inputs, exits) {
    console.log("finally fix this")
    let res = this.res;
    let req = this.req;

    var email = inputs.email;
    var password = inputs.password.trim();
    console.log(email, password);
  var foundUser = [];


    admin.findOne({
      where: {
        email: email,
      },

      // select: ['email', 'password'],
    })
      .catch(err => {
        if (err) {
          console.log('inconsistency violation');
          return res.json({
            data: err,
            statusCode: 500,
          });
        }
      })
      .then(data => {
        //console.log(data)
        if (!data) {
          return res.userNotFound("no User exist with this authentication details")
        
        } else {
          //console.log(data)
          Object.entries(data).forEach(item => {
            if (item[0] === 'password') {
              (async (password, item) => {
                // console.log(item)
                let checked = await bcrypt.compare(password, item);
                // if (result) {
                if (checked) {
                  //console.log(data)

                  req.session.userId = data.id;
                  //console.log(req.session)


                  // res.status(200);
                  // res.cookie('rememberMe', 1, {
                  //   signed: true,
                  //   //SameSite = "none",
                  //   maxAge: 900000,
                  //   httpOnly: true,
                  //   path: '/'
                  // secure: true
                  // })

                  return res.json({
                    data: data,
                    msg: 'you have successfully login',

                  });
                }

                if (!checked) {


                  return res.forbidden({
                    message: 'passord incorrect'
                  });
                }
              })(password, item[1]);
            }
          });
        }
      });

    // All done.



    return;
  },
};
