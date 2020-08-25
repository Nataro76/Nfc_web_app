class tagAssoc{
    constructor(tag,beacon){
    this.tagID=tag;
    this.beaconID=beacon;
}



pair(badge,tag) {
    var assoc=null;
assoc = {BadgeID:String(badge),BeaconID:String(tag)};
log(assoc);
return assoc;
}

saveAssoc(){
    //do something here
}

}
