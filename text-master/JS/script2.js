// // if-else
// let ders = "Web";
// if (ders == "Web"){
//     // ne olursa olsun true/false değer döndürür
// }
// else{
//     // if sağlanmıyorsa buraya girer
// }


// // switch-case
// var gun = 2;
// switch(gun){
//     case 1:
//         console.log("1.numaralı")
//         break;
//     case 2: // bu durumda hem 2'ye hem 3'e bakar
//     case 3:
//         console.log("1.numaralı")
//         break;
//     default:
//         break;
// }


// console.log(""+2+1);
// //+ işaretinin diğer anlamı string ifadeleri birleştirmektir bu sebeple  çıktısı 21 olur. MANTIĞI ÖNEMLİ!


// console.log(""-2+1);
// //- işaretinin string anlamı olmadığı için integer olarak devam eder ve işlem yapar. Çıktısı -1 olur. MANTIĞI ÖNEMLİ!


// console.log(""+2-1);
// //- görünce integer olarak devam eder ve işlem yapar. Çıktısı 1 olur. MANTIĞI ÖNEMLİ!
// // eğer "" içinde metin olsaydı hata verir NaN yazardı fakat "" içinde sayı olsaydı onu da işleme katardı. MANTIĞI ÖNEMLİ!


// console.log(""+(2+1));
// // bu şekilde yazılınca işlemi yapar, çıktısı 3 olur ama (2+1)'in başındaki +'yı koymazsak hata verir. MANTIĞI ÖNEMLİ!


// console.log(true + false);
// // true=1 false=0 alır ve toplar, çıktısı 1 olur.


// console.log(8/"4");
// //"" içinde sayı olduğu için onu da işleme katar. Çıktısı 2 olur. MANTIĞI ÖNEMLİ!


// console.log("4px"-2);
// //"" içindeki sayı olmadığı için NaN hatası verir. MANTIĞI ÖNEMLİ!


// console.log(" -9      "+2);
// //string olarak devam eder. Çıktısı -9      2 olur. MANTIĞI ÖNEMLİ!


// console.log(" -9      "-2);
// //- işaretinin string anlamı olmadığı için integer olarak devam eder ve işlem yapar. Boşluklar önemli olmaz. Çıktısı -11 olur. MANTIĞI ÖNEMLİ!


// console.log(null +2);
// // null integer değerdir, işlem yapar. 0+2 gibi düşünür. Çıktısı 2 olur. 
// null: aynı zamanda js bug'ıdır. Bakılınca objedir, yer kaplar. Diğer dillerde yer kaplamaz. js'de bu objelik değiştirilemez.


// console.log(undefined +2);
// // NaN verir.


let dgmyl = prompt("Doğum yılını giriniz:"); // kullanıcıdan doğum yılını alır.
// let smdkyl = prompt("Hangi yılda olduğumuzu giriniz:"); // kullanıcıdan şimdiki yılı alır.
let year = new Date().getFullYear(); // direkt şimdiki yılı alır.

// var sayi = smdkyl-dgmyl;
var sayi = year-dgmyl;
console.log(year);
if (sayi<6){
    console.log("Okula gitmiyor.");
}
else if (sayi>6 && sayi<10){
    console.log("İlkokula gidiyor.");
}
else if (sayi>10 && sayi<14){
    console.log("Ortaokula gidiyor.");
}
else if (sayi>14 && sayi<18){
    console.log("Liseye gidiyor.");
}
else if (sayi>18 && sayi<22){
    console.log("Üniversiteye gidiyor.");
}
else{
    console.log("Hayırlı olsun okulun bitti.");
}
// doğum yılı girilecek. ona göre yaşını belirleyecek(mevcut yıldan çıkartarak). sonra hangi okulda olduğunu versin.