this.tag;
this.beacon;
this.storage =[{}];
this.nodeID;
function tagAssoc(){
this.tagID= ['27:73:65:a9','04:30:4f:b2:00:53:80','56:72:4d:a5'];
this.personID=['Nathan','Visiteur 096','Giraffe'];
this.beaconKey = ['04:82:3a:2a:ce:66:80','04:a9:34:2a:ce:66:80','5f:46:8b:73:dc:5e:eb'];
this.beaconID = ['3EE66B','3EE694','New high-tech beacon']; 
this.tempStorage=null;
} 

tagAssoc.prototype.readMessage= function(msg){
let message = String(msg);
let ADDR = message.match(/(\d+)/);
window.alert(ADDR);
checkForBeacon(ADDR);
}

async function storToTemp(data,type){
    if(this.tempStorage!=null){
        let oldData=this.tempStorage.data;
        let oldType=this.tempStorage.type;
    switch(oldType){
        case 'beacon':        
    if(type===oldType){  
        window.alert(`You scanned a beacon. To associate to ${oldData}, please scan a badge instead`);
break;
    } 
        else{
            if(confirm(`Do you want to associate ${oldData} with ${data} ?`)){
                this.pairToBeacon(data,oldData);
                this.tempStorage=null;
                break;
            }
          
        }

    case'tag':
    if(type===oldType){
        window.alert(`You scanned a badge. To associate to ${oldData}, please scan a beacon instead`);
        break;
    }
        else{
            if(confirm(`Do you want to associate ${oldData} with ${data} ?`)===true){
                pairToBeacon(oldData,data);
                this.tempStorage=null;

                }
                break;
        }
        }
    }
else {
    try{
window.alert('To associate a second tag, scan now, then click "ok" ');
    this.tempStorage={data:`${data}`,type:`${type}`};
    }
catch(error){
window.alert(error);
} 
}
}

tagAssoc.prototype.serialCheck=function(serial){
let tagValue=String(serial);
let keyVal= this.tagID.indexOf(tagValue);
let match=false;
let type;
if(keyVal!=-1){
this.tag = this.personID[keyVal];
match=true;
type='Tag';
}
else {
    keyVal= this.beaconKey.indexOf(tagValue);
    if(keyVal!=-1){
        this.beacon = this.beaconID[keyVal]; 
        type='Beacon'; 
        match=true; 
    }
    else{
    match=false;
    }
}
switch(match){
    case true:
        switch(type){
            case 'Tag':
        if(confirm(`Are you ${this.tag} ? `)){
            checkForPerson(this.tag);
            } 
            break;
            case 'Beacon':
            if(confirm(`You scanned the ${this.beacon} beacon`)){
                    checkForBeacon(this.beacon);
                }
                break;   
        }
        
}
}

        



async function pairToBeacon(tag,beacon) {
    try{
    if(checkMatch(tag,beacon)===true){  
    storeObject(tag,beacon);
    }
    else{
    }
    }
    catch(error){
        window.alert(error);
    }
}

async function storeObject(tag,beacon) {
    try{
    this.storage.push({PersonID:`${tag}`,BeaconID:`${beacon}`});
    window.alert(String(storage[0]));
    window.alert(`${tag} and ${beacon} have been correctly associated!`);
    }
    catch(error){
        window.alert(error);
    }
    this.tempStorage=null;
}

function checkMatch(person,beacon){
    try{

let personIndex=this.storage.PersonID.indexOf(person);
let beaconIndex=this.storage.BeaconID.indexOf(beacon);
if(beaconIndex!=-1 && personIndex!=-1){
    window.alert("This person is already registered");
    return false;
}
else {
    delete this.storage[beaconIndex];
    delete this.storage[personIndex];
    return true;
}

    }
catch(error) {
    return true;
}
}

async function checkForPerson(person){
    try {
const persBeacon = this.storage.some(el => el.PersonID === person);
if(persBeacon){
window.alert(`This Person is already associated with ${persBeacon}`);
this.unpair(person,persBeacon);
}
else {
delete this.storage.PersonID[persIndex];
window.alert('Person was in database without association, it has been removed');
storToTemp(person,'tag');
}
}
catch(error){
storToTemp(person,'tag');

    }
}

async function checkForBeacon(beacon){
    try {
    let beacIndex=this.storage.indexOf(beacon);
    let beacPers=this.storage.personID[beacIndex];
    if(beacIndex!=-1){
    if(typeof beacPers!='undefined'){
    window.alert(`This beacon is already associated with ${beacPers}`);
    this.unpair(beacPers,beacon);
    }
    else {
    delete this.storage.beaconID[beaconIndex];
    window.alert('Beacon was in database without association, it has been removed');
    storToTemp(beacon,'beacon');
    }
}
}
catch(error){
    storToTemp(beacon,'beacon');
}    

}


    tagAssoc.prototype.unpair=function(tag,beacon){
        window.alert('unpairing');
        try{
    let verif = checkMatch(tag,beacon);
    let personIndex=this.storage.PersonID.indexOf(person);
let beaconIndex=this.storage.BeaconID.indexOf(beacon);
if(beaconIndex!=personIndex){
    window.alert("Indexes do not match, error");
}
else{
    switch(verif){
        case true:
        delete this.storage[personIndex];
        windows.alert(`${tag} was unpaired from ${beacon}`);
    }
}
        }
        catch(error){
            window.alert(error);
        }
    }
