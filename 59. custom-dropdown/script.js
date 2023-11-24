document.addEventListener('DOMContentLoaded', () => {
    const selectMenu = document.querySelector(".menu");
        const selectBtn = selectMenu.querySelector(".select-btn");

        selectBtn.addEventListener("click", function () {
            selectMenu.classList.toggle("active");
        });
})