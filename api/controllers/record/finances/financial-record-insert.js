module.exports = {


  friendlyName: 'Financial record insert',


  description: '',

  inputs: {
    offering: {
      type: "number"
    },
    tithe: {
      type: "number"
    },
    thanksGiving: {
      type: "number"
    },
    date: {
      type: "string"
    }

  },
  exits: {

  },


  fn: async function (inputs) {
    const res = this.res
    const offering = inputs.offering;
    const tithe = inputs.tithe;
    const thanksGiving = inputs.thanksGiving;
    let newDate = []
    let date = inputs.date.split('/')
    for (i of date) {
      date = parseInt(i)
      newDate.push(date)

    }

    date = newDate.join('/')
    console.log(date)

    const query = await financialRecord.create({
      offering: offering,
      tithe: tithe,
      thanks_giving: thanksGiving,
      date: date,

    }).fetch()
    if (query) {
      return res.json({
        data: query
      })


    } else {
      console.log("this is the error")
      return res.serverError({
        data: "yes"
      })
    }

    // All done.
    return;

  }


};
