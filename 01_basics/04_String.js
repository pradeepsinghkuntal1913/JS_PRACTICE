const name = "hitesh"
const repocount = 50

// console.log(name + repocount + "Value"); we do not use to conconate the string 

console.log(`hello my name is ${name} and my repo count is ${repocount}`); // string interpolation

const gameName = new String('Hitesh-hc') 
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) //we use negative value only in slice 
console.log(anotherString);

const newStringone = "     hitesh      "
console.log(newStringone);
console.log(newStringone.trim()); //remove all the space that are not used only on white space and it has also start and endd 

const url = "https://hitesh.com/hitrsh%29choudhary"

console.log(url.replace('%20', '-'));//replace 20 with -

console.log(url.includes('histesh'));//it prints true because histesh is present in the string


console.log(gameName.split('-')); //split basics on -








