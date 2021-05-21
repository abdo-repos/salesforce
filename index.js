require('dotenv').config()

var sf = require('jsforce');
var util = require('util');


const {addCase, retrieveCase,retrieveCaseByProspect,getStatusofReclamtionByNum,retriveRecalamtionByNum} = require('./Case');
const{retrieveAccount,retrieveAccount_2,addAccount,addAccount_2,addAccountObjetPersonAccount,retrieveAccount_3} = require('./Account')
const {addManif,retriveAcquisition,retrieveAcq,addAcq,addBien,addTranche,retrieveManif,retrieveAllcity} = require('./Manif')


const username = process.env.USER;
const password =process.env.PASS;
var conn = new sf.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
   loginUrl : 'https://emtiaz--sandbox.my.salesforce.com'
});
conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }

    //retrieveManif(conn,'B-25068')
    //retrieveAllcity(conn);
    addManif(conn,'0015E00001WpAlRQAV','a0G2000000rEn1nEAC')
  //retrieveAccount_3(conn,'06 69593744')
  //getStatusofReclamtionByNum(conn,'Rec-4883')
  //addAccount_2(conn)
  //addAccountObjetPersonAccount(conn)
  //retrieveCase(conn,'5005E00000A6apkQAB')//5005E00000A6atDQAR
  //addCase(conn,'0012000001EB9rlAAD')
  //retrieveAccount_2(conn,'0012000001EB9rlAAD')
  //retriveRecalamtionByNum(conn,'Rec-4883')
  //addAccount_2(conn)
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.

  // ...
  /*conn.bulk.query(`SELECT Name from Account WHERE PersonMobilePhone='00212644000052'`)
  .on('record', function(rec){
    console.log(rec)
  })
  .on('error',function(error){console.log(error)})*/

  //retrieveAcq(conn,'001g000002WXKFCAA5')
 // addAccount(conn,null);
//retrieveAccount_2(conn,'0015E00001WpAlRQAV')

//addAcq(conn,'0015E00001VNoVeQAL','a012000001h7n4AAAQ')
//retrieveAcq(conn,'0015E00001VNoVeQAL')
//addBien(conn)
//addTranche(conn)
//
//retrieveCaseByProspect(conn,'001g000002WXKFCAA5')
////getStatusofReclamtionByNum(conn,'001g000002WXKFCAA5','Rec-0382')
//retriveRecalamtionByNum(conn,'001g000002WXKFCAA5','Rec-0382')
});
//https://cs17.salesforce.com/servlet/servlet.Integration?scontrolCaching=1&amp;lid=00b20000001FUo8&amp;eid=001g000000Psbd7&amp;ic=1


