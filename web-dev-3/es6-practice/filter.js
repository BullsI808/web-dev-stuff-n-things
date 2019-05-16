// var nums = [1,2,3,4,5,6,7];

// var filteredNums = nums.filter(function(num){
//     return num >= 4
// });
// console.log(filteredNums);


var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number >= 50
});

console.log(filteredNumbers);




var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
   var filteredUsers = users.filter(function(user){
      return user.admin === true;
   });
   console.log(filteredUsers);
