const content = document.querySelector('.content');
    btn = document.querySelector('.btn');
    inp = document.querySelector('.inp');
    message = document.querySelector('.message');
    btnClear = document.querySelector('.btnClear');

btn.addEventListener('click',() =>{
    message.style.border = '1px solid black';
    let inputEnter = inp.value;
    message.innerHTML += `${inputEnter} <br>`
    
    inp.value = '';
})
btnClear.addEventListener('click',() =>{
    message.innerHTML = '';
    message.style.border = 'none';
});