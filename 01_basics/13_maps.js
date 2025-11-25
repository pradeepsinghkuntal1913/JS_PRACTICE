// for of is used for iterate over the values iterable objects.

// ["", "", ""] => string in the array
// [{}, {}, {}] => object in the array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // arr is an object or array...it prints the element of an array
    //console.log(num); 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet === " ") continue;
    console.log(`Each char is ${greet}`) //it prints hello world like a string like h e l l o
}
//if we don't want extra space than we can use continue
// Maps
//it holds key va;ue pairs and it is unique 
const map = new Map() //way o make a map 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//maps are always print unique pairs

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // object is not iterable  in this 
//     console.log(key, ':-', value);
    
// }