let globTag=this.tagID;
let globBeacon=String(this.beaconID);
class tagAssoc{
    constructor(tag,beacon){
    this.tagID=tag;
    this.beaconID=beacon;
}



pair() {
    //Store the data as an object
    log(globBeacon);
    log(`Associated ${globBeacon} with ${globTag}`);

}

saveAssoc(){
    //do something here
}

}
