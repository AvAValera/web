// variable
var firstName = 'Well';
const lastName = 'Wells';
let age = 23;
const human = true;

console.log('My name is: ' + firstName + ' I\'m years old: ' + age);
console.log(typeof firstName, typeof human, typeof age);

let names = ['John', 'Johns', 'Mike', 'Sam'];
let rand = Math.floor(Math.random() * names.length)
console.log(names[(Math.floor(Math.random() * names.length))])
console.log(Math.floor(Math.random()*(5-2+1))+2)

//Strings
let myName = 'Tom';
let myAge = 33;

const output = 'Hi, my name '+myName+' and '+myAge+' years old';
var out = `Hi my name is ${myName} and ${myAge} years old to me` ;
console.log(out);

let testName = 'Mike'
console.log(testName.toUpperCase());
console.log(testName.toLowerCase());
console.log(testName.charAt(2));
console.log(testName.indexOf('ke'));
console.log(testName.repeat(5));

//function
function test(funcName){
    console.log(`Hi ${funcName}`);
}
test('Lisa')
const variables = function(ff){
    console.log(`Hi ${ff}`);
    
}
variables('Tom')
const numbers = (a, b) => a + b
console.log(numbers(6, 10));

const cicle = function(name){
    return function(lastName){
        console.log(name + ' ' + lastName);
        
    }
}
let lastNam = cicle('Din')
console.log(lastNam('Win'))
console.log(lastNam('Winer'));











