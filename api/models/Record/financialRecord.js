/**
 * Record/financial-record.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    offering: {
      type: "number",

    },
    tithe: {
      type: "number"
    },
    thanksGiving: {
      type: "number"
    },
    specialHonor: {
      type: "number"
    },
    date: {
      type: "ref",
      columeType: "datestamp"
    }

  },

};
