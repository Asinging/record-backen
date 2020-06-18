module.exports.myVariables = {
  project: "this is house of all my globally access Variables",
  authorName: "SINGINGSONGZ",

  Vs: function () {
    let date = new Date()
    let daysOfWeekSpent = date.getDay() + 1
    let presentDay = date.getDate()
    let remainingDaysOfWeek = 7 - daysOfWeekSpent;
    //subtracting 1 from the week so we don't have 0 day when looking for the weekStart 
    let weekStart = presentDay - (daysOfWeekSpent - 1)
    let weekEnd = presentDay + remainingDaysOfWeek
    return {
      weekStart,
      weekEnd,
      presentDay,
      remainingDaysOfWeek,
    }

  }(),
  removingTrailingZeros: function (params) {
    param = params.split('/')
    rr = []
    for (i = 0; i < param.length; i++) {
      rr.push(parseInt(param[i]))

    }
    param = `${rr[0]}/${rr[1]}`
    return param
  }


}
