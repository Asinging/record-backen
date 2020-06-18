/**
 * Record/financial-record.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// var moment = require(moment)

// function fomattedTime() {

// }
module.exports = {
  attributes: {
    createdAt: false,
    updatedAt: false,
    offering: {
      type: 'number',
    },
    tithe: {
      type: 'number',
    },
    thanks_giving: {
      type: 'number',
    },
    date: {
      type: "string"
    },

    time_field: {
      type: 'ref',
      columnType: 'timestamp'
    },
  },
};
