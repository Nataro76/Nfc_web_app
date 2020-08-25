var tagID= ['27:73:65:a9','04:30:4f:b2:00:53:80','56:72:4d:a5'];
var personID=['Nathan','Mickael','Giraffe'];
scanButton.addEventListener("click", async () => {                                                        
let tagValue=null;                                                                                      
let badgeValue=null;                                                                                      
let keyVal;                                                                                           
var assoc=null;                                                                                   
let funStarter=null;                                                                                          
log("Welcome to a new version of this app");                                                            
log("User clicked scan button");                                                                        
try {                                                                                                   
  const reader1 = new NDEFReader();                                                                       
  let match=false;                                                                                        
  let person,beaconVal;                                                                                     
  await reader1.scan();                                                                                   
  log("> Scan started");                                                                                  
  reader1.addEventListener("error", (event) => {
    log(`Argh! ${event.message}`);
  });                                                                                                    
  funStarter= reader1.addEventListener("reading", ({ message, serialNumber }) => {
log(`> Serial Number: ${serialNumber}`);                                                                
log(`> Records: (${message.records.length})`);
tagValue=String(serialNumber);
log("> Looking for a matching pair in the database");
keyVal = tagID.indexOf(tagValue);
if(keyVal!=-1){
  person= personID[tagID.indexOf(tagValue)];
  match=true;
}
else {                                                                                                    
  match=false;                                                                                          
}
if(match==true){                                                                                          
  log("We found a matching person for your tag");                                                         
  log(`> Name: ${person}`);
  if(confirm(`${person} Is that you?`)){                                                          
    assoc = true;
beaconVal=beaconAssociation();                                                                                  
}
  else{
   log("This person was ignored . . .");
  match=false;                                                                                            
}
}    
});                                                                                                                                                                                           
reader1.removeEventListener("reading",({message,serialNumber})=>{});
if(funStarter==true){
beaconVal=beaconAssociation();                                                                          
}                                                                                                           
try{                                                                                                                                                                                                            

}                                                                                                       
catch{                                                                                                                                                                                                          

}                                                                                                         
}                                                                                                       
catch (error) {                                                                                           
  log("Argh! " + error);                                                                                
}                                                                                                     
});                                                                                                  

async function beaconAssociation() {
var beaconKey = ['04:82:3a:2a:ce:66:80','04:a9:34:2a:ce:66:80'];
var beaconID = ['3EE66B','3EE694'];                                                                     
let keyRead,row,beacon,addID;                                                                                                                                                    
log('Scanning for localisation beacon');
if(window.alert("Scan beacon now")){
  if(tagValue.onchange()){
    return true;
  }
}                                                
keyRead = String(serialNumber);
row = beaconKey.indexOf(keyRead);                                                                       
if(row!=-1){
beacon = beaconID[row];
alert(`The beacon ${beacon} and the tag are correctly associated`)
}                                                                                                       
else{
log('There is no matching beacon in the list');
if(confirm('Would you like to add a new beacon?')){                                                       
  beaconKey[beaconKey.length+1]=keyRead;                                                           
   addID=prompt("Type in the ID of the beacon")
if(addID!=null){
beaconID[beaconID.length+1]=addID;                                                                      
return beaconID[row];                                                                                 
}                                                                                                           
}                                                                                                     
}                                                                                                                                                                                                   
} 
addButton.addEventListener("click",async() =>{
  let username;
  log('> User clicked the "Add" button . . .');
  if(confirm("Do you want to add a new user?")){
username = prompt("Type in your username here: ");
  }
});                                                                                                                     
