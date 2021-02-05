const elements = document.querySelector('.todo_elements');
const btnClear = document.querySelector('.btn_clear');
const btnEnter = document.querySelector('.btn_enter')


btnClear.addEventListener('click', () =>{
        elements.innerHTML = '';
    });

btnEnter.addEventListener('click', () =>{
    const inp = document.querySelector('.input');
    if(inp.value.trim().length > 2){
        const check = document.createElement('input')
        check.type = 'checkbox';
        const newElem = document.createElement('div');
        elements.appendChild(newElem);
        
        newElem.textContent = inp.value;
        inp.value = '';
        newElem.appendChild(check);
    }
});
