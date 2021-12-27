// let array =[1,2,3,4,5];
// for (let i=0; i < array.length; i++){
//     // i<15 de yazılabilir, yani nerede durmasını istiyorsan. Her bir döngüden sonra 1 artırır.
// }


// let array =[1,2,3,4,5];
// let i=0;
// for (; i < array.length; i++){
//     // şeklinde yazılırsa da üstteki gibi normal çalışır.
// }


// let isim=["mustafa", "enes", "elif"];
// for (let j=0; j < array.length; j++){
//     console.log(isim[j]);
//     // her adımda bir ismi ekrana basar. 0. indexte mustafa yazar gibi.
// }


// let arr =[1,2,3,4,5,6];
// for (let i =0; i<arr.length;i++){
//     if (arr[i]%2==0) {
//         console.log("çift",arr[i]);
//         // continue; yazılırsa diğer şeyleri atlar ve devam eder.
//     }
//     else{
//         break; // for'dan çıkar
//     }
// }


// var i=0;
// while(i<10){
//     console.log(i);
//     // şeklinde yazılırsa sonsuz döngüye girer. Girmemesi için döngü içine i++; girmek gerekir
// }


// // PROJE
// // PROJE data nosql'de olacak apı ile çekilecek ve sayfaya gömülecek
// // PROJE


// // array tanımlama şekilleri;
// let names = new Array("ahmet","mehmet");

// let name = ["ahmet","mehmet",1,2];
// // hem sayı hem kelime hem obje girilebilir, sınırlama yoktur

// let f = [];
// f[0] = "ahmet";
// f[1] = "mehmet";

// let isim = ["ali","ahmet"];
// isim.push("serkan");
// // tanımlanmış array'in sonuna serkan ekler
// console.log(isim);

// let isim = ["ali","ahmet"];
// isim.unshift("serkan");
// // tanımlanmış array'in başına serkan ekler
// console.log(isim);

// let nn = ["ali","veli","ayşe","ahmet"];
// nn.splice(0,2);
// // tanımlanmış array'in 0. indexten başlar ve 2 tane eleman siler. Yani bu durumda 0 ve 1. (ali,veli) indexleri siler.
// // splice metodu 2 değer yazılınca silmeye yarar. 3 değer yazılırsa eklemeye yarar
// console.log("splice",nn);

// let nn = ["ali","veli","ayşe","ahmet"];
// nn.splice(1,0, "hakan");
// // tanımlanmış array'in 1. indexine bakar, ikinci değer 0 olduğu için 0 tane siler yani silme yapmaz. 1. indexi işaretler, hakanı oraya ekler. Yani veliyi hakana çevirir.
// console.log("splice",nn);

// let nn = ["ali","veli","ayşe","ahmet"];
// nn.splice(1,1, "hakan", "elif");
// // tanımlanmış array'in 1. indexine bakar, ikinci değer 1 olduğu için o indexi siler ve yerine hakan elif ekler. Yani veliyi siler ve oraya hakan elif ekler.
// console.log("splice",nn);

// let arr = [1,2,5];
// arr.splice(-1,0,3);
// // Tersten bakmaya başlar. -1, 5'i tanımlar. -1'den başlayıp 0. indexe bakar ve orayı işaretler ve yerine 3 koyar. Yani 2 yerine 3 koyar.

// let str = "test";
// let arrstr = ["t","e","s","t"];
// console.log(arrstr.slice(1,3));
// // başlangıç ve bitiş indexi verilir (bitiş indexi dahil olmaz). Yani 1. indexten 3. indexe kadar ama 3. index içinde yok.. Yani sadece e s verir. Bize yine dizi halinde verir. Yani bu kısmı kopyalayarak bize yeni bir dizi oluşturur.

// let str = "test";
// let arrstr = ["t","e","s","t"];
// console.log(str.slice(1,3));
// // çıktısı es olur. çünkü bu özellik hem arraylerde hem string ifadelerde kullanılabilir.

// let str = "test";
// let arrstr = ["t","e","s","t"];
// console.log(arrstr.slice(1));
// // herhangi bir bitiş değeri verilmediği için başlangıçtan sona kadar alır.

// let str = "test";
// let arrstr = ["t","e","s","t"];
// console.log(arrstr.slice(-1));
// // herhangi bir bitiş değeri verilmediği için sona kadar alır. Başlangıç değeri zaten son değer olduğu için sadece son değeri verir.

// let nm = new[12,16,18,20];
// nm.pop();
// console.log(nm);
// // dizinin sondaki elemanını (20) siler

// let nm = new[12,16,18,20];
// nm.shift();
// console.log(nm);
// // dizinin baştaki elemanını (12) siler


// let nm = new[12,16,18,20];
// delete nm[2];
// console.log(nm);
// // çıktısı [12,16,empty,20] olur. Dizinin hane sayısını değiştirmez. Bu da çeşitli hatalara sebep olabilir. O index doldurulursa sıkıntı olmaz.


// let nm = [12,16,18,20];
// let is =["paris","ist"];
// let _c = nm.concat(is);
// console.log(_c);
// // İki diziyi birleştirmeye yarar.

