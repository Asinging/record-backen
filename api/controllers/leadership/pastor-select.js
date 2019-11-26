module.exports = {


  friendlyName: 'Ii',


  description: 'Ii leadership.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    res = this.res
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // res.header("Access-Control-Allow-Credentials", true)

    query = await Leadership.find({
      where: {
        role: 'pastor'
      }
    })

    if (!query) {
      console.log("there is something wrong with your query or wrong parameter was use to query ")
      return res.statusCode(500).json({
        data: "failed trying to querying data"
      })
    } else if (query) {
      if (query.length == []) {

        console.log("sorry the database is empty")


        return res.status(201).json(query)

      } else {
        console.log("i got the deal")
        return res.status(200).json(query)
      }

    }


    return;

  }


};
