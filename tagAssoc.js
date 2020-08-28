class tagAssoc{
    constructor(tag,beacon){
        super(tag, beacon);
    this.tag=tag;
    this.beacon=beacon;
}



pair() {
    //Store the data as an object
 
    log(`Associated ${this.tag} with ${this.beacon}`);
    var storage;
    storage={PersonID:`${this.tag}`,BeaconID:`${this.beacon}`}

}

saveAssoc(){
    //do something here
}

}
