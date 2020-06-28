module.exports = {


  friendlyName: 'Iterators',


  description: 'Iterators something.',


  inputs: {
    thisIteration: {
      type: "string",
      required: true
    },
    arr: {
      type: "json"
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {

    // we cannot pass the the date function as parameter cus it is converted  to string 
    // so a new date has to be instantiated
    let time = new Date()
    let todaysDate = time.getDate()
    theMonth = time.getMonth()
    let thisIteration = inputs.thisIteration
    let arr = inputs.arr
    console.log(arr)
    if (arr != undefined) {
      var [date, weekStart, weekEnd, countDate] = arr
      console.log(weekStart)
    }

    var days = []
    let requestYear = time.getFullYear()


    // this week iteration

    if (thisIteration == "thisWeek") {

      monthEnding = await sails.helpers.getLastDayOfMonth(time.getFullYear(), theMonth)
      // if (typeof countDate === "string") {
      //   requestYear = time.getFullYear()
      // } else {
      //   requestYear = 'abundance'
      // }
      if (Math.sign(weekStart) == -1) { // checking if weekStart is of a negative number

        weekStart = Math.abs(weekStart)

        for (let i = countDate; i <= monthEnding; i++) {
          date.setDate(i)
          //checking if the month is a 2 digit month otherwise add zero
          if (date.getMonth() + 1 < 10) {
            limit = `${date.getDate()}/${date.getMonth() + 1}/${requestYear}`
          } else {
            limit = `${date.getDate()}/${date.getMonth() + 1}/${requestYear}`
          }
          days.push(limit)
        }
        for (let i = 1; i <= weekEnd; i++) {

          days.push(`${i}/${date.getMonth() + 2}/${requestYear}`)
        }

      } else if (weekStart == 0) {
        date.setMonth(date.getMonth() - 1)
        for (let i = monthEnding; i <= monthEnding; i++) {
          date.setDate(i)
          limit = `${date.getDate()}/${date.getMonth() + 1}/${requestYear}`
          days.push(limit)
        }
        for (i = 1; i <= weekEnd; i++) {
          days.push(`${i}/${date.getMonth() + 2}/${requestYear}`)
        }
      } else if (weekEnd > monthEnding) {
        monthEnding

        for (let i = weekStart; i <= monthEnding; i++) {
          date.setDate(i)
          limit = `${date.getDate()}/${date.getMonth() + 1}/${requestYear}`
          days.push(limit)

          console.log(days)
        }
        for (let i = 1; i <= (weekEnd - monthEnding); i++) {
          days.push(`${i}/${date.getMonth() + 2}/${requestYear}`)
        }
        sails.log(days)
      } else {
        console.log("i got you 2 uuu")
        for (let i = weekStart; i <= weekEnd; i++) {
          days.push(`${i}/${time.getMonth() + 1}/${requestYear}`)
        }

        // console.log(days)
      }
    }

    // custom search iterations
    else if (thisIteration == "customSearch") {
      let arr = inputs.arr

      let arr1 = arr[0]
      let arr2 = arr[1]
      let [day, month, year] = arr1
      let [day2, month2, year2] = arr2

      // count the days from the lower date to the higher one
      outer: while (year <= year2) {

        for (i = month; i <= 12; i++) {
          // get the days of month from helper
          let theMonth = await sails.helpers.getLastDayOfMonth(year, (month - 1))

          for (j = day; j <= theMonth; j++) {
            if (year === year2 && i === month2) {
              // + 1 to get the accurate date search for
              if (j == (day2 + 1)) {
                // out of the loop entirely
                break outer
              }
            }
            days.push(`${j}/${i}/${year}`)
          }
          day = 1
          month++
        }
        month = 1
        year++
      }

    }

    // regular / irregular members iterations
    else if (thisIteration == "membersRegularities") {
      let calLastDayOfTheMonth = await sails.helpers.getLastDayOfMonth(time.getFullYear(), time.getMonth())
      let params
      time.setMonth(theMonth - 1) // setting the month to previous month
      for (i = (todaysDate + 1); i <= calLastDayOfTheMonth; i++) {
        params = `${i}/${time.getMonth() + 1}/${time.getFullYear()}`
        days.push(params)


      }
      time.setMonth(time.getMonth() + 1)
      for (i = 1; i <= todaysDate; i++) {
        params = `${i}/${time.getMonth() + 1}/${time.getFullYear()}`
        days.push(params)

      }


    }



    return days
  }
}
