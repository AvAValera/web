const elements = document.querySelector('.todo_elements');
const btnClear = document.querySelector('.btn_clear');
const btnEnter = document.querySelector('.btn_enter')


btnClear.addEventListener('click', () =>{
        elements.innerHTML = '';
    });

btnEnter.addEventListener('click', () =>{
    const inp = document.querySelector('.input');
    if(inp.value.trim().length > 2 && inp.value.trim().length < 24){
        const check = document.createElement('input')
        check.type = 'checkbox';
        const newElem = document.createElement('div');
        const paragraph = document.createElement('p');
        elements.appendChild(newElem);
        newElem.appendChild(paragraph);
        paragraph.classList.add('elem_paragraph')
        newElem.appendChild(check);
        paragraph.textContent = inp.value;
        inp.value = '';
        
    }
    if(inp.value.trim().length <= 2){
        const error = document.querySelector('.error');
        error.textContent = 'Error!';
    }
});
