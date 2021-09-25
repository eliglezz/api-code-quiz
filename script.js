var seconds = 60;
var score = 0;
var highScore;

// <= countdown function =>
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function () {
  seconds--;
  document.getElementById("countdown").textContent = seconds;
  if (seconds <= 0) clearInterval(countdown);
}, 1000);

// <= event listener for submit =>
var submitBtn = document.createElement("button");
submitBtn.innerHTML = "Submit";
submitBtn.addEventListener("click", function () {
  console.log("This works");
  if (score > 0) {
    // store score
  }
});
document.body.appendChild(submitBtn); // change to where the button should be

// <= button to start game =>
var startBtn = document.createElement("button");
startBtn.innerHTML = "Start Game";
startBtn.addEventListener("click", function () {
  console.log("This works");
  startGame();
});
document.body.appendChild(startBtn); // change to where the button should be

// <= go back button =>
var goBack = document.createElement("button");
goBack.innerHTML = "Go Back";
goBack.addEventListener("click", function () {
  console.log("This works");
  reset(); // add reset function
});
document.body.appendChild(goBack); // change to where the button should be