// let num = [3,8,4,1,7,9];
// let _ss = num.sort();
// console.log(_ss);
// // dizinin elemanlarını küçükten büyüğe doğru sıralar.

// let alf = ["s","b","i"];
// let _as = alf.sort();
// console.log(_as);
// // dizinin elemanlarını alfabetik sıraya göre dizer

// let num = [3,8,4,1,7,9];
// let _rnum = rnum.reverse();
// console.log(_rnum);
// // sizinin sıralamasını terse çevirir. Çıktısı [9,7,1,4,8,3] olur

// let iss = ["paris","ist","viyana"];
// let _search = iss.indexOf("viyana");
// console.log(_search);
// // viyana'nın olduğu index numarasını verir.
// // eğer arama için array'de olmayan bir değer verilirse -1 verir. Bunu biz şu şekilde kullanırız;
// if(iss.indexOf("viyana")== -1){}

// let num = [1,0,2];
// console.log(nm.includes(1));
// // eğer array içinde aradığımız değer varsa true verir.

// let num = [1,2,false];
// console.log(nm.includes(0));
// // eğer array içinde aradığımız değer olmadığı için false verir.

// let string_sayi = [1,2,3,"bir"];
// let aaa = string_sayi.toString();
// // sayı değil kelime değeri verir.


// let j = [1,2,3,4];
// let nnnn = j.join("-");
// console.log(nnnn);
// // array içindeki ,'leri başka bir şeye çevirir.


// let arr_isim = ["ali", "veli", "ayşe"];
// arr_isim.forEach(item => item);
// // forEach for'la aynı işlevdedir ama for daha hızlıdır, forEach iterasyon çalıştırır, bu yüzden daha yavaştır.
// // forEach yalcızca callback fonksiyonlarda kullanılabilir. callback fonksiyon (callbackfn) bir metoda parametre olarak gönderilen metoda denir.
// // item => item bizim callback metodumuzu ifade eder.

// let arr_isim = ["ali", "veli", "ayşe"];
// function blala () {
//     return 1;
// }
// arr_isim.forEach(item => console.log (item));
// // çıktısı for gibi satırlara ali veli ayşe basar.


// // find

// let userss = [
//     {id:1, name:"ali"},
//     {id:1, name:"aliiiii"},
//     {id:2, name:"Ahmet"},
//     {id:3, name:"mehmet"},
// ]
// let res_find = userss.find(e => e.id == 1);
// console.log(res_find);
// // array içindeki objelerden şartı sağlayan ilk kaydı getirir. burada id'si 1 olan ilk şeyi yani ali kelimesini getirir.


// let sayii = [5,8,3,1]
// let ssss = sayii.some(x =>x >3);
// // some bir metod ister. her bir iteme bakar ve şartı sağlayanı getirir. True ve false döndürdüğü için iflerde kullanılabilir.
// let inn = sayii.includes(5);
// // includes ise sadece tek bir değer döndürür.
// let ev = sayii.every(x=>x>3);
// // bütün itemlere tek tek bakar hepsi şartı sağlıyor mu diye kontrol eder.
// let kkk = userss.filter(e => e.id == 1);
// console.log(kkk);
// // array içindeki objelerden şartı sağlayan kayıtları getirir. burada id'si 1 olan tüm objeleri getirir.


// // ÖRNEK
// 'ab';
// 'a';
// 'abcdefg';
// // 2 ve daha fazla harften olanları baştan ve sondan 2 karakter getirecek. Tek harfleri direkt getirecek.
// const newStr = (str) => str.Length < 2 ? str : str.slice(0,2) + str.slice(-2);
// // str parametredir. kelime uzunluluğu true ise 0 ve 2 olanları alıyor. false ise ?????????????????????????????????????



// // ÖRNEK
// // herhangi kelimenin yarısını getiren kod yaz. kelime girilmediyse kelime girmesini isteyecek yani '' verecek.
// let str = prompt("Girdi giriniz:");
// const newStr = (str) => str.Length <= 0 ? "hata" : str.slice(0,str.Length/2);
// console.log();


// // ÖRNEK
// 'abc' , 'bcd'
// // 1.den 1.yi atla gerisini yaz, 2.den 2.yi atla gerisini yaz. ikisini birleştir.
// const concat = (str1,str2) => str1.slice(1) + str2.slice(2);


// // ÖRNEK
// // 100'den küçük ve + 2 sayıdan hangisi 100'e yakınsa onu verecek
// const near = (num1, num2) => (100-num1) < (100-num2) ? num1 : num2;


// // ÖRNEK
// chars('alooo', 'o');
// // bu fonksiyon 1. kelimede 2. harfin kaç tane old bul. bu değer 2 ve 4 arasındaysa true dönecek.
// const kontrol = (str, char) => str.split('').filter(x=>x === char).length;
// const dogruluk =  (str, char) => kontrol(str,char)>2 && kontrol(str, char)<=4;


// // ÖRNEK
// [1,2,3,4,5,6,7,8]
// // dizide kaç tane çift sayı old versin
// const count = (arr) => arr.filter(x => x %2 === 0).length; 


