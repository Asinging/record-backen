module.exports = {


  friendlyName: 'pulls financial record select data',


  description: '',


  inputs: {
    record: {
      type: "string"
    },
    date_1: {
      type: "string"
    },
    date_2: {
      type: 'string'
    }

  },


  exits: {

  },
  fn: async function (inputs) {
    const res = this.res
    let date_1 = inputs.date_1
    let date_2 = inputs.date_2
    let record = inputs.record
    let flag = "financialRecords"
    let compoundQuery;
    console.log(date_1, date_2, record)
    if (!record) {
      return res.badRequest()
    }
    try {
      compoundQuery = await sails.helpers.callQueries(record, date_1, date_2, flag)
    } catch (error) {
      sails.error(error.name + ":" + error.message)

    } finally {
     
      return res.json(compoundQuery)
    }
  }
};
