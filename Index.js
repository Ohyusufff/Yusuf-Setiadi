function hitungip(){

    var absen = parseFloat(document.fform.iabsen.value);
    var tugas = parseFloat(document.fform.itugas.value);
    var uts   = parseFloat(document.fform.iuts.value);
    var uas   = parseFloat(document.fform.iuas.value);

    var ip    =" ";
    var ket   =" ";
    
    var nabsen  = ((absen/16)*10);
    var ntugas  = (0.20*tugas);
    var nuts    = (0.35*uts);
    var nuas    = (0.35*uas);
    var na      = nabsen + ntugas + nuts + nuas;
    var na2     = na.toFixed(2);
    
    if (na2 > 100)
        {ip ="X"; ket="Angka overdosis";}
    else if ((na2 >= 80) && (na2 <=100))
        {ip ="A"; ket="Lulus dengan Sangat Baik";}
    else if ((na2 >= 68) && (na2 <=79))
        {ip ="B"; ket="Lulus dengan Baik";}
    else if ((na2 <= 55) && (na2 <=67))
        {ip ="C"; ket="Lulus dengan Cukup";}
    else if ((na2 <= 38) && (na2 <=54))
        {ip ="D"; ket="Lulus dengan Kurang";}
    else
        {ip ="E"; ket="Tidak Lulus";}
        
        
document.fform.iabsen.value = nabsen;
document.fform.itugas.value = ntugas;
document.fform.iuts.value   = nuts;
document.fform.iuas.value   = nuas;
document.fform.oip.value    = ip +"  " + "(" +na2+ ")";
document.fform.oket.value   = ket;

}
