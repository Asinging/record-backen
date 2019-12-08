module.exports = {


  friendlyName: 'First members',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const res = this.res

    const query = await membersTable.find({
      where: {
        firstTimer: "yes"

      },
      select: ["firstTimer"]
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
