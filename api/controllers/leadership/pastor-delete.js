module.exports = {
  friendlyName: 'Pastor delete',

  description: '',

  inputs: {
    ids: {
      type: 'json',
    },
  },

  exits: {},

  fn: async function (inputs) {
    let req = this.req;
    let res = this.res;
    //console
    .lg(Object.key(inputs).length);
    //let arr = [];
    Object.values(inputs).forEach(items => {
      items.forEach(obj => {
        let objProps = obj
        console.log(objProps);
        Object.keys(objProps).forEach(ids => {
          console.log(ids);
        });
      });
    });
    // console.log(inputs);

    //console.log(id)

    // All done.

    // console.log('i have done that you said');
    // membersTable.destroy(id).exec((err, data) => {
    //   if (data) {
    //     res.json({
    //       id: id
    //     })
    //     console.log('i have done that you said');
    //     return res.send({
    //       id: `you have successfully destroy the element with ${id }`
    //     })
    //   } else if (err) {
    //     res.serverError();
    //   }
    // });
    return;
  },
};
