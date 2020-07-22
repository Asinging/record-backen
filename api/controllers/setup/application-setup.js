module.exports = {


  friendlyName: 'Application setup',


  description: '',


  inputs: {
    orgName: {
      type: "string",

    },
    orgInitial: {
      type: "string",

    },
    orgLogo: {
      type: "ref"

    }



  },


  exits: {

  },


  fn: async function (inputs) {
    let res = this.res
    orgName = inputs.orgName
    orgInitial = inputs.orgInitial
    orgLogo = inputs.orgLogo
    console.log(orgName)
    let query = await Setup.create({
      orgName: orgName,
      orgInitial: orgInitial,
      orgLogo: orgLogo
    }).fetch()
    if (query) {
      return res.json(query)
    } else {
      return res.badRequest()
    }


    // All done.
    return;

  }


};
