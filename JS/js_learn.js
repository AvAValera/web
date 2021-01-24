

// objArr(arrNumbs);
const testArray = ['name', 'Well', 'age', 20, 'hobby', 'draw', 'color', 'green'];
const anketa = {};
const chArr = arr =>{
    
    for(let i = 0; i < arr.length; i++){ // eslint-disable-line no-plusplus
        if(i % 2 === 0){
            anketa[arr[i]] = arr[i + 1];
        }
    }
};
chArr(testArray);
console.log(anketa);