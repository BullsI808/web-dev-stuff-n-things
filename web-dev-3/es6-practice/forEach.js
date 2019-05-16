var nums = [1,2,3,4];

var sum = 0;
// nums.forEach(function(number){
// console.log(number);
// })

nums.forEach(function(numbers){
     sum += numbers;
})
console.log(sum);

//real short hand
//nums.forEach()

//forEach acts like a for loop and does not return
// map returns data in an array
var num = [2];
var dubnums = num.forEach((number)=>{return num * 2;});

console.log(num);

function handlePosts() {
	var posts = [{
			id: 23,
			title: 'Daily JS News'
		},
		{
			id: 52,
			title: 'Code Refactor City'
		},
		{
			id: 105,
			title: 'The Brightest Ruby'
		}
	];

    // refactor code below
    posts.forEach(function(posts){
        console.log(posts);
    })
}
handlePosts();