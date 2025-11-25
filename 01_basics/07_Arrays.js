//arrays

// const arr = [0,3,4,2,4,5,2]
// console.log(arr);
// const myyArr2 = new Array(1,3,4,5,3)
// console.log(myyArr2[1]);

//Array methods
// push - add value in the arry
//pop - remove lst value of the arry
//unshift(0)- shift the value from the first or add the value on first index and remove the last value 
//shift - remove the first value there is no parameter
//includes - for questions 
//join arry convert into string

//slice - return a copu of section of an array

//splice 

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["sumperman", "flash", "batman"]

// marvel_heros.push(dc_heros)

const allheros = marvel_heros.concat(dc_heros) // merged to array 
// console.log(allheros);

//spread operator like drop (..., ...)
 const all_new_heros = [...marvel_heros, ...dc_heros]
//  console.log(all_new_heros);

//flat is used for create a new aray with all sub-array elements
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


//isArray asking a question that this is array or not
//from is convert the element in array
//console.log(Array.from("Pradeep"));
//console.log(Array.from({name: "Pradeep"}));//it gives empty array 

//when there is multiple variables to convert into array
let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));



 



 








