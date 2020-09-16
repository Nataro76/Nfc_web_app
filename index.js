scanButton.addEventListener("click", async () => {      
  //almost everything is displayed in the log() for testing purposes but it has no use and can be erased                                                                                                                                                                          
  log("Ver 2.64");                                                            
  log("User clicked scan button");    

  try {                                                                                                   
    const reader1 = new NDEFReader();                                                                                                                                                           
    await reader1.scan();                                                                                   
    log("> Scan started");                                                                                  
    reader1.addEventListener("error", (event) => {
      log(`Argh! ${event.message}`);
    });                

reader1.addEventListener("reading", ({ message, serialNumber }) => {    
  log(`> Serial Number: ${serialNumber}`);                                                                
  log(`> Records: (${message.records.length})`);
runMsgParse();
 tagValue=String(serialNumber);
   });
  var myTag = new tagAssoc();   
  let tagObj= myTag.serialCheck(tagValue);
    myTag.pairToBeacon(tagObj);
                                                                                                                                                                                                                                                                                           
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
}
