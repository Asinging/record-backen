module.exports = {


  friendlyName: 'Irregular members select',


  description: 'we want to know how often does a member comes to church and how many',


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


    // let calLastDayOfTheMonth = await sails.helpers.getLastDayOfMonth(date.getFullYear(), date.getMonth(), )
    // let monthDates = [] // this days are taking from adding 1 to today up to the last day of the month
    // // the start of the half of last month that will complete 
    // //30 days added to the days of the month spent already

    // date.setMonth(date.getMonth() - 1) // setting the month to previous month
    // for (i = (todaysDate + 1); i <= calLastDayOfTheMonth; i++) {
    //   params = `${i}/${date.getMonth() + 1}/${date.getFullYear()}`
    //   monthDates.push(params)


    // }
    // date.setMonth(date.getMonth() + 1)
    // for (i = 1; i <= todaysDate; i++) {
    //   params = `${i}/${date.getMonth() + 1}/${date.getFullYear()}`
    //   monthDates.push(params)

    // }
    let startingDate = new Date(`${time.getFullYear()}-${time.getMonth() - 1}-${todaysDate + 1}`)


    monthDates = await sails.helpers.iterators(thisIteration)
    queryResult = await sails.helpers.sendMultipleQueries(monthDates, flag, startingDate)






    // All done.
    return res.json(queryResult)

  }


};
