module.exports = {


  friendlyName: 'This week search',


  description: 'queries for this week automaticaly route to this endpoint',


  inputs: {

    weekStart: {
      type: "number"
    },
    weekEnd: {
      type: "number"
    },
    flag: {
      type: "string"
    },

  },


  exits: {

    success: {
      description: 'All done.',
    },
  },
  fn: async function (inputs) {
    // passing the the date function as parameter converts it to string which we can not get the .getMonth method from
    // so a new date instance has to be created
    let thisIteration = "thisWeek"
    date = new Date()
    theMonth = date.getMonth()
    let weekStart = inputs.weekStart;
    let weekEnd = inputs.weekEnd;
    let flag = inputs.flag;
    let monthEnding = await sails.helpers.getLastDayOfMonth(date.getFullYear(), theMonth)
    let days = []
    let countDate;
    let disWeek = []


    //function searchingParams(date, weekStart, weekEnd) {
    //  theMonth = monthEnding
    if (Math.sign(weekStart) == -1) {

      date.setMonth(date.getMonth() - 1)

      countDate = monthEnding + weekStart

      date.setDate(countDate)

      days = await sails.helpers.iterators(thisIteration, disWeek.push(date, weekStart, weekEnd, countDate, flag))
      console.log(days)

    } else if (weekEnd > 30) {



      date.setDate(weekStart)
      disWeek.push(date, weekStart, weekEnd, countDate, flag)
      days = await sails.helpers.iterators(thisIteration, disWeek)
      console.log(time)

    } else if (monthEnding == 28) {
      if (weekEnd > 28) {
        date.setDate(weekStart)
        days = await sails.helpers.iterators(thisIteration, disWeek.push(date, weekStart, weekEnd, countDate, flag))
        console.log(time)

      } else {
        disWeek.push(date, weekStart, weekEnd, countDate, flag)
        days = await sails.helpers.iterators(thisIteration, disWeek)
        console.log(time)
      }
    } else if (monthEnding == 29) {
      if (weekEnd > 29) {
        date.setDate(weekStart)
        disWeek.push(date, weekStart, weekEnd, countDate, flag)
        days = await sails.helpers.iterators(thisIteration, )

      } else {
        disWeek.push(date, weekStart, weekEnd, countDate, flag)
        days = await sails.helpers.iterators(thisIteration, disWeek)
        console.log(days)
      }
    } else {
      disWeek.push(date, weekStart, weekEnd, countDate, flag)

      days = await sails.helpers.iterators(thisIteration, disWeek)

    }
    return days
  }



};
