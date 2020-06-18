module.exports = {


  friendlyName: 'This year search',

  description: '',
  inputs: {
    year: {
      type: 'string'
    }
  },
  exits: {

    success: {
      description: 'All done.',
    },
  },
  fn: async function (inputs) {
    let date = new Date()
    year = inputs.year
    ll = date.getFullYear()
    days = []
    if (year) {
      year = date.getFullYear()
    } else {
      year;
    }
    for (i = 0; i < 12; i++) {
      let monthEnding = await sails.helpers.getLastDayOfMonth(ll, i)
      date.setMonth(i)
      for (k = 1; k <= monthEnding; k++) {
        let limit = `${k}/${date.getMonth() + 1}/${year}`
        days.push(limit)
      }
    }
    return days
  }
};
