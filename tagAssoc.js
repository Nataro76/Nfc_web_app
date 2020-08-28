let globTag=this.tag;
let globBeacon=String(this.beacon);
class tagAssoc{
    constructor(tag,beacon){
    this.tag=tag;
    this.beacon=beacon;
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
