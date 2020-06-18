module.exports = {
  friendlyName: 'leaders delete',

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
    let arrDestroy = []
    console.log(inputs)

    Object.values(inputs).forEach(items => {
      items.map(obj => {

        //getting the id single and parsing it as json
        objProps = JSON.parse(obj);

        Object.values(objProps).forEach(key => {
          arrDestroy.push(key)


        });
      });
    });

    await Leaders.destroy({
      id: {
        in: arrDestroy
      }
    }).then(() => {
      console.log("am done")
      return res.json({})
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })


    // All done.

    // console.log('i have done that you said');

    return;
  },
};
