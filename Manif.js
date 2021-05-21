const util = require('util')
module.exports = {
    
    retrieveAllcity:(conn)=>{
      conn.sobject("Ville__c").find({},function(err,rets){
        if (err) { return console.error(err); }
        for (const ret of rets) 
        {
          console.log(ret.Id,ret.Nom_de_la_ville__c)
        }
      })
    },
    addManif: (conn,Prospect__c,idVille)=>{
      conn.sobject("Manifestation_de_besoin__c").create({ Prospect__c,Ville__c: idVille}, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
        // ...
      });
     
    },
    retrieveManif:(conn,id)=>{
      conn.sobject("Manifestation_de_besoin__c").find({Name:id}, function(err, rets) {
        if (err) { return console.error(err); }
        
        for (const ret of rets) 
        {
          console.log(util.inspect(ret,false,null,true))
        }
      })
    },
    addTranche:(conn)=>{
      conn.sobject("Tranche_s_quence__c").create({ Name:'tranche commerciale'}, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
        // ...
      }); 
    },
    addBien:(conn)=>{
      conn.sobject("Bien__c").create({ }, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
        // ...
      }); 
    },
    addAcq:(conn,id,Bien__c)=>{
      conn.sobject("Acquisition__c").create({ Prospect__c	:id,Bien__c }, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
        // ...
      });
    },
    retriveAcquisition: (conn,id)=>{
        conn.bulk.query(`SELECT Name from Acquisition__c WHERE Prospect__c='${id}' and Statut__c='Livré'`)
        .on('record', function(rec){
          console.log(rec)
          console.log('test')
        })
    },
    retrieveAcq : (conn,id)=>
    conn.sobject('Acquisition__c')
        .find({ Prospect__c: id}, function(err, rets) {
            if (err) { return console.error(err); }
    // destroyed results are returned
    let acqLivre = []
    let acqNonLivre = []
    for (const ret of rets) 
      ret.Statut__c==='Livré' ? acqLivre.push("reference de l'acquisition : " + ret.Name + " du projet :" +ret.ProjectName__c)
       : acqNonLivre.push("reference de l'acquisition : " + ret.Name + " du projet :" +ret.ProjectName__c)
    console.log(acqLivre);
    console.log(acqNonLivre)
    
  })
  }