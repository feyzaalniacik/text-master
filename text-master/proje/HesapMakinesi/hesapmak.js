
                // hesap makinesi js kodları başlangıcı

// HTML sayfasında gerekli elementlere ulaşılarak seçildi.
let secim = document.querySelector("#box").children;
let sonuc = document.querySelector("#sonuc");
let clean = document.querySelector("#clean");
let hesap = document.querySelector("#hesapla");

// "temizle" ve "hesapla" butonu için ayrı dinleyiciler tanımlandı.
clean.addEventListener("click", temizle);
hesap.addEventListener("click", hesapla);

// Diğer tüm tuşlar için dinleyiciler tanımlandı.
for (var i = 0; i < 16; i++) {
    if (i != 12 && i != 14) { // "temizle" ve "hesapla" butonları hariç tutuldu.
        secim[i].addEventListener("click", yazdir);
    }
}

// "eval" ile hesaplama yapıldı.
function hesapla() {
    sonuc.innerText = eval(sonuc.innerText);
    if (eval(sonuc.innerText.length) > 8) { // Çıkan sonuç 8 basamaktan büyükse 8 basamak olarak girdirildi.
        sonuc.innerText = eval(sonuc.innerText).toPrecision(8);
    }
}

// "temizle" butonunun işlevi girildi.
function temizle() {
    sonuc.innerText = " ";
}

// Tıklanan tuşlar sonuç ekranını atandı.
function yazdir() {
    if (sonuc.innerText.length < 8) // 8 basamaktan fazla olması engellendi. 
        sonuc.innerText = sonuc.innerText + this.innerText;
}

                // hesap makinesi js kodları sonu




                // sayac js kodları başlangıcı

let counter = document.getElementById('counter');
let incr = document.querySelector('.incr');
let decr = document.querySelector('.decr');

let count = 0;
incr.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});
decr.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});
function updateDisplay(){
    counter.innerHTML = count;
};

                // sayac js kodları sonu




                // asal sayı js kodları başlangıcı
var text="";
var sayi=0;
 
function asalHesapla()
{
var sayac=0;
sayi=document.getElementById('sayi1').value;
for(i=2; i<sayi; i++)
 {
	if(sayi%i==0)
	{
	sayac++;
	}
 }
	if(sayac==0)
	{
	text="Asal";
	}
	else
	{
	text="Asal değil.<br/> 1 ve Kendisi hariç <strong>"+sayac+"</strong> adet böleni var";
	}
 document.getElementById('demo').innerHTML = text;
 }

                // asal sayı js kodları sonu




                // dikdörtgen alan/çevre js kodları başlangı
function Hesapla(){
    var kk=document.getElementById("kisa").value;
    var uk=document.getElementById("uzun").value;
    kk=Number(kk);
    uk=Number(uk);
    var dAlan=kk*uk;
    var dCevre=2*(kk+uk);
    document.getElementById("cevre").innerHTML="Çevre : "+dCevre;
    document.getElementById("alan").innerHTML="Alan : "+dAlan;
}
                
var hspBtn=document.getElementById("btn");
 btn.onclick=Hesapla;

                // dikdörtgen alan/çevre js kodları başlangıcı



// saat js başı
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;
    },1000
);
// saat js sonu
