const question = [
    {
        'question': "What is the capital city of France?",
        'a': "Paris",
        'b': "Madrid",
        'c': "Rome",
        'd': "Berlin",
        'correct': "a",
    },
    {
        'question': "Which planet is known as the 'Red Planet'?",
        'a': "Mars",
        'b': "Venus",
        'c': "Jupiter",
        'd': "Saturn",
        'correct': "a",
    },
    {
        'question': "What is the chemical symbol for gold?",
        'a': "Au",
        'b': "Ag",
        'c': "Cu",
        'd': "Fe",
        'correct': "a",
    },
    {
        'question': "Who painted the Mona Lisa?",
        'a': "Pablo Picasso",
        'b': "Vincent van Gogh",
        'c': "Leonardo da Vinci",
        'd': "Michelangelo",
        'correct': "c",
    }
];

let index = 0;
let total = question.length;
let correct = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll('.options');
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const timerBox = document.getElementById("timerBox");

const quizTimeInSeconds = 120; // Set the quiz time in seconds
let timeRemaining = quizTimeInSeconds;
let timerInterval = null;

const startTimer = () => {
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
};

const updateTimerDisplay = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerBox.innerText = `Time Remaining: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const loadQuestion = () => {
    if (index === 0) {
        prevButton.disabled = true;
        startTimer();
    } else {
        prevButton.disabled = false;
    }

    if (index === total - 1) {
        nextButton.innerText = "Submit";
    } else {
        nextButton.innerText = "Next";
    }

    const data = question[index];
    quesBox.innerText = `${index + 1}) ${data.question}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

    reset();
};

const prevQuestion = () => {
    if (index > 0) {
        index--;
        loadQuestion();
    }
};

const nextQuestion = () => {
    if (index < total - 1) {
        index++;
        loadQuestion();
    } else {
        submitQuiz();
    }
};

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        correct++;
    } else {
        wrong++;
    }

    if (index < total - 1) {
        index++;
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        endQuiz();
    }
};

const getAnswer = () => {
    let answer;
    optionInput.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInput.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3>Thank You! Your response has been submitted.</h3>
    <h2>${correct}/${total} are correct</h2>`;
};

// Initial call: after page loads
loadQuestion();
