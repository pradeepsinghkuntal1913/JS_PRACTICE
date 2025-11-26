//Dates
//Date is an object 

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

//print specific date 
let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate);

let myTimeStamp = Date.now()
// console.log(myTimeStamp);


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth);
// console.log(newDate.getDay);

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})



