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