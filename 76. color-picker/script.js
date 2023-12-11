function updateColor() {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
}
