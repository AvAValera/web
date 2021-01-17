'use strict';
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

let nam = 'Well';
console.log(`hello ${nam}`);

let typeString = true;
console.log(typeof typeString);
console.log(typeString);
typeString = String(typeString);
console.log(typeof typeString);
console.log(typeString);

let typeNum = '123';
console.log(typeNum);
console.log(typeof typeNum);
typeNum = Number(typeNum);
console.log(typeNum);
console.log(typeof typeNum);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b); // 12 

console.log('A' > 'a');
let company = 'apple';
(company == 'aple') ? console.log('Yes') : console.log('No');

// let enterNum = prompt('Enter number');
// if(enterNum == 0){
//     alert(0);
// }
// else if(enterNum >= 1){
//     alert(1);
// }
// else{
//     alert(-1);
// } 

// let enterNum = prompt('Enter number');
// (enterNum >= 1) ? alert(1) :
    // (enterNum <= -1 ) ? alert(-1): alert(0); 

// let wordEnter = "Test";
// let wordEnterTwo = "Test two";
// let finalWord = "null" || null || wordEnterTwo; 
// alert(finalWord); 

// let ageDiapasone = prompt("Enter")// in 14 or 90
// if(ageDiapasone >= 14 && ageDiapasone <= 90){
//     alert("Diapasone")
// }else{
//     alert("Not Diapasone!") 
// }

// let ageDiapasone = prompt("Enter")// out 14 or 90
// if(!ageDiapasone <= 13 || !ageDiapasone >= 91){
//     alert("Diapasone")
// }else{
//     alert("Not Diapasone!")  
// }

// let ageDiapasone = prompt("Enter")// out 14 or 90
// if(ageDiapasone <= 13 || ageDiapasone >= 91){
//     alert("Diapasone")
// }else{
//     alert("Not Diapasone!")
// }

// let login = prompt("Enter Login");
// if(login == "admin"){
//     let password = prompt("Enter Password");
//     if(password == "123"){
//         alert("Wellcome!");
//     }
//     else{
//         alert("Bad pasword!")
//     }
// }
// else{
//     alert("Who are you?");
// }

let colorArray = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'black'];
for(let i = 0; i < colorArray.length; i++){
    if(i == 1 || i == 2){
        console.log(colorArray[i]);
        
    }
}

for(let j = 1; j <= 10; j++){
    if(j % 2 == 0){
        console.log(j);
    }
}
let countK = 0;
while(countK < 3){
    console.log(`number ${countK}!`);
    countK++;
}
// let inputK;
// do{
//     inputK = prompt('enter num');
//     if(inputK >=100)break;
// }while(inputK < 100)

// let inputJ = +prompt('enter num');

// switch(inputJ){
//     case 0:
//         alert("zero");
//         break;
//     case 1:
//         alert("one");
//         break;
//     case 2:
//     case 3:
//         alert("two or three");
//         break;
//         1
// }

function checkAge(age){
    (age > 18) ?  true : alert("no way!");
}
function min(a, b){
    (a > b) ? alert(b) : alert(a);
}
function pow(x, n){
    return alert(x**n)
}

function message(){
    console.log('Hello user!');
    
}
let showMes = message;
message();
