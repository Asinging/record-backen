// // check for user authentication key
module.exports = async function (req, res, proceed) {

  // check if the user req has a session userid
  console.log("Jesus you are great")
  if (req.session.userId) {
    console.log(req.session.userId)

    return proceed()
  } else {
    return res.unauthorized();
  }







}
