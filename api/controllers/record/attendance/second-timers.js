module.exports = {


  friendlyName: 'Second timer',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const res = this.res

    const query = await membersTable.find({
      where: {
        secondTimer: "yes"

      },
      select: ["secondTimer"]
    })
    if (query) {

      sails.log("yes this is the query" + query)
      return res.json({
        data: query
      })

    }

    // All done.
    return;

  }


};
