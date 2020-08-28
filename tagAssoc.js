class tagAssoc{
    constructor(tag,beacon){
    this.tag=tag;
    this.beacon=beacon;
}



pair() {
    //Store the data as an object and send the post method
 
    log(`Associated ${this.tag} with ${this.beacon}`);
    var storage;
    storage={PersonID:`${this.tag}`,BeaconID:`${this.beacon}`}

}

saveAssoc(){
    //This was used when storing the data internally (not really necessary)
}

    unpair(){
    //This was used to delete the rows of the text file
    }
    
}
