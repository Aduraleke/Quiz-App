// Declaring an Array Of Questions

const questions = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 2,
    number: 1,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "HO"],
    answer: 1,
    number: 2,
  },
  {
    question: "Which element is known as the King of Chemicals?",
    options: ["Oxygen", "Sulfur", "Chlorine", "Nitrogen"],
    answer: 2,
    number: 3,
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    answer: 0,
    number: 4,
  },
  {
    question: "Which is the most spoken language in the world?",
    options: ["English", "Spanish", "Mandarin", "Hindi"],
    answer: 2,
    number: 5,
  },
  {
    question: "What is the primary component of natural gas?",
    options: ["Methane", "Ethane", "Butane", "Propane"],
    answer: 0,
    number: 6,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "J.K. Rowling",
      "Mark Twain",
    ],
    answer: 1,
    number: 7,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Korea", "Thailand"],
    answer: 1,
    number: 8,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "95°C", "100°C", "110°C"],
    answer: 2,
    number: 9,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Michelangelo",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
    ],
    answer: 2,
    number: 10,
  },
  {
    question: "Which organ is responsible for pumping blood in the body?",
    options: ["Liver", "Heart", "Brain", "Lungs"],
    answer: 1,
    number: 11,
  },
  {
    question: "Which gas do plants primarily absorb for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: 2,
    number: 12,
  },
  {
    question: "What is the smallest unit of matter?",
    options: ["Molecule", "Atom", "Electron", "Proton"],
    answer: 1,
    number: 13,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mercury", "Mars", "Saturn", "Neptune"],
    answer: 1,
    number: 14,
  },
  {
    question: "Who is the author of 'The Origin of Species'?",
    options: [
      "Albert Einstein",
      "Charles Darwin",
      "Isaac Newton",
      "Galileo Galilei",
    ],
    answer: 1,
    number: 15,
  },
];

// Name Input Function
let theName;
document.getElementById("start-button").onclick = () => {
  theName = document.querySelector("#name").value;

    if (!theName) {
      let error = document.querySelector("#error")
      error.style.display = "flex"
      error.innerHTML="Please Enter your Name"
      error.style.color= "red"

  } else{
  error.style.display = "none"
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("name-input").style.display = "none";
  document.getElementById("score-summary").style.display = "none";
  document.getElementById("quiz-container").style.display = "flex";
  displayQuestion();
  }
};

// Variables to track the user's answers and the current question index

let currentQuestionIndex = 0;
let score = 0;
let timer;




// Function to display a question and its options
const displayQuestion = () => {
  const questionElement = document.getElementById("question");
  const numberElement = document.getElementById("question-number");
  const optionsElement = document.getElementById("options");

  // Clear previous options
  optionsElement.innerHTML = "";

  // Display the current question
  const currentQuestion = questions[currentQuestionIndex];
  numberElement.textContent = `Question ${currentQuestion.number}`;
  questionElement.textContent = currentQuestion.question;

  // Display the current options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsElement.appendChild(button);
  });

  // Start the timer
  startTimer(30); // Reset timer for each question
};

// Timer Function

const startTimer = (seconds) => {
  const timerElement = document.getElementById("time");
  clearInterval(timer);

  timer = setInterval(() => {
    seconds--;
    timerElement.textContent = seconds;

    if (seconds === 0) {
      clearInterval(timer);
      moveToNextQuestion();
    }
  }, 1000);
};

// Function To Check The Answer

const checkAnswer = (picked) => {
  clearInterval(timer);

  const currentQuestion = questions[currentQuestionIndex];
  const options = document.querySelectorAll("#options button");

  options.forEach((option, index) => {
    if (option.innerHTML === currentQuestion.options[currentQuestion.answer]) {
      option.style.backgroundColor = "green";
    }
    if (picked === currentQuestion.answer) {
      options[picked].style.backgroundColor = "green";
    } else {
      options[picked].style.backgroundColor = "red";
    }
    // Disable further clicks
    option.onclick = null;
  });

  if (picked === currentQuestion.answer) {
    score++;

    setTimeout(moveToNextQuestion, 1000);
  } else {
    setTimeout(moveToNextQuestion, 3000);
  }
};

// Function To Move To Next Question

const moveToNextQuestion = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showScoreSummary();
  }
};

// Function To Show Score Summary

const showScoreSummary = () => {
  document.getElementById("quiz-container").style.display = "none";
  const scoreSummary = document.getElementById("score-summary");
  scoreSummary.style.display = "flex";
  document.getElementById("score").textContent = `${theName}, You got ${score} out of ${questions.length} questions right`;
};

// restart the quiz
document.getElementById("restart-button").onclick = () => {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("score-summary").style.display = "none";
  document.getElementById("name-input").style.display = "flex";
  //displayQuestion();
};
