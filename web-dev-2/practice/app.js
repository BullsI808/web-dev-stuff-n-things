var myStr = "the cow jumped over the moon";
function longestWord(str){
    var splited = str.split(" ");
    console.log(splited[2].length + "," + splited[2]);
    return (splited[2].length + "," + splited[2]);
};
longestWord(myStr);