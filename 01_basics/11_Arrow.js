// const user = {
//     username: "Pradeep",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`); // this is use fetch the current context under the that scope
//         // console.log(this);
        
//     }
// }

// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// // console.log(this); // now this refers to empty object because of node

// // function chai(){
// //     let username = "Pradeep"
// //     console.log(this.username); // we can not use this in function  We use only in object 
    
// // }
// // chai()


// //How to declare functions using arrow function


// // const chai = function() {
// //     let username = "Pradeep"
// //     console.log(this.username)
// // }
// const chai = () => {
//     let username = "Pradeep"
//     console.log(this)
// }

// chai()


// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }


// // const addTwo = (num1, num2) => num1 + num2 //this is return like this also without paraenthesis  implicit function
 
// //if we use curly brackets we use return kyword 


//in expicit we use return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(2, 4))


// const addTwo = (num1, num2) => ({username: "Pradeep"})  //we cannot return the object without paraenthesis ()

//Immediately Invoked Function Expressions(IIFE)

// function chai() {
//   console.log(`DB CONNECTED`);
// }

// chai()


(function chai() {
  console.log(`DB CONNECTED`);
})();


( (name) => {
  console.log(`DB CONNECTED TW ${name}`);
  
}) ('PRADEEP')
// () ()  //first bracket is for define a function and second one is for execution because for global scope ke poluttion  problem kyi baar toh uss global scope ke variable hai jo bhi vha declartion hai ussse htane ke liye use hota h ye

