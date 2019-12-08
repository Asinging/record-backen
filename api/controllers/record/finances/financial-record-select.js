var moment = require('moment')
module.exports = {


  friendlyName: 'Financial record select',


  description: '',


  inputs: {
    record: {
      type: "string"
    },

  },


  exits: {

  },


  fn: async function (inputs) {
    let query;
    const res = this.res
    const date = new Date()
    console.log(date)
    if (inputs.record == "offering") {
      query = await financialRecord.find({
        where: {
          // dataT: moment(date).format('YYYY:MM:DD hh:mm:ss A')
          offering: 12
        },
        select: ['offering']


      })

    }
    if (query) {
      console.log("this is the data")
      return res.json({
        data: query
      })


    }

    // All done.
    return;

  }


};
