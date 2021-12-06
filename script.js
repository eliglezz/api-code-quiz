var timerEl = document.querySelector("#countdown");
var input = document.querySelector("#initials");
var questionEl = document.querySelector("#question");
var instructionEl = document.querySelector("#instructions")
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var hs1El = document.querySelector("#hs1");
var hs2El = document.querySelector("#hs2");
var hs3El = document.querySelector("#hs3");
var answers = document.querySelector("#answers")
                  
var score = 0;
var highScore = 0;
// <= countdown function => 
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time: " + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      stopGame();
    }
  }, 1000);
}

// <= event listener for submit =>
var submitBtn = document.createElement("button");
submitBtn.innerHTML = "Submit";
submitBtn.addEventListener("click", function () {
  console.log("This works");
  if (score > 0) {
    submitScore();
  } else {
    alert("You at least need to get one right!");
  }
});
document.getElementById("submitBtn").appendChild(submitBtn); // change to where the button should be


// <= go back button =>
var goBack = document.createElement("button");
goBack.innerHTML = "Go Back";
goBack.addEventListener("click", function () {
  console.log("This works");
  reset(); // add reset function
});
document.getElementById("goBack").appendChild(goBack); // change to where the button should be

// <= adds score to local storage =>
function submitScore(event) {
  localStorage.setItem("score", JSON.stringify(score));
  localStorage.setItem("initials", JSON.stringify(initials));
}

function showScore() {
  // Get stored stats from localStorage
  var score = JSON.parse(localStorage.getItem("score"));
  var initials = JSON.parse(localStorage.getItem("initials"));
}

// <= button to start game =>
var startBtn = document.createElement("button");
startBtn.innerHTML = "Start Game";
startBtn.addEventListener("click", function startQuiz() {
  console.log("This works");
  countdown();
  question1();
});
document.getElementById("startBtn").appendChild(startBtn); // change to where the button should be
// <=== could not find a way to add the whole button with text had to remove, add button, add text====>
function question1(){
  questionEl.textContent = "What is the distance between Earth and The Moon?";
  
  answer1El.textContent = "The Moon’s distance from Earth is about 300,000 miles (383,000km)."
  answer2El.textContent = "The Moon’s distance from Earth is about 340,000 miles (547,000km)."
  answer3El.textContent = "The Moon’s distance from Earth is about 240,000 miles (385,000km)."
  answer4El.textContent = "The Moon’s distance from Earth is about 200,000 miles (321,000km)."
  addEventListener("click")
  if ( answer3El === true) {
    score+=15;
    question2();
  } else {
    timeLeft-=15;
    question2();
  }
}

function question2(){
  
  questionEl.textContent = "Where does the Moon get its light from?"
  answer1El.addEventListener("click") = "The Sun"
  answer2El.addEventListener("click") = "The Moon's atmosphere"
  answer3El.addEventListener("click") = "The Moon's Core"
  answer4El.addEventListener("click") = "The Earth"
  if ( answer1El) {
    score+=15;
    question3();
  } else {
    timeLeft-=15;
    question3();
  }
}

function question3(){
  
  questionEl.textContent = "How much of Moon's Surface is usually lit up?"
  answer1El.addEventListener("click") = "25%",
  answer2El.addEventListener("click") = "100%"
  answer3El.addEventListener("click") = "75%"
  answer4El.addEventListener("click") = "50%"
  if ( answer4El) {
    score+=15;
    question4();
  } else {
    timeLeft-=15;
    question4();
  }
}

function question4(){
  
  questionEl.textContent = "Approximately how wide is The Moon"
  answer1El.addEventListener("click") = "The Moon is about 2160 miles (3475km) wide."
  answer2El.addEventListener("click") = "The Moon is about 2260 miles (3640km) wide."
  answer3El.addEventListener("click") = "The Moon is about 3160 miles (5090km) wide."
  answer4El.addEventListener("click") = "The Moon is about 3260 miles (5250km) wide."
  if ( answer1El) {
    score+=15;
    stopGame();
  } else {
    timeLeft-=15;
    stopGame();
}
}

function stopGame() {
  
}