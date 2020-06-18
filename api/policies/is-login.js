// check for user authentication key
module.exports = async function (req, res, proceed) {
  if (!req.cookies.eje) {
    return res.unauthorized()
  } else {
    return proceed()
  }
}
