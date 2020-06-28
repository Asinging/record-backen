module.exports = {


  friendlyName: 'Insert',


  description: 'Insert members.',


  inputs: {
    fullName: {
      type: "string",

    },

    department: {
      type: "string",

    },
    phone: {
      type: "number",

    },

    dateOfBirth: {
      type: "string",

    },

    timelyComing: {
      type: "string",


    },

    dateOfService: {
      type: "string",
      requried: true
    },
    address: {
      type: "string",

    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let req = this.req;
    let res = this.res;
    let fullName = inputs.fullName;
    let department = inputs.department;
    let phone = inputs.phone;
    let dateOfBirth = inputs.dateOfBirth;
    let timelyComing = inputs.timelyComing;
    let address = inputs.address

    let dateOfService = inputs.dateOfService.split('/')
    let arr = []


    for (let i of dateOfService) {
      arr.push(parseInt(i))
    }

    dateOfService = arr.join('/')

    //let [day, month, year] = arr;



    if (req.cookies) {

      let createRecord = await members.create({
        full_name: fullName,
        department: department,
        phone: phone,
        date_of_birth: dateOfBirth,
        timely_coming: timelyComing,
        address: address,
        date_of_service: dateOfService

      }).fetch()
      if (createRecord) {
        res.status(200)
        return res.json({
          data: createRecord,
          message: "yes this is it"
        })
      } else {
        console.log("couldn't create record or the database is not found")
        return res.status(500)
      }



    } else {
      return res.status(500)
    }


    // All done.



    return;

  }
}
