var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);
var imgs = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var rnd1 = imgs[randomNumber1-1];
var rnd2 = imgs[randomNumber2-1];
document.querySelector(".img1").setAttribute("src", rnd1);
document.querySelector(".img2").setAttribute("src", rnd2);
if(rnd1>rnd2){
  document.querySelector("h1").textContent = "Player 1 Wins!!";
}
else if (rnd2>rnd1){
  document.querySelector("h1").textContent = "Player 2 Wins!!";
}
else{
  document.querySelector("h1").textContent = "It's a Draw";
}
function playAgain(){
  window.location.reload();
}

