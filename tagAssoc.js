let globTag=this.tagID;
let globBeacon=String(this.beaconID);
class tagAssoc{
    constructor(tag,beacon){
    this.tagID=tag;
    this.beaconID=beacon;
}



pair() {
    return `Associated ${globBeacon} with ${globTag}`;

}

saveAssoc(){
    //do something here
}

}
