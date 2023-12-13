function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const password = generateRandomPassword(length, uppercase, lowercase, numbers, symbols);

    document.getElementById('password').value = password;
}

function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = '';
    
    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (lowercase) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (numbers) {
        charset += '0123456789';
    }
    if (symbols) {
        charset += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

function copyToClipboard() {
    const passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand("copy");
    alert('Password copied to clipboard!');
}