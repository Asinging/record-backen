//const Q = require("q")

module.exports = {
  friendlyName: 'Birthdate',
  description: 'Birthdate event.',
  inputs: {
    day: {
      type: "string",
      required: true
    }
  },
  exits: {},
  fn: async function (inputs) {

    const res = this.res
    var date = new Date()
    var weekStart = sails.config.myVariables.theVs.weekStart
    var weekEnd = sails.config.myVariables.theVs.weekEnd


    var queryResult;
    if (inputs.day === "today") {
      // getting the current date in day and month
      let time = `${date.getDate()}/${(date.getMonth() + 1)}`
      //calling the helpercal
      queryResult = await sails.helpers.sendMultipleQueries(time)
      return res.json(queryResult)
    }

    //this week search
    if (inputs.day === "thisWeek") {

      time = await sails.helpers.thisWeekSearch(weekStart, weekEnd)
      queryResult = await sails.helpers.sendMultipleQueries(time)
      sails.log(queryResult)
      return res.json(queryResult)
    }
    //this month search
    if (inputs.day == "thisMonth") {
      time = await sails.helpers.thisMonthSearch()
      queryResult = await sails.helpers.sendMultipleQueries(time)
      return res.json(queryResult)
    }
    return
  }
}
