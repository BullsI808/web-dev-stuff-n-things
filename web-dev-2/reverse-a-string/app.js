var string = "happy tuesday";

function reverse(str){
    var id = str.split("");
    var rev = id.reverse();
    var combine = rev.join("");
    console.log(combine);
    
}
console.log(reverse(string));
