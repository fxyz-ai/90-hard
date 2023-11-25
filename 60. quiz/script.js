document.addEventListener('DOMContentLoaded', () => {
    const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale"
    }
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");

        questionElement.textContent = questions[currentQuestion].question;
        optionsElement.innerHTML = "";

        for (const option of questions[currentQuestion].options) {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsElement.appendChild(button);
        }
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = questions[currentQuestion].correctAnswer;

        if (selectedOption === correctAnswer) {
            alert("Correct!");
        } else {
            alert(`Incorrect! The correct answer is ${correctAnswer}.`);
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            alert("Quiz completed! Try again");
            resetQuiz();
        }
    }

    function resetQuiz() {
        currentQuestion = 0;
        loadQuestion();
    }

    window.onload = loadQuestion;

})