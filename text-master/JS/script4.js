

document.getElementById("write").innerText ="Yazı";
// bu kod id'si write olan yere değer atar
// innerHTML: elementi atadığın html ile beraber gönderir. Performansı artırır.
// innerText: elementi tek gönderir. Performans artar.
var oku = document.getElementById("read").innerText;
// text'i okur.

document.getElementsByTagName
// html dökümanında ne kadar input varsa bu fonksiyonla alınabilir.

var read = document.querySelector(".first")
// bir class seçeceğimi söylemem gerekiyor çünkü tanıyamıyor. Css gibi .classismi yazılır.


var check = document.getElementById("attr");
check.checked = true;
// normalde tıklı olmadan gelecek checkbox, tıklı halde gelir.



// select başı
var country = document.getElementById("country");
// select sonu
// options başı
var list = document.createElement("options");
// elemen türünü verirsin. dinamik olarak gelen değerleri girer

list.setAttribute("value", 2);
list.innerText = "İstanbul";
// options sonu
// optionsu selecte bağlamak gerekir yoksa çalışmaz.
country.appendChild(list);
// options selecte bağlandı



let events = document.getElementById("event");
// click olayı yakalanmalı
events.addEventListener('click', ()=>{
    let txt = document.getElementById("eventText");
    txt.innerText = "Sample Button";
});
// click olayı (parametre) yakalanır. coolbag function (metod) tanımlanır. butona tıklanınca yazı yazar.



//                                           NODE JS
// backend server tarafında okunabilen kodlardır. derlenebilir. esnek ve hızlıdır. node cs > lts indirilir > npm . npm ile yönetilir. 
// indirildiğini kontrol etmek için terminale node -v yazılır. sınra npm -v yazılır. varsa kullanmaya başlarsın.
// terminalde cd server koduyla server klasörüne girilir. ls. npm init yazılır ve entera basınca tek tek sorular gelir. 
// bu soruları tek tek geçmek zorunda olmamak için npm init -yes yazılır ve default değerlerle çalışmaya başlar.
// node bütün js dosyalarını direkt çalıştırır.  terminale node isim.js yazılırsa çalışır ve terminalde çıktı verir.
// terminale npm install express --save yazılınca express paketi indirilir.
// kontrolü için js içine   const express = require('express');   yazılır ve kütüphane olarak ekler.
// ayrıca   import express from 'express'   olarak da yazılınca üsttekinin işlevini görür
// kütüphaneler node.modules kısmına otomatik eklenir ve depolanır
// express kütüphanesi bana express diye bir element verir.   const app = express();   yazılınca app tanımlanır.

// const express = require('express');
// veya
import express from 'express'

const app = express();

const PORT = 5000;
// sayfanın url'inde localhost kısmından sonra kaçıncı portun dinleneceğini söyler.

app.get('/', (req, res) => {

    console.log("Merhaba");
    // merhaba backend tarafında alınır ama frontend kısmında alınmaz. yani terminalde gözükür ama google incele'de gözükmez. 
    // çünkü yazılan şey backend kısmındadır. bunu frontend yapmak için terminale   ctrl c   yapılır ve koddan çıkması sağlanır. 
    // sonra şu kod yazılır;
    res.send('Hi...');
    // terminale   node isim.js   yazılarak kod tekrar run edilir. fakat yazı sayfaya basılır. 
    // her seferinde tekrar durdurup çalışmamak için terminale    npm install --save-dev nodemon 
    // yazılır ve package.json içinde dependencies altına (yani sadece backend kısmında kullanılacak eklentiler) eklenmiş olur.

});

app.listen(PORT, () => console.log('Server running ${PORT}'));

// bu kodu çalıştırınca connot uyarısı verir. url kısmına localhost:5000/users yazılırsa çalışır

