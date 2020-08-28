let globTag=this.tag;
let globBeacon=this.beacon;
class tagAssoc{
    constructor(tag,beacon){
    this.tag=tag;
    this.beacon=beacon;
}



pair() {
    //Store the data as an object
    log(globBeacon);
    log(`Associated ${globBeacon} with ${globTag}`);
    var storage;
    storage={PersonID:`${this.tag}`,BeaconID:`${this.beacon}`}

}

saveAssoc(){
    //do something here
}

}
