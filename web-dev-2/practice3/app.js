window.onload = function(){
var button = document.getElementById("button");
var result = document.getElementById("result");
var score = localStorage.getItem('scoreboard');
result.innerHTML = localStorage.getItem('scoreboard');
button.addEventListener('click' , function(){
    result.innerHTML = score;
    score++;
    localStorage.setItem('scoreboard', score);
    result.innerHTML = localStorage.getItem('scoreboard');
})
};