const path = require("path");
var SkipperDisk = require("skipper-disk");
SkipperDisk
  ?
  console.log("i haver the skipper disk") :
  console.log("i dont have the skipper disk");
module.exports = {
  friendlyName: "Application setup",

  description: "",
  inputs: {
    orgInitial: {
      type: "string",
    },
    orgName: {
      type: "string",
    },

    orgLogo: {
      type: "ref",
    },
  },
  exits: {
    notFound: {
      description: "",
    },
  },
  fn: async function (inputs, exits) {
    let res = this.res;
    let req = this.req;
    let orgName = inputs.orgName;
    let orgInitial = inputs.orgInitial;
    let orgLogo = inputs.orgLogo;
    console.log(orgName);
    console.log(orgInitial);
    console.log(orgLogo);
    var data = req
    console.log(data)
     

    // All done.
    return;
  },
};
