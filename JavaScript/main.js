// console.log("jelo")
let startGam=document.querySelectorAll(".btn");
let sum=document.getElementById("sum");
let choosenCards=document.getElementById("choosen-cards");
let startGame=document.getElementById("start-game");
let newCard=document.getElementById("new-card");
let displayResult=document.getElementById("display-result")
let totalCards=[];
let cardSum=0;
startGame.onclick=function(){
    newCard.disabled=false;
    gameover();
    generateCard();
    generateCard();
    chkBlackJack();
    newCard.style.display="block";
}

newCard.onclick=function(){
    generateCard();
    chkBlackJack();
}
function generateCard(){
    card=Math.floor(Math.random()*13+1);
    cardSum+=card;
    totalCards.push(card);
    choosenCards.innerHTML+=card+" ";
    sum.innerHTML=cardSum;
}

function chkBlackJack(){
    if(cardSum==21){
        displayResult.innerHTML="You Have Won the Game !!!";
        newCard.disabled=true;
    }
    else if(cardSum>21){
        displayResult.innerHTML="You have lost the game !!!";
        newCard.disabled=true;
    }
}
 function gameover(){
     cardSum=0;
     displayResult.innerHTML="";
     sum.innerHTML="";
     choosenCards.innerHTML="";
 }