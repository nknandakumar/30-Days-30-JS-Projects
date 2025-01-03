const questions = [
    {
        question: "Which company manufactures the Mustang?",
        answers: [
            {text: "Chevrolet", correct: false},
            {text: "Dodge", correct: false},
            {text: "Ford", correct: true},
            {text: "Tesla", correct: false},
        ],
    },
    {
        question: "What does the abbreviation 'SUV' stand for?",
        answers: [
            {text: "Sports Utility Vehicle", correct: true},
            {text: "Super Utility Vehicle", correct: false},
            {text: "Smart Utility Vehicle", correct: false},
            {text: "Speed Utility Vehicle", correct: false},
        ],
    },
    {
        question: "Which car is known as the world's first mass-produced electric vehicle?",
        answers: [
            {text: "Nissan Leaf", correct: true},
            {text: "Tesla Model S", correct: false},
            {text: "Chevrolet Volt", correct: false},
            {text: "Toyota Prius", correct: false},
        ],
    },
    {
        question: "In which country is the car manufacturer BMW based?",
        answers: [
            {text: "Italy", correct: false},
            {text: "Germany", correct: true},
            {text: "France", correct: false},
            {text: "Japan", correct: false},
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton =  document.querySelector(".answer-buttons");
const nextButton =  document.getElementById("next-btn");
 

let currentQuestionIndex = 0 ;
let score  = 0 ;
function startQuiz(){

    currentQuestionIndex = 0 ;
    score = 0 ;
    nextButton.innerHTML = "Next" ;
    showQuestion();
}

function showQuestion(){
     resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = `${questionNo} . ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
      
        const buttons = document.createElement("button");
        buttons.innerHTML = answer.text ;
      
        
        buttons.classList.add("btn");
        answerButton.appendChild(buttons);
        //clicking 
        if(answer.correct){
             buttons.dataset.correct = answer.correct ;
        }
         buttons.addEventListener("click",selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
    answerButton.removeChild (answerButton.firstChild)
    }
    }

  function selectAnswer(e){
    const selectBtn = e.target ;
    const isCorrect = selectBtn.dataset.correct === "true" ;
    if(isCorrect){
selectBtn.classList.add("correct");
score++ ;
    }else{
selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextButton.style.display = "block" ;
  }
       
   function showScore(){
    resetState();
    questionElement.innerHTML = ` You scored ${score} out of ${questions.length} ` ;
    nextButton.innerHTML = "Play Again" ;
    nextButton.style.display = "block" ;
   }

  function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
    showQuestion();
    }else{
    showScore();
    }
    }

  nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
    handleNextButton();
    }else{
    startQuiz();
    }
  })
startQuiz();

