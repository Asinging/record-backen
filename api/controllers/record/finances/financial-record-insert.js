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
    specialHonor: {
      type: "number"
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    const res = this.res
    const offering = inputs.offering;
    const tithe = inputs.tithe;

    const thanksGiving = inputs.thanksGiving;
    const specialHonor = inputs.specialHonor;

    const query = await financialRecord.create({
      offering: offering,
      tithe: tithe,
      thanks_giving: thanksGiving,
      special_honor: specialHonor

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
