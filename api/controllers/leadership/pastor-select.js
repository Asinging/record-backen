module.exports = {


  friendlyName: 'Ii',


  description: 'Ii leadership.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    res = this.res
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Credentials", true)

    query = await membersTable.find(
      //{
      //   where: {
      //     first_name: "eje"
      //   }
      // }
    )
    if (query) {
      return res.json(query)
    }
    return;

  }


};
