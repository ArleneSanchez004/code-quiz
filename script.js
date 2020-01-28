var highscores = document.getElementById("highscores");
var newScore = document.getElementById("newScore");
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");

let questions = [
    {
        question: "hi this is Q1",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "choiceA",
    },
    {
        question: "second question",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "choiceB",
    },
    {
        question: "beep bop third Question",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "choiceC",
    },
    {
        question: "Final Question",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "choiceA",
    },
];

var finalQuestion = questions.length - 1;
var currentQuestion = 0;
var score = 0;
var secondsLeft = 60;


function showQuestion() {
    var q = questions[currentQuestion];
    question.innerHTML = "<h2>" + q.question + "</h2>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            quiz.style.display = "none";
            
        }
    }, 1000);
}
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    showQuestion();
    setTime();
    console.log("hey");
}
function check(answer) {
    if (answer == questions[currentQuestion].correct) {
        score += 10;
        console.log("correct " + score);
        currentQuestion++;
    } else {
        secondsLeft -= 10;
        currentQuestion++;
    }

    if (currentQuestion <= finalQuestion) {
        showQuestion();
        console.log(currentQuestion);
    } else {
        secondsLeft = 0;
        gameOver();

    }
}

function gameOver(){
    newScore.style.display = "block";
}

start.addEventListener("click", startQuiz);



