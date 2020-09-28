scanButton.addEventListener("click", async () => {      
  //almost everything is displayed in the log() for testing purposes but it has no use and can be erased                                                                                                                                                                          
  log("Ver 4.79");                                                            
  log("User clicked scan button");    

  try {          
    let tagValue='no Tag';
    let msgValue,msgType;
    let tagObj=null; 
    let beaconObj=null;                                                                                        
    const reader1 = new NDEFReader();  
    const controller = new AbortController();                                                                                                                                                         
    await reader1.scan({ signal: controller.signal });                                                                                   
    log("> Scan started");                                                                                  
    reader1.addEventListener("error", (event) => {
      log(`Argh! ${event.message}`);
    });                
    var myTag = new tagAssoc();
    reader1.onreading = ({message,serialNumber}) => {  
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
    };
controller.signal.onabort = event => {
  console.log("We're done waiting for NDEF messages.");
};

// Stop listening to NDEF messages after 3s.
setTimeout(() => controller.abort(), 3_000);   
  }                                                                                                                                                                                                                                                                                     

  catch (error) {                                                                                           
    log("Argh! " + error);                                                                                
  } 
                                                                                              
});                                                                                                   


unpairButton.addEventListener("click",async() =>{
  clear();
  log('> User clicked the "unpair" button');
  var tagUnpair=new tagAssoc();
  tagUnpair.unpairFromTag(String(serialNumber));
  
  
  }) 



addButton.addEventListener("click",async() =>{
  clear();
  let check = new tagAssoc();
  if(confirm('Do you want to add a new person to the database?')){
let pers= window.prompt('Please enter a new name to associate');
check.addPerson(pers);
  }
});
