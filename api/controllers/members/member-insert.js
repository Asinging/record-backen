module.exports = {


  friendlyName: 'Insert',


  description: 'Insert members.',


  inputs: {
    fullName: {
      type: "string",
      required: true
    },

    department: {
      type: "string",
      require: false
    },
    phone: {
      type: "number",
      required: false,
    },

    dateOfBirth: {
      type: "string",
      required: false,
    },

    firstTimer: {
      type: "string",
      required: false,

    },
    secondTimer: {
      type: "string",
      required: false,

    },
    password: {
      type: "string"

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
    let firstTimer = inputs.firstTimer;
    let secondTimer = inputs.secondTimer;
    let password = inputs.password


    if (req.cookies) {

      let recordCreated = await membersTable.create({
        name: fullName,
        department: department,
        phone: phone,
        date_of_birth: dateOfBirth,
        first_timer: firstTimer,
        second_timer: secondTimer,
        password: inputs.password

      }).fetch()
      if (recordCreated) {
        res.status(200)
        return res.json({
          data: req.cookie,
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

    //}


  }
}
