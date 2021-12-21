var timerstart =document.getElementById("countdown")
var  hsbtn =document.getElementById("highscorebtn")
var test = document.getElementById("quizbox")
var start =document.getElementById("startbtn")
var op1 =document.getElementById("op1");
var op2 =document.getElementById("op2");
var op3 =document.getElementById("op3");
var op4 =document.getElementById("op4");

var initialtime = 5;
var testobj =  [
    {
    question: "What is javascript",
    a1: "Coffee scribles",
    a2: "Action peforming code",
    a3: "Elongated name for Java",
    a4: "Not this one",
    correct: "a2"
},
{
    question: "What is css",
    a1: "Cascading Style Sheets",
    a2: "Cookies- Sugary, Sweet",
    a3: "Colors, scripts, sexbox",
    a4: "Not this one",
    correct: "a1"
}
]

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

function displayquestions() {
   console.log(test);
    var currentquestion=0
    var qscreen = testobj[currentquestion];
    test.textContent= qscreen.question;
    op1.textContent=qscreen.a1;
    op2.textContent=qscreen.a2;
    op3.textContent=qscreen.a3;
    op4.textContent=qscreen.a4;
    
};


start.addEventListener("click", function() {
    startTimer();
    displayquestions();
});
