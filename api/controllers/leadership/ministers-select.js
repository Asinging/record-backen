module.exports = {
  friendlyName: "Ministers select",

  description: "",

  inputs: {},

  exits: {},

  fn: async function () {

    let res = this.res
    let query = await Leaders.find({
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
      console.log(query)
      if (query.length == []) {
        return res.status(200).json({
          data: []
        })
      }

      // query.forEach(resData => {
      //   if (resData.role == "minister") {
      //     resRole.push(resData)
      //   }
      // })

      console.log(query)
      return res.status(200).json(query)
    }

    ///resRole.length = 0
    //})

    return


  }
};
