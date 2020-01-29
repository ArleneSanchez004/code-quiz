var highscores = document.getElementById("highscores");
var enterNewScore = document.getElementById("EnterNewScore");
var initials = document.getElementById("initials");
var scoreList = document.getElementById("scoreList");
var scoreForm = document.getElementById("scoreForm");

var timer = document.getElementById("timer");
var start = document.getElementById("start");

var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");

let questions = [
    {
        question: "Which of these is not a data type?",
        choiceA: "for loop",
        choiceB: "Boolean",
        choiceC: "String",
        correct: "choiceA",
    },
    {
        question: "Which of these is not a type of loop?",
        choiceA: "for loop",
        choiceB: "switch loop",
        choiceC: "while loop",
        correct: "choiceB",
    },
    {
        question: "What immediately follows a function when it is called?",
        choiceA: "square brackets",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        correct: "choiceC",
    },
    {
        question: "What is JSON?",
        choiceA: "JavaScript Object Notation",
        choiceB: "JaSON, a dude",
        choiceC: "JavaScript Only Nightmode",
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
            gameOver();
        }
    }, 1000);
}
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    showQuestion();
    setTime();
}
function check(answer) {
    if (answer == questions[currentQuestion].correct) {
        score += 25;
        console.log("correct " + score);
        currentQuestion++;
        $("#correctAnswer").fadeToggle();
        $("#correctAnswer").fadeToggle();
    } else {
        secondsLeft -= 15;
        currentQuestion++;
        $("#wrongAnswer").fadeToggle();
        $("#wrongAnswer").fadeToggle();
    }

    if (currentQuestion <= finalQuestion) {
        showQuestion();
    } else {
        secondsLeft = 0;
        gameOver();

    }
}

function gameOver(){
    $('#enterNewScore').modal('show');
    //enterNewScore.style.display = "inline";
    //scoreList.style.display = "block";
    //initials.style.display = "block";
}

//start button
start.addEventListener("click", startQuiz);

//highscore handling
//function accessHighscores(){
//};

var scores = [];

init();

function renderScores(){
    scoreList.innerHTML = "";

    for (i = 0; i < scores.length; i++){
        var sco = scores[i];
        var newP = document.createElement("p");
        newP.textContent = sco;
        scoreList.appendChild(newP);
        scoreList.append(score);
    }
}

function init(){
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null){
        scores = storedScores;
    }
    renderScores();
}

function storeScores(){
    localStorage.setItem("scores", JSON.stringify(scores));
}

scoreForm.addEventListener("submit", function(event){
    event.preventDefault();
    var myInitials = initials.value.trim();

    scores.push(myInitials);
    initials.value = "";

    storeScores();
    renderScores();
})




