module.exports = {


  friendlyName: 'Custom search',


  description: 'this is for custom search for financial transaction, it is called from the main page  of the finance Record' +
    "",


  inputs: {
    date_1: {
      type: 'string'
    },
    date_2: {
      type: 'string'
    }
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function (inputs) {
    console.log(inputs.date_1, inputs.date_2)
    let thisIteration = "customSearch"

    input = inputs.date_1.split('/')
    input2 = inputs.date_2.split('/')

    let arr1 = []
    let arr2 = []

    for (i = 0; i < input.length; i++) {
      arr1.push(parseInt(input[i]))
      arr2.push(parseInt(input2[i]))

    }

    let [day, month, year] = arr1;
    let [day2, month2, year2] = arr2;



    var arr = []

    //let the first day to be queried from, is not bigger than the last day
    if (year <= year2) {

      if (year === year2) {
        if (month <= month2) {
          if (month === month2) {
            if (day < day2) {
              arr.push(arr1, arr2)

              days = await sails.helpers.iterators(thisIteration, arr)
            } else if (day > day2) {
              arr.push(arr2, arr1)
              days = await sails.helpers.iterators(thisIteration, arr)
            }
          } else if (month < month2) {
            arr.push(arr1, arr2)
            days = await sails.helpers.iterators(thisIteration, arr)
          } else if (month > month2) {
            arr.push(arr2, arr1)
            days = await sails.helpers.iterators(thisIteration, arr)

          }
        }

      } else if (year < year2) {
        arr.push(arr1, arr2)
        days = await sails.helpers.iterators(thisIteration, arr)
      }

      // changes the order of the date selected, may user from a higher number to a lower one
    } else if (year > year2) {
      arr.push(arr2, arr1)
      days = await sails.helpers.iterators(thisIteration, arr)

    }
    return days
  }

}
