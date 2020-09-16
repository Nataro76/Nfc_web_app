scanButton.addEventListener("click", async () => {      
  //almost everything is displayed in the log() for testing purposes but it has no use and can be erased                                                                                                                                                                          
  log("Ver 2.76");                                                            
  log("User clicked scan button");    

  try {          
    let tagValue,msgValue;
    let tagObj=null; 
    let beaconObj=null;                                                                                        
    const reader1 = new NDEFReader();                                                                                                                                                           
    await reader1.scan();                                                                                   
    log("> Scan started");                                                                                  
    reader1.addEventListener("error", (event) => {
      log(`Argh! ${event.message}`);
    });                
    var myTag = new tagAssoc();
reader1.addEventListener("reading", ({ message, serialNumber }) => {    
  log(`> Serial Number: ${serialNumber}`);                                                                
  log(`> Records: (${message.records.length})`);
msgValue=runMsgParse();
tagValue=String(serialNumber);
});
  if(tagValue) {
 tagObj= myTag.serialCheck(tagValue);
  }
  else {
    tagObj=myTag.readMessage(msgValue);
  }

if(tagObj!=null){
  launchSecondRead();
  beaconObj=myTag.serialCheck(tagValue);   
}
                                                                                                                                                                                                                                                                                      
  }

  catch (error) {                                                                                           
    log("Argh! " + error);                                                                                
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

async function runMsgParse(){
  for (const record of message.records) {
    log(`> Record type:   ${record.recordType}`);
     switch(record.recordType){
        case "text":
  console.assert(record.recordType === "text");
  const textDecoder = new TextDecoder(record.encoding);
  return `Text: ${textDecoder.decode(record.data)} (${record.lang})`;
  break;
       case "url":
       //nothing yet
       break;
       default:
       log('> n/a message');
//this is all to compute the message
}
     
     }    
}

async function launchSecondRead(){
  window.alert('You can place your beacon now');
}
