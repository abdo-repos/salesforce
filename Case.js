var util = require('util');

module.exports = {
  retrieveCase : (conn,id)=>{
    conn.sobject("Case").retrieve(id, function(err, account) {
        if (err) { return console.error(err); }
        console.log(util.inspect(account,false,null,true))
      });
},
  addCase: (conn,AccountId)=>{
    conn.sobject("Case").create({
       AccountId,
       Subject:'objet de la reclamation',
       Description:'Description de la reclamtion',
      
      Nom_du_contact__c:'Tebba test1',
      Bien__c: 'a012000001h7n4AAAQ',
      Origin:'Web',
      Projet__c: 'a0B2000000b8KjZEAU',
      Tranche_commerciale__c: 'a0E2000000qQAa0EAG',

     }, function(err, ret) {
      if (err || !ret.success) { return console.error(err, ret); }
      console.log("Created record id : " + ret.id);
      // ...
    });
    
  },
  retrieveCaseByProspect : (conn,id)=>{
    conn.sobject('Case').find({AccountId:id}, function(err, rets) {
      if (err) { return console.error(err); }
      let subjectOfReclamtion=[]
      for (const ret of rets) 
          subjectOfReclamtion.push({NumReclamation:ret.Num_reclamation__c,Subject:ret.Subject,Status:ret.Status})

      console.log(subjectOfReclamtion)
  })
},
  getStatusofReclamtionByNum:(conn,num)=>{
    conn.sobject('Case').find({Num_reclamation__c:num}, function(err, rets) {
      if (err) { return console.error(err); }
      let date;
      for (const ret of rets) 
      {
          if(ret.Status==='Constat planifié'){
              date = new Date(ret.Date_du_constat__c)
              console.log(date.toLocaleDateString())
             
          }else if(ret.Status==='Recevable'){
            date = new Date(ret.Date_r_elle_de_d_but_des_travaux__c)
              console.log(date.toUTCString())
              
          }else if(ret.Status==='Non Recevable'){
              console.log(ret.Rasions_de_non_recevabilite__c)
          }else{
            console.log(ret.Status)
          }
      }
  })
  },
  retriveRecalamtionByNum: (conn,num)=>{
    conn.sobject('Case').find({Num_reclamation__c:num}, function(err, rets) {
      if (err) { return console.error(err); }
     
      for (const ret of rets) 
      {
        console.log(util.inspect(ret,false,null,true))
      }
  })
},

}