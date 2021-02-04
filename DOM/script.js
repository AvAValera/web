const content = document.querySelector('.content');
    btn = document.querySelector('.btn');
    inp = document.querySelector('.inp');
    message = document.querySelector('.message');
    btnClear = document.querySelector('.btnClear');
    en = document.querySelectorAll('.en');
    ru = document.querySelectorAll('.ru');
    btnTranslate = document.querySelector('.btn_translate');
    btnColor = document.querySelector('.btn_color')
    page = document.querySelector('.page')
btn.addEventListener('click',() =>{
    if(inp.value.trim().length > 0){
        message.style.border = '1px solid black';
        message.innerHTML += `${inp.value} <br>`
    }
    
    inp.value = '';
})
btnClear.addEventListener('click',(e) =>{
    message.textContent = '';
    message.style.border = 'none';
    document.write = e.target
    
});

for (let i = 0; i < ru.length; i++){
    ru[i].style.display = 'none';

}

function checkRU(arg){
    for (let i = 0; i < ru.length; i++){
        ru[i].style.display = `${arg}`;
}};
function checkEN(arg){
    for (let i = 0; i < en.length; i++){
        en[i].style.display = `${arg}`;
}};

let checkBtn = true;
btnTranslate.addEventListener('click',() =>{
    if(checkBtn){
        checkRU('inline');
        checkEN('none');
        btnTranslate.textContent = 'RU'
        checkBtn = false;
        }
    else{
        checkRU('none');
        checkEN('inline');
        btnTranslate.textContent = 'EN'
        checkBtn = true;
        
    }
    
});

btnColor.addEventListener('click', (e) =>{
    page.style.transition = '0s';
    page.style.color = 'white';
    page.style.backgroundColor = 'grey';
    setTimeout(() => {
        page.style.transition = '1s';
    },1000)

    document.querySelector('body').style.backgroundColor = 'black';
});
page.addEventListener('mouseover', (e) =>{
    page.style.borderRadius = '50px';
});
page.addEventListener('mouseout', (e) =>{
    page.style.borderRadius = '10px';
});