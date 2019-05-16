var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var check = document.getElementById('check');
var win = document.getElementById('win');
var correct = "badc";
//  var btnId = 1;
//   var btn11 = 2;
//   var btn12 = 1;
//   var btn13 = 4;
//   var btn14 = 3;

var order = '';

 btn1.addEventListener('click', function(){
    //  if (btn11 = btnId) {
    //      var btnId = 3;
    //      console.log('id is now 3');
    //  } else{
    //      window.location.reload(false);
    //  }
    order += 'a';
    console.log(order);
 })

 btn2.addEventListener('click' , function(){
    // if (btn12 = btnId) {
    //     var btnId = 2;
    //     console.log('id is now 2');
    // } else {
    //     window.location.reload(false);
    // }
    order += 'b';
    console.log(order);
 })

 btn3.addEventListener('click', function(){
    //  if (btn13 = btnId) {
    //      function btn3() {
    //          alert('congratulations! you completed the puzzle!');
    //      }
    //  } else {
    //     window.location.reload(false);
    //  }
    order += 'c';
    console.log(order);
 })

 btn4.addEventListener('click' , function(){
    // if(btn14 = btnId){
    //     var btnId = 4;
    // } else {
    //     window.location.reload(false);
    // }
    order += 'd';
    console.log(order);
    // if (order = correct) {
    //     win.innerHTML = "Congratz Bro!";
    //  }
 })
   
 check.addEventListener('click' , function(){
    if (order === correct) {
        win.innerHTML = "Congratz Bro!";
     } else {
        window.location.reload(false);
     }
 })