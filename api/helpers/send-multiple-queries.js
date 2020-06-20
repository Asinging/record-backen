 const Q = require("q")
 module.exports = {


   friendlyName: 'Send multiple queries',


   description: 'an abstracted mudule of queries to be sent',


   inputs: {
     date: {
       description: "this is the time from the action send for query",
       type: "json",
       required: true,
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

     const date = inputs.date

     let flag = inputs.flag
     let startingDate = inputs.startingDate
     // console.log(time)
     //sails.log("yes wee are")
     // year as flag to differentiate to query from
     if (flag == "financialRecords") {
       console.log(flag)


       let query = await financialRecord.find({
         where: {
           date: date,

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
       let query = await members.find({
         where: {
           timely_coming: "first",
           date_of_service: date

         },
       })
       if (query) {

         sails.log(query)
         return exits.success(query)

       }
     } else if (flag == "secondTimers") {
       let query = await members.find({
         where: {
           timely_coming: "second",
           date_of_service: date

         },
       })
       if (query) {

         sails.log(query)
         return exits.success(query)

       }
     } else if (flag == "members") {

       let query = await members.find({
         where: {
           updatedAt: {
             ">=": startingDate
           },
           date_of_service: date,


         }
       })

       if (!query) {
         res.negotiate("this")
       } else if (query) {
         console.log(query)
         return exits.success(query)
       }
     } else {
       Q.all([
           Leaders.find({
             where: {
               date_of_birth: time
             }
           }).then(),
           members.find({
             where: {
               date_of_birth: time
             }
           }).then()
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
