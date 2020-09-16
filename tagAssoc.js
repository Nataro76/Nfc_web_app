this.tag;
this.beacon;
this.storage;
this.nodeID;
function tagAssoc(){
this.tagID= ['27:73:65:a9','04:30:4f:b2:00:53:80','56:72:4d:a5'];
this.personID=['Nathan','Visiteur 096','Giraffe'];
this.beaconKey = ['04:82:3a:2a:ce:66:80','04:a9:34:2a:ce:66:80','5f:46:8b:73:dc:5e:eb'];
this.beaconID = ['3EE66B','3EE694','New high-tech beacon']; 
} 

tagAssoc.prototype.readMessage= function(msg){

}

tagAssoc.prototype.serialCheck=function(serial){
    window.alert('pb3');
let tagValue=String(serial);
let keyVal= this.tagID.indexOf(tagValue);
let match=false;
if(keyVal!=-1){
    window.alert('pb4');
this.tag = this.personID[keyVal];
match=true;
}
else{
    window.alert('pb5');
    keyVal= this.beaconKey.indexOf(tagValue);
    if(keyVal!=-1){
        window.alert('pb6');
        this.tag = this.beaconID[keyVal];  
        match=true;  
    }
    else{
        window.alert('pb7');
    match=false;
    }
}
switch(match){
    case true:
        if(confirm(`Was the tag ${this.tag} scanned? `)){
            return this.tag;
            }
            else { 
            break;
            }
            case false:
                window.alert('Unknown tag');
        }

        
}


tagAssoc.prototype.pairToBeacon=function(tagData) {
    window.alert('pb8');
    this.beacon=tagData;
    if(checkMatch(this.tag,this.beacon)==true){ 
        window.alert('pb9');
    this.storage.push(storeObject(this.tag,this.beacon));
    window.alert(`${this.tag} and ${this.beacon} have been correctly associated!`);
    }

}

tagAssoc.prototype.storeObject=function(tag,beacon) {
    window.alert('pb10');
return {PersonID:tag,BeaconID:beacon};
}

function checkMatch(person,beacon){
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
else {
    return true;
}
}
    tagAssoc.prototype.unpair=function(){
    //This was used to delete the rows of the text file
    }
