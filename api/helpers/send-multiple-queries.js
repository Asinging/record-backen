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
       type: "string"
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
     // console.log(time)
     //sails.log("yes wee are")
     // year as flag to differentiate to query from
     if (flag == "financialRecords") {


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
           return exits.success(query)
         } else {
           return exits.success(query)
         }
       } else {
         return exits.notFound({
           data: "cound\'nt go through"
         })
       }
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
