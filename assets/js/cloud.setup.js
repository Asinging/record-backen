/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"birthdays":{"verb":"GET","url":"/birthdays","args":["record","date_1","date_2","flag"]},"firstTimers":{"verb":"GET","url":"/firstTimers","args":["record","date_1","date_2"]},"secondTimers":{"verb":"GET","url":"/secondTimers","args":["record","date_1","date_2"]},"membersInsert":{"verb":"GET","url":"/addmembers","args":["fullName","department","phone","dateOfBirth","timelyComing","dateOfService","address"]},"membersSelect":{"verb":"GET","url":"/members","args":[]},"financialRecordSelect":{"verb":"GET","url":"/financialRecords/select","args":["record","date_1","date_2"]},"financialRecordInsert":{"verb":"POST","url":"/financeRecords/insert","args":["offering","tithe","thanksGiving","date"]},"leadersDelete":{"verb":"GET","url":"/deleteLeader","args":["ids"]},"ministersSelect":{"verb":"GET","url":"/ministers","args":[]},"pastorInsert":{"verb":"GET","url":"/addpastors","args":["fullName","department","dateOfBirth","phone"]},"ministerInsert":{"verb":"POST","url":"/addministers","args":["fullName","department","dateOfBirth","phone"]},"pastorSelect":{"verb":"GET","url":"/pastors","args":[]},"createAdmin":{"verb":"POST","url":"/adminSignUp","args":["fullName","email","password"]}}
  /* eslint-enable */

});
