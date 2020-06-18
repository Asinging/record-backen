module.exports = {
  friendlyName: "get the last day of the month",
  description: "a simple function for calculating  and returning the last day of the month",
  inputs: {
    year: {
      type: 'number'
    },
    month: {
      type: "number",

      description: "the month in numbers to calculate how many days making it up ",
      required: true
    }
  },
  exits: {

    success: {
      description: 'All done.',
    },

  },
  fn: async function (inputs) {
    const year = inputs.year
    const month = inputs.month
    return new Date(year, month + 1, 0).getDate()
  }
}
