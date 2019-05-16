//const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10


// var numbers = [10, 20, 30];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++){
//   sum += numbers[i];
// }

// console.log('sum', sum);

// var sum = numbers.reduce((accum, curr) =>{ 
//     return accum + curr;
//     }, 10);

// console.log('sum', sum);


var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((accum, curr) =>{
    return accum + curr.distance;
}, 0);

console.log('totalDistance', totalDistance);
//should return totalDistance 47


