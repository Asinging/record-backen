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
  // "get /delete": {
  //   action: "leadership/leadership-insert"
  // },
  'GET /leadership/headofdepartment': {
    action: "leadership/head-of-department-select"
  },
  'GET /deletepastor': {
    action: 'leadership/pastor-delete',
  },
  'GET /leadership/ministers': {
    action: "leadership/ministers-select"
  },
  'get /leadership/insert': {
    action: 'leadership/leadership-insert',
  },
  'GET /select': {
    action: 'leadership/leadership-select',
  },
  'get /pastors': {
    action: 'leadership/pastor-select',
  },

  'get /login': 'authenticate/login',
  'get /membersInsert': {
    action: 'members/member-insert',
  },

  //**************************************************************** */
};
