

let array = [dog = {
  breed: 'bullterrier',
  age: 5,
  color: 'white'
},
cat = {
  breed: 'Scotland',
  age: 7,
  color: 'grey'
} ];
console.log(array[1].breed, array[0].breed);

let shop = [
  ["apple", 10, true],
  ["onion", 3, true],
  ["patates", 5, false]
];
shop[3] = ["carrot", 12, true]
console.log(shop[0][0], shop[3][0]);

let colorArrary = ['white', 'black', 'blue', 'yellow', 'red', 'pink', 'green'];
for(i in colorArrary){
  document.write(colorArrary[i]);
}
for(let result of colorArrary)
  document.write(result + " ");

function display(){
  document.write('<br>New function')
}
display();
function sum(a, b, c){
  document.write('<br>', a + b + c);
}
sum(1,2,3)
function arg(){
  for(let i = 0; i < arguments.length; i++){
    console.log(arguments[i]+100);
  }
}
arg();


