function getRandomQuote() {
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');

    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteTextElement.textContent = `"${data.content}"`;
            quoteAuthorElement.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}
getRandomQuote();
