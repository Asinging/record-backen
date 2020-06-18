module.exports = {


  friendlyName: 'Head of department select',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let res = this.res
    let query = await Leaders.find({
      where: {
        role: 'head of department'

      }
    })
    //.exec((err, resp) => {
    if (!query) {
      console.log("cannot fetch data")
      return exist.error()

    }
    if (query) {
      if (query.length == 0) {
        return res.status(200).json("the data entry is empty")
      }

      // query.forEach(resData => {
      //   if (resData.role == "minister") {
      //     resRole.push(resData)
      //   }
      // })

      console.log(query)
      return res.status(200).json(query)
    }
    // All done.
    return;

  }


};
