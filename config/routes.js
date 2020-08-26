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


  "GET /birthdays/select": {
    action: "events/birthdays"
  },
  "GET /irregularMembers": "/irregular-members-select",
  "GET /regularMembers": "members/regular-members-select",

  "GET /firstTimers/select": {
    action: "record/attendance/first/first-timers"
  },
  "GET /secondTimers/select": {
    action: "record/attendance/second/second-timers"

  },
  "POST /addmembers": {
    action: "members/members-insert"

  },
  "GET /members": {
    action: "members/members-select"

  },
  "POST /appSetupDetatails": "Setup/application-setup",
  "GET /financialRecords/select": {
    action: "record/finances/financial-record-select"
  },
  'POST /financeRecords/insert': {
    action: "record/finances/financial-record-insert"
  },

  'GET /headOfDepartments': "leadership/head-of-department-select",
  "POST /addheadOfDepartments": "leadership/head-of-department-insert",

  'GET /deleteLeader': {
    action: 'leadership/leaders-delete',
  },
  'GET /ministers': {
    action: "leadership/ministers-select"
  },
  'POST /addpastors': {
    action: 'leadership/pastor-insert',
  },
  'POST /addministers': {
    action: 'leadership/minister-insert',
  },
  // 'GET /select': {
  //   action: 'leadership/leadership-select',
  // },
  'get /pastors': {
    action: 'leadership/pastor-select',
  },
  "GET /login  ": "authenticate/logins",
  'POST /resetPassword': 'authenticate/reset-password',

  'GET /adminSignUp': {
    action: "authenticate/add-admin",

  },
  "POST /forgotPassword": {
    action: "authenticate/forgotten-password",
  },
  "GET /logout": {
    action: "authenticate/log-out",
  }



  //**************************************************************** */
};
