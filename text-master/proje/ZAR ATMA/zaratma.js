const liste =[
            "png/001-dice.png",
            "png/002-dice.png",
            "png/003-dice.png",
            "png/004-dice.png",
            "png/005-dice.png",
            "png/006-dice.png"
            ]
 
        document.querySelector("#zarAt").onclick=function(){
            let uzunluk = liste.length;
            let zar1 = liste[Math.floor(Math.random()*uzunluk)];
            let zar2 = liste[Math.floor(Math.random()*uzunluk)];
            
            document.querySelectorAll(".zar")[0].src=zar1;
            document.querySelectorAll(".zar")[1].src=zar2;
        }
 