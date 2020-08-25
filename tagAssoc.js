let globTag=this.tagID;
let globBeacon=this.beaconID;
class tagAssoc{
    constructor(tag,beacon){
    this.tagID=tag;
    this.beaconID=beacon;
}



pair() {
    var assoc=null;
assoc = {BadgeID:String(globTag),BeaconID:String(globBeacon)};
if(assoc!==null){
    log(assoc);
return [assoc.BadgeID,assoc.BeaconID];}
else{
    return `Associated ${this.BeaconID} with ${this.tagID}`;

}

saveAssoc(){
    //do something here
}

}
