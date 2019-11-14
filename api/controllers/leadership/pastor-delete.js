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

    Object.values(inputs).forEach(items => {
      items.forEach(obj => {
        objProps = JSON.parse(obj);

        Object.values(objProps).forEach((key) => {
          console.log(key)

          let query = membersTable.destroy(key)
          if (query) {
            res.json({
              data: key,
            });
            console.log('i have done that you said');
            return res.json({
              id: `you have successfully destroy the element with ${key}`,
            });
          } else if (!query) {
            console.log("i didn't do it")
            res.serverError();
          }

        });
      });
    });

    // All done.

    // console.log('i have done that you said');

    return;
  },
};
