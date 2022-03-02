function hesapla(){
    let sınav1=document.getElementById("sinav1").value
    let sınav2=document.getElementById("sinav2").value
    let performans=document.getElementById("performans").value
    let ortalama=(sınav1*1+sınav2*1+performans*1 )/3 
    console.log(ortalama);

if(ortalama>=50){
    document.getElementById("sonucla").innerHTML="Geçtiniz : "+ortalama
}

else if(ortalama<50){
    document.getElementById("sonucla").innerHTML="Kaldınız  : "+ortalama
}
   
}