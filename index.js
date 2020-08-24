
     scanButton.addEventListener("click", async () => {
      let tagValue=null;
      let badgeValue=null;
      var assoc=null;
        log("Another version");
      log("User clicked scan button");
      try {
      const reader1 = new NDEFReader();
        await reader1.scan();
        log("> Scan started");
        reader1.addEventListener("error", (event) => {
          log(`Argh! ${event.message}`);
        });
        while(tagValue==null){
        reader1.addEventListener("reading", ({ message, serialNumber }) => {
  log(`> Serial Number: ${serialNumber}`);
  log(`> Records: (${message.records.length})`);
      tagValue=String(serialNumber);
    });}

        log("Now place the badge you want to pair . . .");
        try {
      badgeValue = getBadgeValue();
        }
        catch {
          log('There was an error when reading badge');
        }
      assoc = {tagValue:badgeValue};
      log('You correctly associated the values ');
      log(assoc);
      

      // assocData(tagValue);
      // tagValue=null;

          // if(tagValue=="04:82:3a:2a:ce:66:80"){
          // log(`This is tag 3EE66B`);
          // tagValue="3EE66B";
          // assocData(tagValue);

          // }
          // if(tagValue=="04:a9:34:2a:ce:66:80"){
          //               log('This is tag 3EE694');
          //               tagValue="3EE694";
          //               assocData(tagValue);
          // }
      }     
      catch (error) {
        log("Argh! " + error);
      }
    }); 
  //   writeButton.addEventListener("click", async () => {
  //     log("User clicked write button");     
  //     try {
  //       const writer = new NDEFWriter();
  //       await writer.write("Hello world!");
  //       log("> Message written");
  //     } catch (error) {
  //       log("Argh! " + error);
  //     }
  //   });   
//   async function assocData(tagval){
//   var reader2 = new NDEFReader;    
//   reader2.scan();
//   await reader2.addEventListener("reading",function thisfun() {
//   log('Please scan your badge now . . .');
//   let badge=null;
//   badge=String(reader2.serialNumber);});
//   log(`Your badge ID is: ${badge}`);
//   if(badge!=null){
//   if(confirm("Do you want to associate those values?")){
//   assoc = {badge:tagval};
//   log(`You succesfully associated tag ${tagval} with badge ${badge}`);
//   }
//   else{
//   log('Start again if you want to pair a new badge');   
//   }      
// }    
//   }     
async function getBadgeValue(){
  let badge = null;
  try {
  await findBadgeValue();
  }
  catch {
    log('Badge error');
  }
}
async function findBadgeValue(){
const reader2 = new NDEFReader;
let badge=null;
await reader2.scan;
log('Badge scan has started . . .');
while(badge==null){
reader2.addEventListener("reading",({serialNumber}) => {
badge = String(serialNumber);
});}
return badge;
}
