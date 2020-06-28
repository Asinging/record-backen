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
    //updatedAt: false,

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


    },
    department: {
      type: "string",


    },
    phone: {
      type: "string",


    },
    date_of_birth: {
      type: "string",


    },
    timely_coming: {
      type: "string",

    },
    address: {
      type: "string",

    },


    date_of_service: {
      type: "string",

    }
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
