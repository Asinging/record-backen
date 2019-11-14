module.exports = {


  friendlyName: 'leadershipSelect',


  description: 'Leadership something.',


  inputs: {

  },


  exits: {
    success: {
      responsType: JSON,
      description: 'successfull with the data',
      deata: '',
      message: 'yes'
    },

  },
  fn: async function (inputs, exits) {
    var res = this.res
    let findEje = await Leadership.find({
      where: {
        first_name: 'sun'
      }
    }).catch(err => {
      if (!err) console.log("this is errors")
    }).then(function (response) {
      if (response.length == []) {
        console.log("the response data is empty")
        res.statusCode(201).json({
          data: "the response data is empty"
        })
      }
      return res.json({
        data: "yess"
      })
    })



    // let res = this.res
    // queryString = `SELECT id, first_name,last_name, email, role, date_of_birth, phone, password FROM leadership`
    // await Leadership.getDatastore().sendNativeQuery(queryString, function (err, response) {
    //   if (err) console.log("cant make use of the database right now")
    //   return res.json({
    //     firstName: "eje"
    //   });

    // })

    //sails.log(rawResult);
    // ...grab appropriate data...
    // (result format depends on the SQL query that was passed in, and the adapter you're using)

    // Then parse the raw result and do whatever you like with it.

  }

  // All done.





};
