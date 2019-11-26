// check for user authentication key
module.exports = async function (req, res, proceed) {
  if (!req.sailsId) {
    return res.unauthorized()
  } else {
    res.proceed()
  }
}
