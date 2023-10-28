const btn = document.querySelector('.toggleBtn');
const moveBtn = document.querySelector('.bgMove');
const fa = document.querySelector('.fa-solid');
const faMoon = document.querySelector('.fa-moon');
const head = document.querySelector('.head');
btn.addEventListener('click', function () {
    moveBtn.classList.toggle('active')
    head.classList.add('dark')
    head.innerHTML='Click to go Light'
    fa.classList.toggle('dark')
    faMoon.classList.toggle('active')

    if (moveBtn.classList == 'active') {
        faMoon.classList.add('moon-active')
    }
    else {
        faMoon.classList.remove('moon-active')
    }
    if (moveBtn.classList.contains('active')) {
        document.body.classList.add('dark')
        head.classList.add('dark')
        head.innerHTML='Click to go Light'
    }
    else {
        document.body.classList.remove('dark')
        head.classList.remove('dark')
        head.innerHTML='Click to go Dark'
    }
})