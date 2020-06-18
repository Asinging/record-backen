module.exports = {


  friendlyName: 'Financial record select',
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
  exits: {},
  fn: async function (inputs) {
    const res = this.res

    // (year) a flag to be pass around for differention from birthday query
    let flag = "firstTimers"
    // let day1 = inputs.day;
    // let day2 = inputs.day2

    let queryResult;
    let weekStart = sails.config.myVariables.Vs.weekStart
    let weekEnd = sails.config.myVariables.Vs.weekEnd


    let input = inputs.record.toLowerCase()

    if (input == "this_week") {
      days = await sails.helpers.thisWeekSearch(weekStart, weekEnd, flag)
      queryResult = await sails.helpers.sendMultipleQueries(days, flag)
      return res.json(queryResult)

    }
    if (input == "this_month") {
      days = await sails.helpers.thisMonthSearch(flag)


      queryResult = await sails.helpers.sendMultipleQueries(days, flag)

      return res.json(queryResult)
    }
    if (input == "this_year") {
      days = await sails.helpers.thisYearSearch(flag)

      queryResult = await sails.helpers.sendMultipleQueries(days, flag)

      return res.json(queryResult)

    }
    if (input == "custom_search") {
      // //days = await sails.helpers.customSearch(day1, day2)

      days = await sails.helpers.customSearch(inputs.date_1, inputs.date_2)

      queryResult = await sails.helpers.sendMultipleQueries(days, flag)
      //queryResult.newKey = "eje"



      return res.json(queryResult)
    }

    // All done.
    return;

  }


};
