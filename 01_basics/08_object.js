//there are two way to cretate an object 
//singleton 

//object literals
//object have keys and values

const mySym = Symbol("Key1")

const jsUser = {
    name: "Pradeep",
    age: 20,
    [mySym]: "myKey1", // how to use as a sumbol
    "location": "Jaipur",
    email: "sdffkf@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
                  //access
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["location"]);
// console.log(jsUser[mySym]);

//update an object
jsUser.email = "pradeep@gmail.com"
//+++++++++++++++++++++freeze++++++++++++++++//
//Object.freeze(jsUser)//it does not change the email now by using freeze 


//Function used in object
jsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(jsUser.greeting());

//when we do greeting  by name object  we are the particaular name of the object we use backticks  
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//string interpolation
}

// console.log(jsUser.greetingTwo());


//Singleton for with the help of contrustors 

// const tinderUser = new Object() // this is a singleton object 

const tinderUser = {} //this is a non singleton object

tinderUser.id = "1343"
tinderUser.name = "Pradeep SINGH"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:  "fhshfsh",
    fullname: {
        userfullname: {
            firstname: "HITESH",
            lastname: "chaoudhary"

        }
    }
}

// console.log(regularUser.fullname.userfullname);

//combiing an object

const obj1 = {1: "a", 2: "r"}
const obj2 = {3: "d", 4: "e"}

// const obj3 = {onj1, obj2}/
// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)//{} this is the target and all are the source of an object 
// console.log(obj3);

const obj4 = {...obj1, ...obj2}

//when there is a lots of object in the array 
const users = [
    {
        id: 1,
        email: "sfsfvf"
    },
    {
        id: 2,
        email: "sfsfvfawrgrgaergrsf"
    },
    {
        id: 3,
        email: "sarrsgaaaaaasfvf"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//fetch the keys of tinderuser
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggein'));//kya uss user ke paas ye wali property hai ya nhi for this we have use hasOwnProperty



//Destructring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstruction: "Hitish"
}

const {courseInstruction: intructor} = course
// console.log(courseInstruction);
console.log(intructor);// hum apni trf se koi bhi name rkh skte h isliye destructure kr rhe h 
// we use {} for destructring


//        JSON
// {
        //this is called json 
// }

//api are also found in array 

