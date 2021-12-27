//TEMEL VERİ TİPLERİ (değerin kendisi tutulur)
//console.log("External");


// let selam = "Hello";  //String ifadeyi selam içine atar (let olarak)
// console.log(selam);
// selam = "Merhaba"; // başına let koyulursa uyarı verir, yani selama zaten değer atandığını söyler
// console.log(selam);


// var deger = "Hellooo"; //bu tanımlama projenin tamamına etki eder
// console.log(deger);
// var deger = "Merhabaaa";
// console.log(deger);  // deger içine tekrar veri atar, yani hem hello hem merhaba yazar


// function fonn(){
//     var deger = "text";  //burada olan değer dışarı çıkartılamaz bu haldeyken. üst satırda fonn parantezine deger yazılırsa alınabilir
// }
// fonn(); 
// console.log(deger);


// const text = "Javascript";
// text = "Hello";  //const olarak tanımlanan şeyler değiştirilemez. değiştirilmeye çalışırsa uyarı verir


// var ders ="Ders"; //string ifade tanımlar
// var ders ='Ders'; //string ifade tanımlar
// var sayi = 1;  //sayı tanımlar
// var ondalik=1.15;  //ondalık sayı tanımlar
// var bool = true; 
// var bool = false; 


//undefined değerler
// var a;
// console.log("deger", typeof(a));

// var b = null;  //bir yerde bir değer var ama içi boş
// console.log("type", typeof(b));


// let id = Symbol();  //unic değer


//REFERANS ATAMASI (referansı tutulur)
// var lesson = {   //süslü parantez açılır açılmaz bu artık bir objedir 
//     name: 'Web',
//     number: 1
// }
// console.log("Object", lesson.name); //lesson yazılsa name ve number değerlerini gösterir. bu haliyle yalnızca Web Object gözükür


// //ARRAY
// var dizi = [1,2,3];  //arrayler de bir objedir
// console.log("dizi", typeof(dizi));
// console.log("item", dizi[1]);  //dizinin 1. ifadesini gösterir (diziler 0'dan başlar)
// dizi[3] = 4;  //dizinin 3. değerine 4 değeri atar
// console.log(dizi);  //diziyi ekrana basar
// console.log(dizi.length);  //dizinin uzunluğunu alır


// //FUNCTION  
// function hello(text){
//     console.log("Function", text);
// }
// var text = "Text";
// hello(text);  //metodu çağırır


//CAST ETME (veri tipleri birbirine dönüştürme)
var num = "20c";  //NaN: not a number verir. yani numaraya çeviremez. ("20c" yerine null verilirse 0, true verilirse 1 döndürür)
var ynum = Number(num);
console.log(ynum);


var num = true;
var ss = String(str);
console.log(ss);  //1 değeri döndürür ama bu sayı olan 1 değildir!!!


