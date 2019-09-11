
class Mobil {
    constructor(tipe, warna){
        this.tipe = tipe
        this.warna = warna
    }

    jalankan(){
        "jalankan mobil warna" + this.tipe+"yang warnanya"+this.warna
    
    }

    berhenti (kondisi){
        if(kondisi == "berhenti")
        return "mobil"+this.tipe+"yang warnanya"+this.warna+"sudah berhenti"
    }else{
        return "mobil"+this.tipe+"yang warnanya"+"this.warna"+ "masih jalan"
    }

classMobil = new Mobil('jip','Merah')
console.log(classMobil.jalankan())
const 
module.exports ={
    fungsiTambah : (satu,dua)=>{
        return satu+dua
    },
    funsiKali : (satu,dua)=>{
        return 1+2

    }
}
