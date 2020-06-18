bcrypt = require("bcryptjs")
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
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    let res = this.res;
    let req = this.req;
    var email = inputs.email;
    let password = inputs.password;
    foundUser = []


    admin.find({
        where: {
          email: email,
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
        data.forEach(item => {
          user = bcrypt.compareSync(password, item.password)
          if (user) {
            foundUser.push(item)

          }

        })

        if (foundUser !== []) {
          if (req.session) {
            res.cookie('eje', "youandme", {
              maxAge: 900000,
              httpOnly: true
            })
            res.status(200);
            return res.json({
              data: foundUser.email,
              msg: 'you have successfully login',
            });
          } else {
            return res.serverError({
              statusCode: 500,
              msg: 'you dont any authentication yet',
            });
          }
        }
      });

    // All done.


    // passport.authenticate('local', function (err, user, info) {
    //   if ((err) || (!user)) {
    //     return res.send({
    //       message: info.message,
    //       user
    //     });
    //   }
    //   req.logIn(user, function (err) {
    //     if (err) res.send(err);
    //     return res.send({
    //       message: info.message,
    //       user
    //     });
    //   });
    // })(req, res);
    return;
  },
};
