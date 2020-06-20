module.exports = {


  friendlyName: 'Second timer',


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
    let compoundQuery



    try {
      compoundQuery = await sails.helpers.compoundQuery(record, date_1, date_2)
    } catch (error) {
      sails.log(error.name + ":" + error.message)

    } finally {
      console.log
      return res.json(compoundQuery)
    }
  }
};
