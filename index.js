
     scanButton.addEventListener("click", async () => {
        let tagValue=null;
        var assoc=null;
        let badge=null;
        log("User clicked scan button");
        try {
        const reader = new NDEFReader();
          await reader.scan();
          log("> Scan started");
      
          reader.addEventListener("error", (event) => {
            log(`Argh! ${event.message}`);
          });
          reader.addEventListener("reading", ({ message, serialNumber }) => {
    
    log(`> Serial Number: ${serialNumber}`);
    log(`> Records: (${message.records.length})`);
        tagValue=String(serialNumber);
            if(tagValue=="04:82:3a:2a:ce:66:80"){
            log(`This is tag 3EE66B`);
            tagValue="3EE66B";
            assocData(tagValue);
            tagValue=null;
            }
            if(tagValue=="04:a9:34:2a:ce:66:80"){
                          log('This is tag 3EE694');
                          tagValue="3EE694";
                          assocData(tagValue);
                          tagValue=null;
    
    
            }
            else{
                log('How you doin?');
            }
        });
        } 
        
        catch (error) {
          log("Argh! " + error);
        }
      });
      
      writeButton.addEventListener("click", async () => {
        log("User clicked write button");
      
        try {
          const writer = new NDEFWriter();
          await writer.write("Hello world!");
          log("> Message written");
        } catch (error) {
          log("Argh! " + error);
        }
      });
    
    function assocData(tagval){
    log('Please scan your badge now . . .');
    reader.addEventListener("reading", ({ message, serialNumber }) =>{
    badge=String(serialNumber);
    });
    log(`Your badge ID is: ${badge}`);
    if(confirm("Do you want to associate those values?")){
    assoc = {badge:tagval};
    log(`You succesfully associated tag ${tagval} with badge ${badge}`);
    }
    else{
    log('Start again if you want to pair a new badge');   
    }
            
    }
    
    