const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

btn.addEventListener('click', () => {
    modal.classList.toggle('hide')
    document.body.style.overflow = 'hidden';
})
close.addEventListener('click', () => {
    modal.classList.toggle('hide')
    document.body.style.overflow = '';
})

setInterval(() => {
    let win = (window.scrollY * 2) / 5;
    console.log(win);
    document.body.style.backgroundColor = `rgb(${win}, ${win}, 255)`;
},10)