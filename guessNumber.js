const n= Math.trunc(Math.random()*20)+1;
console.log(n);
// let 
// document.querySelector('.score').textContent='Score: ' + Number(20);
let score=20;

document.querySelector(".button").addEventListener("click", function () {
const number= (Number((document.querySelector(".guess").value)))
let guessed = document.querySelector('.number').textContent=number


if (number==n){
    document.querySelector('body').style.backgroundColor='rgb(27, 217, 81)';
    document.querySelector('body').style.transition='all 1.5s';
    document.querySelector('.correct').textContent='Correct Number 🥳';
    document.querySelector('.score').textContent="Score: "+ score;
}
else if(number>n){
    document.querySelector('body').style.backgroundColor='#FF0000';
    document.querySelector('body').style.transition='all 0.5s';
    // document.querySelector('body').style.backgroundColor='rgba(0, 0, 0, 0.744)';
    document.querySelector('.correct').textContent="Too High 📈";
    document.querySelector('.score').textContent="Score: " + score--;

}
else if(number<n){
    document.querySelector('.correct').textContent="Too Low 📉";
    document.querySelector('.score').textContent="Score: " + score--;
}
if(score==0)
{
    document.querySelector('.score').textContent="GAME OVER";

}
});
document.querySelector('.refresh').addEventListener('click', function(){
    document.location.reload();
   
})


// if (guessed==n){
//     document.querySelector('.correct').textContent='Correct Number';
// }
// else{
//     document.querySelector('.correct').textContent="CHALA JA B.....e"
// }


