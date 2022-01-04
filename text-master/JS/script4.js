

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


