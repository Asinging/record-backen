//const Q = require("q")

module.exports = {
  friendlyName: 'Birthdate',
  description: 'Birthdate event.',
  inputs: {
    record: {
      type: "string",

    },
    date_1: {
      type: "string",

    },
    date_2: {
      type: "string",

    },
    flag: {
      type: "string",

    },
  },
  exits: {},
  fn: async function (inputs) {
    let flag = 'birthdays'
    const res = this.res
    let date_1 = inputs.date_1
    let date_2 = inputs.date_2
    let record = inputs.record

    let queriesCaller


    let queryResult;


    try {
      queriesCaller = await sails.helpers.callQueries(record, date_1, date_2, flag)
    } catch (error) {
      // sails.log(error.name + ":" + error.message)

    } finally {

      return res.json(queriesCaller)
    }



  }
}
