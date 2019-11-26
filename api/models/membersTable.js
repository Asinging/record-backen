/**
 * MembersInsert.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require("bcrypt-nodejs")
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

    name: {
      type: "string",
      required: true,

    },
    department: {
      type: "string",
      required: true,

    },
    phone: {
      type: "string",
      required: true,

    },
    dateOfBirth: {
      type: "string",
      required: true,

    },
    firstTimer: {
      type: "string",

    },
    secondTimer: {
      type: "string",

    },
    password: {
      type: "string",

    },
    // beforeValidate: function (user, cb) {
    //   bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash(user.password, salt, null, function (err, hash) {
    //       if (err) return cb(err);
    //       user.password = hash;
    //       return cb();
    //     });
    //   });
    // }

  },


};
