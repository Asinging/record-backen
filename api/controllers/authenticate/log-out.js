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
      req.session.userId = "undefined"
      return res.json({
        message: "You have successully signed out"
      })
    }


    // All done.
    return;

  }


};
