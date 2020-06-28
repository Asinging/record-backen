/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  //******************************************************************************** */
  //my custom routes


  "GET /birthdays": {
    action: "events/birthdays"
  },
  "GET /irregularMembers": "members/irregular-members-select",
  "GET /regularMembers": "members/regular-members-select",

  "GET /firstTimers": {
    action: "record/attendance/firstTimers/first-timers"
  },
  "GET /secondTimers": {
    action: "record/attendance/secondTimers/second-timers"

  },
  "GET /addmembers": {
    action: "members/members-insert"

  },
  "GET /members": {
    action: "members/members-select"

  },

  "GET /financialRecords/select": {
    action: "record/finances/financial-record-select"
  },
  'GET /financeRecords/insert': {
    action: "record/finances/financial-record-insert"
  },

  'GET /headOfDepartments': "leadership/head-of-department-select",
  "get /addheadOfDepartments": "leadership/head-of-department-insert",

  'GET /deleteLeader': {
    action: 'leadership/leaders-delete',
  },
  'GET /ministers': {
    action: "leadership/ministers-select"
  },
  'get /addpastors': {
    action: 'leadership/pastor-insert',
  },
  'get /addministers': {
    action: 'leadership/minister-insert',
  },
  'GET /select': {
    action: 'leadership/leadership-select',
  },
  'get /pastors': {
    action: 'leadership/pastor-select',
  },

  'get /login': 'authenticate/login',
  'get /pastorInsert': {
    action: 'leadership/pastor-insert',
  },
  'get /adminSignUp': "authenticate/create-user",
  'get /adminLogin': "admin-login"


  //**************************************************************** */
};
