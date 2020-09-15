scanButton.addEventListener("click", async () => {      
  //almost everything is displayed in the log() for testing purposes but it has no use and can be erased
  let tagValue=null;                                                                                      
  let badgeValue=null;                                                                                      
  let keyVal;                                                                                           
  var assoc=null;                                                                                   
  let funStarter=null;                                                                                          
  log("Ver 2.61");                                                            
  log("User clicked scan button");                                                                        
  try {                                                                                                   
    const reader1 = new NDEFReader();
    var assocTag = new tagAssoc();                                                                       
    let match=false;
    let tagObj;                                                                                        
    let person,beaconVal;                                                                                     
    await reader1.scan();                                                                                   
    log("> Scan started");                                                                                  
    reader1.addEventListener("error", (event) => {
      log(`Argh! ${event.message}`);
    });                                                                                                    
reader1.addEventListener("reading", ({ message, serialNumber }) => {
      
  log(`> Serial Number: ${serialNumber}`);                                                                
  log(`> Records: (${message.records.length})`);
   for (const record of message.records) {
    log(`> Record type:   ${record.recordType}`);
     switch(record.recordType){
        case "text":
  console.assert(record.recordType === "text");
  const textDecoder = new TextDecoder(record.encoding);
  log(`Text: ${textDecoder.decode(record.data)} (${record.lang})`);
  break;
       case "url":
       //nothing yet
       break;
       default:
       log('> n/a message');
//this is all to compute the message
}
     
     }
     
  //log(`> Data: ${parse}`);
 tagValue=String(serialNumber);
  // log("> Looking for a matching pair in the database");
  // keyVal = tagID.indexOf(tagValue);
  // if(keyVal!=-1){
  //   person= personID[tagID.indexOf(tagValue)];
  //   match=true;
  // }
  // else { 
  //   beaconAssociation(tagValue,person);
  //   match=false;                                                                                          
  // }
  // if(match==true){                                                                                          
  //   log("We found a matching person for your tag");                                                         
  //   log(`> Name: ${person}`);
  //   if(confirm(`${person} Is that you?`)){                                                          
  //     assoc = true;  
  //     window.alert("You can scan your beacon now");
  // }
  //   else{
  //    log("This person was ignored . . .");
  //   match=false;                                                                                            
  // }
  // }    
   });  
   tagObj= tagAssoc.SerialCheck(tagValue); 
   try {
     tagAssoc.pairToBeacon(tagObj);
   }        
   catch(e){
     log('Huston we have a problem')
   }                                                                                                                                                                                                                                                                                      
  }

  catch (error) {                                                                                           
    log("Argh! " + error);                                                                                
  }                                                                                                     
});                                                                                                   
//   async function beaconAssociation(beacon,person) {                                                                 
//   let keyRead,row,addID;                                                                                                                                                    
//   log('Scanning for localisation beacon');
//   if(window.alert("Scan finished!")){
//   a w a i t  tagValue.onchange();
//       return true;
  
//   }                                                
//   keyRead = beacon;
//   row = beaconKey.indexOf(keyRead);                                                                       
//   if(row!=-1){
//   beacon = beaconID[row];
//   }                                                                                                       
//   else{
//   log('There is no matching beacon in the list');
//       if(confirm('Would you like to add a new beacon?')){                                                       
//     beaconKey[beaconKey.length+1]=keyRead;                                                           
//      addID=prompt("Type in the ID of the beacon")
//   if(addID!=null){
//   beaconID[beaconID.length+1]=addID;                                                                      
//   return beaconID[row];                                                                                 
//   }                                                                                                                                                                                                                
//   }  
// }
//     if(typeof beacon=="string"){
//                 var binding = new tagAssoc(person,beacon);
//   binding.pair();
//   alert(`The beacon ${beacon} and the tag ${person} are correctly associated`)
//   log(`Association ended: ${assocEnd}`);

//     }
//     else{
//       log('No association was made');


//   }       
addButton.addEventListener("click",async() =>{
  //This is just a quick function using the eventlistener on the NDEFreader to add values to the arrays that store the IDs, can
  let username;
  log('> User clicked the "Add" button . . .');
  if(confirm("Do you want to add a new user?")){
username = prompt("Type in your username here: ");
let key;
    key=personID.length();
personID[key]=username;
    window.alert("Now scan your tag and pressok")
 tagID[key]=tagValue;
window.alert("Now scan your badge and press ok");
beaconID[key]=tagValue;
  }
});  

unpairButton.addEventListener("click",async() =>{
  //This was just used to erase the association object, right now it does nothing
  log.clear();
  log('> User clicked the "unpair" button . . .')
  await window.alert("Scan tag then click ok");
  window.alert("Now scan beacon and click ok");
  window.alert("Tags and beacons have been unpaired succesfully");
})
