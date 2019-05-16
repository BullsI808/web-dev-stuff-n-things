//for loop

var nums = [1,2,3];
var doubledNums = [];

for (var i = 0; i < nums.length; i++){
var double = nums[i];
var doubled = double*2;
doubledNums.push(doubled);
}

console.log(doubledNums);
//should return [2,4,6]


//map


var numbers = [1,2,3];

var doubledNumbers = numbers.map(function(number){
    return number * 2;
});

console.log(doubledNumbers);
//should return [2,4,6]


//map practice

// Create an array named `animalArray` with 3 of your favorite animals

// create a variable and assign the `map` method to it
// Your `map` method should loop through each element in your `animalArray` that creates a string with each element
// Example: ["My favorite animal is **Animal 1**", "My favorite animal is **Animal 2**", "My favorite animal is **Animal 3**"

var animals = ['dog' , 'snake' , 'lion'];


var favAnimals = animals.map(function(animal){
    return 'My favorite animal is a' + ' ' + animal;
});

console.log(favAnimals);



// maps practice 2

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map(function(height){
      console.log('height', height[height]);
  });