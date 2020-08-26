module.exports = {


  friendlyName: 'call Queries',
  description: ' this is serve as a middleware for other request this e.g firstTimer and second timer request',
  inputs: {
    record: {
      type: "string"
    },
    date_1: {
      type: "string"
    },
    date_2: {
      type: 'string'
    },
    flag: {
      type: 'string'
    }

  },
  exits: {},
  fn: async function (inputs) {


    // a flag to be pass around for differenting one query type from another query
    let searchingType = inputs.record.toLowerCase()
    let day_1 = inputs.date_1;
    let day_2 = inputs.date_2
    let flag = inputs.flag


    let weekStart = sails.config.myVariables.Vs.weekStart
    let weekEnd = sails.config.myVariables.Vs.weekEnd



    let queryResult;
    if (searchingType == "today") {

      let days = `${date.getDate()}/${(date.getMonth() + 1)}`

    }

    if (searchingType == "this_week") {

      days = await sails.helpers.thisWeekSearch(weekStart, weekEnd)

    }
    if (searchingType == "this_month") {
      days = await sails.helpers.thisMonthSearch(flag)
    }
    if (searchingType == "this_year") {
      days = await sails.helpers.thisYearSearch(flag)
    }
    if (searchingType == "custom_search") {
      // //days = await sails.helpers.customSearch(day1, day2)

      days = await sails.helpers.customSearch(day_1, day_2)


    }
    let newDays = [] //  remmoving the year in the generated days for birthdays
    if (flag == "birthdays") {
      for (let x of days) {
        let day = x.split('/')
        day.pop()
        day = day.join('/')
        newDays.push(day)
      }

      return queryResult = await sails.helpers.sendMultipleQueries(newDays, flag)
    } else {
      return queryResult = await sails.helpers.sendMultipleQueries(days, flag)
    }

    // All done.
    //return queryResult

  }


}
