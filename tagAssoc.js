class tagAssoc{
    constructor(tag,beacon){
    this.tagID=tag;
    this.beaconID=beacon;
}



pair() {
    var assoc=null;
assoc = {BadgeID:String(this.tagID),BeaconID:String(this.beaconID)};
if(assoc!==null){
    log(assoc);
return [assoc.BadgeID,assoc.BeaconID];}
else{
    return [this.BeaconID,this.tagID];
}
}

saveAssoc(){
    //do something here
}

}
