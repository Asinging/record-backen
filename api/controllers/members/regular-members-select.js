module.exports = {


  friendlyName: 'Regular members select',


  description: 'we want to know how often does a member comes to church and how many time',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let thisIteration = "membersRegularities"
    let flag = "members"
    let time = new Date()
    let todaysDate = time.getDate()
    let res = this.res;
    let startingDate = new Date(`${time.getFullYear()}-${time.getMonth() - 1}-${todaysDate + 1}`)
    monthDates = await sails.helpers.iterators(thisIteration)
    queryResult = await sails.helpers.sendMultipleQueries(monthDates, flag, startingDate)
    // All done.
    return res.json(queryResult)

  }


};
