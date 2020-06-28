 const Q = require("q")
 module.exports = {


   friendlyName: 'Send multiple queries',


   description: 'an abstracted mudule of queries to be sent',


   inputs: {

     days: {
       description: "this is the time from the action send for query",
       type: "json",

     },
     flag: {
       type: "string",
       required: true
     },

     startingDate: {
       description: "this is irregular and regular members search, the date till present date to check how consistent a member has been coming on the range  of dates",
       type: "number"
     }

   },


   exits: {

     success: {
       description: 'All done.',
     },
     notFound: {
       description: "query could not go through"
     }

   },


   fn: async function (inputs, exits) {

     let days = inputs.days

     let flag = inputs.flag

     let startingDate = inputs.startingDate

     // year as flag to differentiate to query from
     if (flag == "financialRecords") {
       console.log(flag)


       let query = await financialRecord.find({
         where: {
           date: days,

         }
       })

       if (!query) {
         console.log("cannot fetch data")
         return exist.error()
       }
       if (query) {

         if (query.length == []) {
           sails.log("the query result is empty")
           return exits.success(query)
         } else {
           return exits.success(query)
         }
       } else {
         return exits.notFound({
           data: "cound\'nt go through"
         })
       }

       //  query for firstTimers
     } else if (flag == "firstTimers") {
       //  console.log("this is 'this is multipleQueries days'")

       let query = await members.find({
         where: {
           timely_coming: "first",
           date_of_service: days

         },
       })
       if (query) {

         console.log(query)
         return exits.success(query)

       }
     } else if (flag == "secondTimers") {
       let query = await members.find({
         where: {
           timely_coming: "second",
           date_of_service: days

         },
       })
       if (query) {

         sails.log(query)
         return exits.success(query)

       }

       // this is regular and irregular members this excludes old members, pastors and ministers units heads

     } else if (flag == "members") {

       let query = await members.find({
         where: {
           updatedAt: {
             ">=": startingDate
           },
           date_of_service: days,


         }
       })


       if (!query) {
         res.negotiate("this")
       } else if (query) {
         console.log(query)
         return exits.success(query)
       }
     } else if (flag == "birthdays") {
       console.log(days, flag)
       Q.all([
           Leaders.find({
             where: {
               date_of_birth: days
             }
           }).then(),
           members.find({
             where: {
               date_of_birth: days
             }
           }).then()
         ])
         .spread(function (leaders, members) {

           let arr = []
           arr.push(leaders, members)
           console.log([leaders, members]);
           return exits.success(arr)


         }).fail(err => {
           console.log(err)

         })
     }


     // this seaches for general members ever recorded, including pastors, head of units, and ministers
     else if (flag == "generalMembers") {
       console.log(flag)



       Q.all([
           Leaders.find().then(),
           members.find().then()
         ])
         .spread(function (leaders, members) {

           let arr = []
           arr.push(leaders, members)
           //console.log([leaders, members]);
           return exits.success(arr)


         }).fail(err => {
           console.log(err)

         })


     }

   }


 };
