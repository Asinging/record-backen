//const Q = require("q")
module.exports = {


  friendlyName: 'members select',


  description: 'select all documented members recorded in the church',


  inputs: {

  },


  exits: {


  },


  fn: async function (inputs) {
    let res = this.res
    let flag = "generalMembers"
    let year = "abundance"

    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // res.header("Access-Control-Allow-Credentials", true)
    let date = await sails.helpers.thisMonthSearch(year)

    let queryResult = await sails.helpers.sendMultipleQueries(date, flag)

    return res.json(queryResult)
  }

};
