module.exports = {


  friendlyName: 'Thismonthsearch',


  description: 'queries for this month automaticaly route to this endpoint',

  inputs: {
    year: {
      type: "string"
    }


  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // passing the the date function as parameter converts it to string which we can not get the .getMonth method from
    // so a new date instance has to be created
    let date = new Date()
    // (year) a flag pass around to helpers module to be to dictate from financial queries and birthday queris
    let year = inputs.year
    let theMonth = date.getMonth()
    let monthEnding = await sails.helpers.getLastDayOfMonth(date.getFullYear(), theMonth)
    let days = []
    if (year) {
      year = date.getFullYear()
    } else {
      year = 'abundance'
    }

    for (i = 1; i <= monthEnding; i++) {
      let limit = `${i}/${date.getMonth() + 1}/${year}`
      days.push(limit)
    }


    daysFormatted = await sails.helpers.formattedDays(days)
    return daysFormatted


  }



};
