// using XMLHttpRequest
const request = new XMLHttpRequest();
request.addEventListener('load', () =>{
    //console.log(this.responseText);
    //either method works but the first method only works with function and not fat arrow
    console.log(request.responseText);
});
request.open('get', 'http://api.icndb.com/jokes/random');
request.send();

//axios

axios
    .get('http://api.icndb.com/jokes/random') 
    .then(
        function(response){
            console.log('axios response', response);
        })
        .catch(function(err){
            console.log('err', err);
        });