module.exports = {


  friendlyName: 'Birthdate',


  description: 'Birthdate event.',


  inputs: {
    day: {
      type: "string",
      required: true
    }

  },


  exits: {

  },

  fn: async function (inputs) {

    const res = this.res
    let input = inputs.day
    let date = new Date()
    let time;




    if (input === "today") {
      time = date.getDate() + '-' + (date.getMonth() + 1)
      const query1 = await Leadership.find({
        where: {
          date_of_birth: time
        }
      })
      const query2 = await membersTable.find({
        where: {
          date_of_birth: time
        }
      })
      if (query1, query2) {
        return res.json({
          data: [
            query1, query2
          ]
        })
      }
    }


    function calLastDayOfTheMonth(m) {

      return new Date(0, m + 1, 0).getDate()

    }
    // # ##### ###### #####    ##   #####  ####  #####   ####  
    // #   #   #      #    #  #  #    #   #    # #    # #      
    // #   #   #####  #    # #    #   #   #    # #    #  ####  
    // #   #   #      #####  ######   #   #    # #####       # 
    // #   #   #      #   #  #    #   #   #    # #   #  #    # 
    // #   #   ###### #    # #    #   #    ####  #    #  ####  

    function daysIterator(date, weekStart, weekEnd, countDate) {
      date;
      if (Math.sign(weekStart) == -1) {

        weekStart = Math.abs(weekStart)
        //let monthEnd = calLastDayOfTheMonth(date.getMonth())

        for (let i = countDate; i <= calLastDayOfTheMonth(date.getMonth()); i++) {
          date.setDate(i)
          limit = `${date.getDate()}/${date.getMonth() + 1}`
          searchLimit.push(limit)
        }

        for (let i = 1; i <= weekEnd; i++) {

          searchLimit.push(`${i}/${date.getMonth() + 2}`)
        }

      } else if (weekStart == 0) {
        date.setMonth(date.getMonth() - 1)
        for (let i = calLastDayOfTheMonth(date.getMonth()); i <= calLastDayOfTheMonth(date.getMonth()); i++) {
          date.setDate(i)
          limit = `${date.getDate()}/${date.getMonth() + 1}`
          searchLimit.push(limit)
        }
        for (i = 1; i <= weekEnd; i++) {
          searchLimit.push(`${i}/${date.getMonth() + 2}`)
        }
      } else if (weekEnd > calLastDayOfTheMonth(date.getMonth())) {
        calLastDayOfTheMonth(date.getMonth())
        for (let i = weekStart; i <= calLastDayOfTheMonth(date.getMonth()); i++) {

          date.setDate(i)
          limit = `${date.getDate()}/${date.getMonth() + 1}`
          searchLimit.push(limit)
        }
        for (let i = 1; i <= (weekEnd - calLastDayOfTheMonth(date.getMonth())); i++) {
          searchLimit.push(`${i}/${date.getMonth() + 2}`)
        }

      } else {
        for (let i = weekStart; i <= weekEnd; i++) {
          searchLimit.push(`${i}/${date.getMonth() + 1}`)
        }
      }

    };

    // ┌─┐┌─┐┌─┐┬─┐┌─┐┬ ┬┬┌┐┌┌─┐  ┌─┐┌─┐┬─┐┌─┐┌┬┐┌─┐
    // └─┐├┤ ├─┤├┬┘│  ├─┤│││││ ┬  ├─┘├─┤├┬┘├─┤│││└─┐
    // └─┘└─┘┴ ┴┴└─└─┘┴ ┴┴┘└┘└─┘  ┴  ┴ ┴┴└─┴ ┴┴ ┴└─┘


    if (input === "thisWeek") {
      console.log("yes am here")

      let daysOfWeekSpent = date.getDay() + 1
      let presentDay = date.getDate()


      let remainingDaysOfWeek = 7 - daysOfWeekSpent;
      //subtracting 1 from the week so we don't have 0 day when looking for the weekStart 
      let weekStart = presentDay - (daysOfWeekSpent - 1)

      let weekEnd = presentDay + remainingDaysOfWeek
      var searchLimit = []


      //function returning days of the month it could have been in anywhere


      function searchingParams(date, weekStart, weekEnd) {

        theMonth = calLastDayOfTheMonth(date.getMonth())
        searchLimit;
        if (Math.sign(weekStart) == -1) {
          console.log("the first condition was met")
          date.setMonth(date.getMonth() - 1)

          let countDate = calLastDayOfTheMonth(date.getMonth()) + weekStart

          date.setDate(countDate)

          daysIterator(date, weekStart, weekEnd, countDate)

        } else if (weekEnd > 30) {

          console.log("the  second condition was met")
          date.setDate(weekStart)
          daysIterator(date, weekStart, weekEnd)

        }

        // else if (calLastDayOfTheMonth(date.getMonth()) == 31 && weekEnd > 31) {

        //   date.setMonth(date.getMonth() + 1)
        //   date.setDate(weekEnd - 31)
        //   daysIterator(date, weekStart, weekEnd)

        //}
        else if (calLastDayOfTheMonth(date.getMonth()) == 28) {
          if (weekEnd > 28) {
            date.setDate(weekStart)
            daysIterator(date, weekStart, weekEnd)

          } else {
            daysIterator(date, weekStart, weekEnd)
          }
        } else if (calLastDayOfTheMonth(date.getMonth()) == 29) {
          if (weekEnd > 29) {
            date.setDate(weekStart)
            daysIterator(date, weekStart, weekEnd)
          } else {
            daysIterator(date, weekStart, weekEnd)
          }
        } else {
          daysIterator(date, weekStart, weekEnd)
        }




        //else if (calLastDayOfTheMonth(0, date.getMonth()) == 29 && weekEnd > 29) {

        //   date.setMonth(date.getMonth() + 1)
        //   date.setDate(weekEnd - 29)
        //   daysIterator(date, weekStart, weekEnd)


        // }
        // //else if (weekStart < 28 && 28 > weekEnd && Math.sign(weekStart) != -1) {
        // else if (3 == 2) {
        //   console.log(weekStart, weekEnd)
        //   daysIterator(date, weekStart, weekEnd)
        // }

        console.log(searchLimit)

        //return searchLimit

      }

      // const query = await membersTable.find({
      //   where: {
      //     dateOfBirth: searchingParams(date, weekStart, weekEnd)
      //   }

      // })
      function con() {
        console.log(searchingParams(date, weekStart, weekEnd))
      }



      con()
      ///return res.json(searchingParams(date, weekStart, weekEnd))
    }









    // All done.  


  }
}
