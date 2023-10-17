document.addEventListener('DOMContentLoaded', () => {
    const inpTxt = document.getElementById('inputText');
    const ch = document.getElementById('char');
    const wrd = document.getElementById('word');

    inpTxt.addEventListener('input', function () {
        ch.innerHTML = inpTxt.value.length + ' Characters';
        wrd.innerHTML = inpTxt.value.trim().split(' ').length + ' Words';
    });
});