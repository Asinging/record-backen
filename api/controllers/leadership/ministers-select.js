module.exports = {
  friendlyName: "Ministers select",

  description: "",

  inputs: {},

  exits: {},

  fn: async function () {

    let res = this.res
    let query = await Leadership.find({
      where: {
        role: 'minister'

      }
    })
    //.exec((err, resp) => {
    if (!query) {
      console.log("cannot fetch data")
      return exist.error()

    }
    if (query) {
      if (query.length == 0) {
        return res.status(402).json({
          data: "the data for the minister requested for"
        })
      }

      // query.forEach(resData => {
      //   if (resData.role == "minister") {
      //     resRole.push(resData)
      //   }
      // })

      console.log(query)
      return res.json({
        data: query
      })
    }

    ///resRole.length = 0
    //})

    return


  }
};
