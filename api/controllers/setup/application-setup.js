const path = require("path")
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
      type: "string"
    }
  },
  exits: {},
  fn: async function (inputs) {
    let res = this.res
    let req = this.req
    orgName = inputs.orgName
    orgInitial = inputs.orgInitial
    orgLogo = inputs.orgLogo
    console.log(orgLogo)
    let fileUploaded = req.file(orgLogo).upload({
      // maxBite: 10000000,
      dirname: path.resolve(sails.config.appPath, 'assets/images'),
    })
    if (!fileUploaded) {

      console.log("file failed to upload")
      return
    } else if (fileUploaded.length === 0) {
      return res.json('No file was uploaded');
    }

    return res.json({
      data: {
        orgName,
        orgInitial
      },
      message: "files successfully uploaded"
    })




    // All done.
    return;

  }


};
