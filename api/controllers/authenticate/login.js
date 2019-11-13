module.exports = {
  friendlyName: 'Login',

  description: 'Login auth.',

  inputs: {
    email: {
      type: 'string',
      allowNull: false,
    },
    password: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    let res = this.res;
    let req = this.req;
    var email = inputs.email;
    let password = inputs.password;
    res.cookie('ejeFirstCookie', '1', {
      maxAge: 900000,
      htppOnly: true,
    });

    await Leadership.find({
        where: {
          email: email,
          password: password,
        },

        select: ['email', 'password'],
      })
      .catch(err => {
        if (err) {
          console.log('inconsistency violation');
          return res.json({
            data: err,
            statusCode: 405,
          });
        }
      })
      .then(data => {
        // checking session present
        console.log(req.cookies.ejeFirstCookie);
        if (req.session) {
          console.log(req.session);
          if (data) {
            res.status(200);
            return res.json({
              data: data,
              msg: 'you have successfully login',
            });
          }
        } else {
          return res.serverError({
            statusCode: 100,
            msg: 'you dont any authentication yet',
          });
        }
      });

    // All done.
    return;
  },
};
