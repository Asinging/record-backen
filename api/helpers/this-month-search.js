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
    if (monthEnding == 28) {
      for (i = 1; i <= 28; i++) {
        let limit = `${i}/${date.getMonth() + 1}/${year}`
        days.push(limit)
      }
    } else if (monthEnding == 29) {
      for (i = 1; i <= 29; i++) {
        let limit = `${i}/${date.getMonth() + 1}/${year}`
        days.push(limit)
      }
    } else if (monthEnding == 30) {
      for (i = 1; i <= 30; i++) {
        let limit = `${i}/${date.getMonth() + 1}/${year}`
        days.push(limit)
      }
    } else if (monthEnding == 31) {
      for (i = 1; i <= 31; i++) {
        let limit = `${i}/${date.getMonth() + 1}/${year}`
        days.push(limit)
      }
    }
    return days


  }



};
