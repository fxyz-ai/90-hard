document.addEventListener('DOMContentLoaded',()=>{
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const inputField = document.getElementById('value');
    let max=89;
    let min=1;
    decreaseButton.addEventListener('click', () => {
        const currentValue = inputField.value;
        if (currentValue > min) {
            inputField.value = parseInt(currentValue) - 1;
        }
    });

    increaseButton.addEventListener('click', () => {
        const currentValue = inputField.value;
        if (currentValue < max) {
            inputField.value = parseInt(currentValue) + 1;
        }
    });

})