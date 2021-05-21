var util = require('util');


module.exports = {
    retrieveAccount: async (conn,phone,getResult)=>{
        conn.bulk.query(`SELECT Name from Account WHERE PersonMobilePhone='${phone}'`)
        .on('record', getResult)
        .on('error',function(error){console.log(error)})
    },
    retrieveAccount_3:(conn,phone)=>{
      conn.sobject("Account").find({PersonMobilePhone:phone}, function(err, rets) {
        if (err) { return console.error(err); }
        
        for (const ret of rets){
            console.log(ret)
        }
      
    })
  },
    addAccount: (conn,account)=>{conn.sobject("Account").upsert({ 
        Name : 'Record #1',
        Etat_du_prospect__c:'Prospect',
        PersonMobilePhone:'00212606320766',
        Id:'001g000002XZjrYAAT'
      },'Id', function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log('Upserted Successfully');
        // ...
      });},
    retrieveAccount_2:(conn,id)=>{
        conn.sobject("Account").retrieve(id, function(err, account) {
            if (err) { return console.error(err); }
            console.log(util.inspect(account,false,null,true))
          });
    },
    addAccount_2:(conn)=>{
        conn.sobject("Account").create({
          FirstName:'jalil',
         LastName:'bennani',
           RecordTypeId:'0122000000064MUAAY',
           PersonMobilePhone:'0606321234',
           PersonEmail:'jalil@gmail.com'
         }, function(err, ret) {
            if (err || !ret.success) { return console.error(err, ret); }
            console.log("Created record id : " + ret.id);
            // ...
          });
    },
    addAccountObjetPersonAccount: (conn)=>{
      conn.sobject("PersonAccount").create({
        FirstName : 'abdallah',
        LastName:'addi',
        RecordTypeId:'0122000000064MUAAY'
        
        
     }, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
        // ...
      });
    }
  }