this.tag;
this.beacon;
this.storage;
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
return ADDR;
}

async function storToTemp(data,type){
if(tempStorage!=null){
    if(tempStorage.type=='beacon'){
        if(confirm(`Do you want to associate ${tempStorage.data} with ${data} ?`)){
        pairToBeacon(data,tempStorage.data);
        tempStorage=null;
        }
    }
    else if(tempStorage.type=='tag'){
        if(confirm(`Do you want to associate ${tempStorage.data} with ${data} ?`)){
        pairToBeacon(tempStorage.data,data);
        tempStorage=null;
        }
    }
}
else{
    tempStorage.data=data;
    tempStorage.type=type;
    if(confirm('Would you like to pair a second device now?')){
        window.alert('Place your tag, then click ok');
    } 
}
}

tagAssoc.prototype.serialCheck=function(serial){
let tagValue=String(serial);
let keyVal= this.tagID.indexOf(tagValue);
let match=false;
let type;
let check=false;
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
            check=checkForPerson(this.tag);
            }
            switch(check){
                case (typeof check=='string'):
                    if(this.tag && check){
                    this.unpair(this.tag,check);
                    }
                    break;
                    case false:
                        storToTemp(this.tag,'tag');
                        break;

            } 
            break;
            case 'Beacon':
            if(confirm(`You scanned the ${this.beacon} beacon`)){
                check=checkForBeacon(this.beacon);
                }
                switch(check){
                    case (typeof check=='string'):
                        if(this.beacon && check){
                        this.unpair(check,this.beacon);
                        }
                        break;
                        case false:
                            storToTemp(this.beacon,'beacon');
                            break;
                }
                break;   
        }
        }

        
}


tagAssoc.prototype.pairToBeacon=function(tag,beacon) {
    this.beacon=beacon;
    this.tag=tag;
    if(checkMatch(this.tag,this.beacon)==true){      
    this.storage.push(storeObject(this.tag,this.beacon));
    window.alert(`${this.tag} and ${this.beacon} have been correctly associated!`);
    }

}

tagAssoc.prototype.storeObject=function(tag,beacon) {
return {PersonID:tag,BeaconID:beacon};
}

function checkMatch(person,beacon){
    try{
let personIndex=this.storage.PersonID.indexOf(person);
let beaconIndex=this.storage.BeaconID.indexOf(beacon);
if(personIndex!=-1 && beaconIndex==-1){
delete this.storage[personIndex];
return true;
}
else if(beaconIndex!=-1 && personIndex==-1){
delete this.storage[beaconIndex];
return true;
}
else if(beaconIndex!=-1 && personIndex!=-1){
    window.alert("This person is already registered");
    return false;
}
    }
catch(error) {
    return true;
}
}

async function checkForPerson(person){
try{
let persIndex=this.storage.PersonID.indexOf(person);
let persBeacon=this.storage.beaconID[persIndex];
if(persIndex!=-1){
if(typeof persBeacon!='undefined'){
window.alert(`This Person is already associated with ${persBeacon}`)
return String(persBeacon);
}
}
else {
delete this.storage.PersonID[persIndex];
window.alert('Person was in database without association, it has been removed');
return false;
}
}
catch(error){
    window.alert('Association database empty, no device has been associated yet');
    return false;
    }
}

async function checkForBeacon(beacon){
    try {
    let beacIndex=this.storage.beaconID.indexOf(beacon);
    let beacPers=this.storage.personID[beacIndex];
    if(beacIndex!=-1){
    if(typeof beacPers!='undefined'){
    window.alert(`This beacon is already associated with ${beacPers}`)
    return String(beacPers);
    }
    }
    else {
    delete this.storage.beaconID[beaconIndex];
    window.alert('Beacon was in database without association, it has been removed');
    return false;
    }
}
catch(error){
window.alert('Association database empty, no device has been associated yet');
return false;
}    

}


    tagAssoc.prototype.unpair=function(tag,beacon){
        try{
    let verif = checkMatch(tag,beacon);
    let personIndex=this.storage.PersonID.indexOf(person);
let beaconIndex=this.storage.BeaconID.indexOf(beacon);
if(beaconIndex!=personIndex){
    window.alert('What the fuck?');
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
            window.alert('Surpise motherfucker');
        }
    }
