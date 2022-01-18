randomNumber1 = Math.floor((Math.random()*6) +1 );
randomNumber2 = Math.floor((Math.random()*6) +1 );


function addImage(randomNumber1) {
                document.querySelector(".img1").setAttribute("src",`:images:dice${randomNumber1}.png` );

 }

 function addImage2(randomNumber2) {
                document.querySelector(".img2").setAttribute("src",`:images:dice{randomNumber2}.png` );

 }


function whoWon(randomNumber1, randomNumber2) {
                if (randomNumber1 > randomNumber2) {
                 document.querySelector("h1").innerHTML = "🚩Player1 Wins ";
         }
         else if(randomNumber1 < randomNumber2) {
                 document.querySelector("h1").innerHTML = "Player2 Wins🚩 ";}

         else {
                document.querySelector("h1").innerHTML = "Draw!";
         }
}


addImage(randomNumber1);
addImage2(randomNumber2);

whoWon(randomNumber1, randomNumber2);
