function genQRCode() {
    const urlInput = document.getElementById('url');
    const qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = '';
    const url = urlInput.value.trim();

    if (url !== '') {
        const qrcode = new QRCode(qrCodeDiv, {
            text: url,
            width: 128,
            height: 128
        });
    } else {
        alert('Please enter a valid URL.');
    }
}
