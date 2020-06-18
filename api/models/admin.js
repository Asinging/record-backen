/**
 * Admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */



module.exports = {

  attributes: {
    createdAt: false,
    updatedAt: false,

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝


    full_name: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true
    },
    date_of_birth: {
      type: "string",
      required: true
    },
    password: {
      type: "string",
      required: true
    },
    // hook: {

    // }
    // toJSON: function () {
    //   var obj = this.toObject();
    //   delete obj.password;
    //   delete obj.encryptedPassword;
    //   delete obj._csrf;
    //   return obj;
    // }

  },

  // custom: function () {
  //   return delete(this.password)
  // }
  // User.prototype.comparePassword = function (password) {
  //   return bcrypt.compareAsync(password, this.password)
  // }
}
