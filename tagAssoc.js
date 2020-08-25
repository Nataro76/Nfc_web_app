class tagAssoc{
    constructor(tag,beacon){
    this.tagID=tag;
    this.beaconID=beacon;
}



pair(badge,tag) {
    var assoc=null;
assoc = {BadgeID:String(badge),BeaconID:String(tag)};
log(assoc);
if(assoc!==null){
return assoc;}
else{
    return [this.BeaconID,this.tagID];
}
}

saveAssoc(){
    //do something here
}

}
