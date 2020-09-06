module.exports = {


  friendlyName: 'Log out',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let req = this.req
    let res = this.res

    if (req.session.userId) {
      await admin.updateOne({
        where: {
          id: req.session.userId
        }
      }).set({
        token: '',
        token_exp: 0,
      })
      req.session.userId = "undefined"
      return res.json({
        message: "You have successully signed out"
      })
    }


    // All done.
    return;  }


};
