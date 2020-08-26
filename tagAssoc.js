let globTag=this.tagID;
let globBeacon=this.beaconID;
class tagAssoc{
    constructor(tag,beacon){
    this.tagID=tag;
    this.beaconID=beacon;
}



pair() {
    return `Associated ${String(this.BeaconID)} with ${this.tagID}`;

}

saveAssoc(){
    //do something here
}

}
