var timerstart =document.getElementById("countdown")
var  hsbtn =document.getElementsByClassName("highscorebtn")
var test = document.getElementsByClassName("quizbox")
var start =document.getElementById("startbtn")

var initialtime = 5;

console.log(timerstart);

function startTimer() {
         var timerInterval = setInterval(function() {
            initialtime--;
            console.log(initialtime);
            timerstart.textContent=initialtime

            if ( initialtime === 0) {
                clearInterval(timerInterval);
                initialtime=5;
                updateScore();
            }
    }, 1000);
};

start.addEventListener("click", function() {
    startTimer();
});
