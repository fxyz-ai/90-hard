document.addEventListener('DOMContentLoaded', () => {
    const collapse = document.querySelectorAll('.accordionTop');
    Array.from(collapse).forEach(function (e) {
        e.addEventListener('click', function (e) {
            const current = e.target.parentElement;
            current.classList.toggle('active');
        })
    })
})