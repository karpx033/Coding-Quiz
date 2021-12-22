var timerstart =document.getElementById("countdown")
var  hsbtn =document.getElementById("highscorebtn")
var test = document.getElementById("quizbox")
var start =document.getElementById("startbtn")
var op1 =document.getElementById("op1");
var op2 =document.getElementById("op2");
var op3 =document.getElementById("op3");
var op4 =document.getElementById("op4");
var currentquestion=0
var rw = document.getElementById("answeralert");
var newform = document.createElement("form");
var initialsform = document.getElementById("initsubmit");





var initialtime = 25;
var testobj =  [
    {
    question: "What is javascript",
    a1: "Coffee scribles",
    a2: "Action peforming code",
    a3: "Elongated name for Java",
    a4: "Not this one",
    correct: "B"
},
{
    question: "What is css",
    a1: "Cascading Style Sheets",
    a2: "Cookies- Sugary, Sweet",
    a3: "Colors, scripts, sexbox",
    a4: "Not this one",
    correct: "A"
},
{
    question: "question 3",
    a1: "wrong",
    a2: "wrong",
    a3: "wrong",
    a4: "correct",
    correct: "D"
},
{
    question: "What is css",
    a1: "wrong",
    a2: "correct",
    a3: "wrong",
    a4: "wrong",
    correct: "B"
},
{
    question: "Enter your initials to see highscores",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    correct: ""

},
]

console.log(timerstart);

function startTimer() {
        localStorage.score=0;
         var timerInterval = setInterval(function() {
            initialtime--;
            timerstart.textContent=initialtime

            if ( initialtime === 0) {
                clearInterval(timerInterval);
                initialtime=5;
                updateScore();
            }
    }, 1000);
};

function displayquestions() {
    var qscreen = testobj[currentquestion];
    test.textContent= qscreen.question;
    op1.textContent=qscreen.a1;
    op2.textContent=qscreen.a2;
    op3.textContent=qscreen.a3;
    op4.textContent=qscreen.a4;
    
    if (testobj.length == currentquestion+1) {

        document.getElementById("scorecount").innerHTML="Your Score: "+ localStorage.score;
        finalprompt();
    }

    
};

function updateScore() {
    currentquestion++;
};

function guesscheck(answer) {
    if (testobj[currentquestion].correct == answer) {
        currentquestion++;
        scorekeeper();
        displayquestions();
        rw.textContent="Correct!"
        setTimeout(function() {
            rw.textContent="";
        }, 3000);
    } else {
        currentquestion++;
        startTimer();
        displayquestions();
        rw.textContent="Wrong!"
        setTimeout(function() {
            rw.textContent="";
        }, 3000);
    }
};

 function generateform() {
        var init = document.createElement("input");
        init.setAttribute=("type", "text");
        init.id="initsubmit";
        var s = document.createElement("input");
                s.setAttribute("type", "submit");
                s.setAttribute("value", "Submit");
                s.id="clickme";
        newform.appendChild(init);
        newform.appendChild(s);
    document.getElementsByTagName("body")[0]
               .appendChild(newform);
               
 };

function scorekeeper () {

    if (localStorage.score) {
        localStorage.score = Number(localStorage.score)+Number(initialtime);
      } else {
        localStorage.score = Number(initialtime);
}
};

function savehighscore() {
    const val = document.querySelector('input').value;
    var finalscore = JSON.parse(localStorage.getItem("score"));
    var highscore = {
        initials: val,
        theirscore: finalscore
    };
    localStorage.setItem("hsTally", JSON.stringify(highscore));
    var Records = [];
      Records = JSON.parse(localStorage.getItem('Records')) || [];
   Records.push(highscore);
    localStorage.setItem('Records', JSON.stringify(Records));
    
};

function retrievehighscore() {
    var alltherecords = JSON.parse(localStorage.getItem("Records"));
   console.log(alltherecords);
   for (let i = 0; i < alltherecords.length; i++) {
    if (alltherecords[i] !== null) {
        var eleinitials = document.createElement("h2");
        var elescores= document.createElement("h2");
        eleinitials.textContent=alltherecords[i].initials;
        elescores.textContent=alltherecords[i].theirscore;
        document.getElementById("highscorebtn").appendChild(eleinitials);
        document.getElementById("highscorebtn").appendChild(elescores);

        } else {
          return;
        }
      }
  } ;
   



function finalprompt() {
    start.remove();
    timerstart.remove();
    generateform();
 }



start.addEventListener("click", function() {
    localStorage.setItem("hsTally","")
    startTimer();
    displayquestions();
   
});

newform.addEventListener("submit", function(event) {
       event.preventDefault();   
       savehighscore();
     });

hsbtn.addEventListener("click", function() {
    retrievehighscore();
}
)