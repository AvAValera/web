const elements = document.querySelector('.todo_elements');
        btnClear = document.querySelector('.btn_clear');
        btnEnter = document.querySelector('.btn_enter')
        error = document.querySelector('.error');
        inp = document.querySelector('.input');

        const check = document.createElement('input')
        check.setAttribute('type', 'checkbox');

btnClear.addEventListener('click', () =>{
        elements.innerHTML = '';
        inp.value = '';
        numbElem = 0;
    });


function addElementToList(){
    if(inp.value.trim().length > 2 && inp.value.trim().length < 24){
        error.textContent = '';
        var check = document.createElement('input')
        check.setAttribute('type', 'checkbox');
        
        check.classList.add(`inputCheck`);
        const newElem = document.createElement('div');
        newElem.className = 'elem_block';
        const paragraph = document.createElement('p');
        elements.appendChild(newElem);
        newElem.appendChild(paragraph);
        paragraph.classList.add(`elem_paragraph`);
        newElem.appendChild(check);
        paragraph.textContent = inp.value;
    }
    if(inp.value.length <= 2 || inp.value.length >= 25){
        error.textContent = 'Error!';
    }
    
    inp.value = '';
};

btnEnter.addEventListener('click', () =>{
    addElementToList();
});

inp.addEventListener('keydown',(event) => {
    if(event.keyCode === 13){
        addElementToList();
    };
});





