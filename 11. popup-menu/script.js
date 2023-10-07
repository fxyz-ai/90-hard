document.addEventListener('DOMContentLoaded', () => {
    const subBtn = document.getElementById('submit');
    const closeBtn = document.getElementById('close');
    const popup = document.querySelector('.popupcontainer');

    subBtn.addEventListener('click', () => {
        popup.classList.add('popupactive');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('popupactive');
    });
});
