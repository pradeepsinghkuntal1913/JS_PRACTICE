function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
    console.log("M");
}
// sayMyName()//execution

// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2);
   
// }
  


function addTwoNumbers(number1, number2){
//    let result = number1 + number2   
//    return result
return number1 + number2
}

const result = addTwoNumbers(4, 6)
// console.log("Result: ", result);

//addTwoNumbers(4, 6)//it is called a call a function 

function loginUserMessage(username="sam") { // we use a default parameter 
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage()); // when we are not use parameter at the time of calling then the undefiend is shown
// console.log(loginUserMessage("Hitesh"));


//different types of parameter

function calculateCartPrice(...num1){
    return num1
}
// console.log(200); //when there is more values then we use rest and spread operator


// console.log(calculateCartPrice(200, 400, 500));



const user = {
    username: "hitesh",
    price: 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})  // without making object we use aslo use direct 


const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
