document.addEventListener('DOMContentLoaded', () => {
    const dropBtn = document.getElementById('dropdown');
    dropBtn.addEventListener('click', function () {
        console.log('clicked');
        document.querySelector('.toggle').classList.toggle('active');
    });
});