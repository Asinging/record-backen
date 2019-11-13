/**
 * FirstmodelController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  first: function (req, res) {
    Firstmodel.find()

      .exec(function (err, users) {
        if (err) {
          return res.json(err, users)
        }
        return res.json(users)
      })
  },
  hi: function (req, res) {
    return res.send("Hi there!");
  },
  list: function (req, res) {
    Firstmodel.getDatastore().sendNativeQuery('SELECT * FROM newtable', function (err, results) {
      if (err) {
        res.send(res);
      } else {
        res.status(200).send(results)
      }
    });
  }
};
