module.exports = {


  friendlyName: 'Irregular members select',


  description: 'we want to know how often does a member comes to church and how many',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    function calLastDayOfTheMonth(m) {

      return new Date(0, m + 1, 0).getDate()
    }
    var params;
    let res = this.res;
    let req = this.req
    let date = new Date()
    let monthDays = []
    // the start of the half of last month that will complete 
    //30 days added to the days of the month spent already
    let day = date.getDate()
    date.setMonth(date.getMonth() - 1)
    for (i = (day + 1); i <= calLastDayOfTheMonth(date.getMonth()); i++) {
      params = `${i}/${date.getMonth() + 1}/${date.getFullYear()}`
      monthDays.push(params)


    }
    date.setMonth(date.getMonth() + 1)
    for (i = 1; i <= day; i++) {
      params = `${i}/${date.getMonth() + 1}/${date.getFullYear()}`
      monthDays.push(params)

    }
    let sendDate = new Date(`${date.getFullYear()}-${date.getMonth() - 1}-${day + 1}`)
    console.log(sendDate)

    // native((err, response) => {
    //   response.find({
    //     where: {
    //       updatedAt: {
    //         ">=": sendDate
    //       }
    //     },
    //     //   where: {
    //     //     qty: {
    //     //       $in: [5, 15]
    //     //     }
    //     //   }

    //   })
    // }).toArray((err, results) => {
    //   console.log(results)
    // })

    let query = await membersTable.count().
    where({
      updatedAt: {
        ">=": sendDate
      },
      // date_of_service: {
      //   monthDays
      // }
    }).
    where({
      //date_of_service: monthDays

    }).
    select()
    if (!query) {
      res.negotiate("this")
    } else if (query) {}


    function returnVariable(newVariableCreated, count) {
      eval(newVariableCreated + count++ + "= '[]'")
      return newVariableCreated

    }

    foundVariables = []
    buffer = []
    count = 0
    //console.log(query)

    filtered = query.map(element => {
      if (element.full_name) {

        return element.full_name

      }
    })
    filtered.forEach(items => {
      if (buffer.includes(items)) {
        console.log(items)
        buffer.push(items)
      } else {
        buffer.push([items])
      }
    })
    console.log(buffer)



    function ii(theArray) {
      let newArr = []
      theArray.forEach(elem => {
        //if () {}

      })
    }



    // All done.
    return;

  }


};
