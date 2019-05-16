console.log ("hellow world");

var button1 = document.getElementById("btn1");

var button2= document.getElementById("btn2");
document.getElementById("btn1").addEventListener('click', function(){
    document.getElementById("output").innerHTML = "you clicked me";
});

document.getElementById("btn2").addEventListener('click', function(){
document.getElementById("output").style.color = "blue";
});