
function tagAssoc(){
    this.tag;
    this.beacon;
    this.storage;
this.tagID= ['27:73:65:a9','04:30:4f:b2:00:53:80','56:72:4d:a5'];
this.personID=['Nathan','Visiteur 096','Giraffe'];
this.beaconKey = ['04:82:3a:2a:ce:66:80','04:a9:34:2a:ce:66:80','5f:46:8b:73:dc:5e:eb'];
this.beaconID = ['3EE66B','3EE694','New high-tech beacon'];
this.nodeID   
} 

tagAssoc.prototype.readMessage= function(msg){

}

tagAssoc.prototype.serialCheck=function(serial){
let tagValue=String(serial);
let keyVal= this.tagID.indexOf(tagValue);
let match=false;
if(keyVal!=-1){
this.tag = this.personID[keyVal];
match=true;
}
else{
    keyVal= this.beaconKey.indexOf(tagValue);
    if(keyVal!=-1){
        this.tag = this.beaconID[keyVal];  
        match=true;  
    }
    else{
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
        }

        
}


tagAssoc.prototype.pairToBeacon=function(tagData) {
    //Store the data as an object and send the post method
    log(`Associated ${this.tag} with ${this.beacon}`);
    //storage={PersonID:`${this.tag}`,BeaconID:`${this.beacon}`}
    if(checkMatch(this.tag,this.beacon)==true){
    storage.push(storeObject(this.tag,this.beacon));
    }

}

tagAssoc.prototype.storeObject=function(tag,beacon) {
return {PersonID:tag,BeaconID:beacon};
}

function checkMatch(person,beacon){
let personIndex=storage.PersonID.indexOf(person);
let beaconIndex=storage.BeaconID.indexOf(beacon);
if(personIndex!=-1 && beaconIndex==-1){
delete storage[personIndex];
return true;
}
else if(beaconIndex!=-1 && personIndex==-1){
delete storage[beaconIndex];
return true;
}
else if(beaconIndex!=-1 && personIndex!=-1){
    window.alert("This person is already registered");
    return false;
}

}
    tagAssoc.prototype.unpair=function(){
    //This was used to delete the rows of the text file
    }
