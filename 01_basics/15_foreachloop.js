


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){//instead of val we can use any parameter
//     console.log(val);
// } )

// arror function () =>{}
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//we have to give reference

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } ) // in arrow function we have three more parameters i.e items , index , arr

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (im) => {
    
    console.log(im.languageName);//access of languageName
} )