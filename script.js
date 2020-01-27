var highscores = document.getElementById("highscores");
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");

var secondsLeft = 120;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //sendMessage();
    }
  }, 1000);
}

// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   mainEl.appendChild(imgEl);
// }

setTime();