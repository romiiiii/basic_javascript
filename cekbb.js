function cekbb(nama, bb){
    this.nama = nama;
    this.bb = bb;
    this.statusbb = function(bb){
        if(bb > 55){
            console.log("ideal")
        }
    };
}


var romi = new cekbb("Romi", 56);
console.log(romi.statusbb);