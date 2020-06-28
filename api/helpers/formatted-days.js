module.exports = {


  friendlyName: 'Format days for queries',


  description: ' this formats the days generally for queries converting all numbers as  string and removing trailing zeroes',


  inputs: {
    days: {

      type: "json",
      required: true,
      description: "this is either days of this_week, this_month or thi_year"
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    let days = inputs.days
    let houseArray = []
    for (let x of days) {
      x = x.split('/')
      arr = []

      for (let y of x) {
        arr.push(parseInt(y))
      }

      arr.join('/')
      houseArray.push(arr)



    }
    return days
  }


};
