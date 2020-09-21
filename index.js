scanButton.addEventListener("click", async () => {      
  //almost everything is displayed in the log() for testing purposes but it has no use and can be erased                                                                                                                                                                          
  log("Ver 4.47/troubleshooting");                                                            
  log("User clicked scan button");    

  try {          
    let tagValue='no Tag';
    let msgValue,msgType;
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
  for (const record of message.records) {
    log(`> Record type:   ${record.recordType}`);
     switch(record.recordType){
        case "text":
  console.assert(record.recordType === "text");
  const textDecoder = new TextDecoder(record.encoding);
  msgValue= `Text: ${textDecoder.decode(record.data)} (${record.lang})`;
  break;
       default:
       msgValue=0;
//this is all to compute the message
}
     
     }
  if(msgValue==0){
    tagValue=String(serialNumber);
    tagObj=myTag.serialCheck(tagValue);
  }
  else if(typeof msgValue== 'string'){
    beaconObj =myTag.readMessage(msgValue);
  }
});
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
    
}


