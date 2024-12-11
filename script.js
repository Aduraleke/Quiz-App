// Declaring an Array Of Questions

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language",
      "None of the above",
    ],
    answer: 0,
    number: 1,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    answer: 0,
    number: 2,
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<h1>", "<header>", "<head>", "<h6>"],
    answer: 0,
    number: 3,
  },
  {
    question: "Which attribute specifies the URL of an image in HTML?",
    options: ["src", "alt", "href", "url"],
    answer: 0,
    number: 4,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Syntax",
      "None of the above",
    ],
    answer: 0,
    number: 5,
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["background-color", "bgcolor", "color", "background"],
    answer: 0,
    number: 6,
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    answer: 0,
    number: 7,
  },
  {
    question: "How can you make text bold in HTML?",
    options: ["<b>", "<strong>", "Both <b> and <strong>", "None of these"],
    answer: 2,
    number: 8,
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: 0,
    number: 9,
  },
  {
    question: "Which tag is used to define a table in HTML?",
    options: ["<table>", "<tab>", "<tr>", "<td>"],
    answer: 0,
    number: 10,
  },
  {
    question:
      "Which attribute is used to provide alternative text for an image in HTML?",
    options: ["alt", "title", "src", "text"],
    answer: 0,
    number: 11,
  },
  {
    question: "What is the correct syntax for adding a comment in HTML?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    answer: 0,
    number: 12,
  },
  {
    question: "Which tag is used to create a dropdown list in HTML?",
    options: ["<select>", "<option>", "<dropdown>", "<list>"],
    answer: 0,
    number: 13,
  },
  {
    question: "Which property is used to align text in CSS?",
    options: ["text-align", "align", "text-style", "alignment"],
    answer: 0,
    number: 14,
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    options: ["<br>", "<break>", "<lb>", "<line>"],
    answer: 0,
    number: 15,
  },
  {
    question: "Which CSS property is used to change the font of an element?",
    options: ["font-family", "font-type", "text-font", "font-style"],
    answer: 0,
    number: 16,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "css", "class", "inline"],
    answer: 0,
    number: 17,
  },
  {
    question: "Which HTML element is used to specify a footer for a document?",
    options: ["<footer>", "<foot>", "<bottom>", "<section>"],
    answer: 0,
    number: 18,
  },
  {
    question:
      "Which property is used to add space inside the border of an element in CSS?",
    options: ["padding", "margin", "border", "spacing"],
    answer: 0,
    number: 19,
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<important>", "<b>", "<i>"],
    answer: 0,
    number: 20,
  },
  {
    question:
      "What is the correct HTML element for inserting a line horizontally?",
    options: ["<hr>", "<line>", "<break>", "<horizontal>"],
    answer: 0,
    number: 21,
  },
  {
    question: "Which CSS property changes the color of text?",
    options: ["color", "text-color", "font-color", "foreground"],
    answer: 0,
    number: 22,
  },
  {
    question: "Which tag is used to create a numbered list in HTML?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: 0,
    number: 23,
  },
  {
    question: "Which CSS property is used to change the width of an element?",
    options: ["width", "max-width", "min-width", "size"],
    answer: 0,
    number: 24,
  },
  {
    question: "Which HTML element is used to specify a header for a document?",
    options: ["<header>", "<head>", "<h1>", "<title>"],
    answer: 0,
    number: 25,
  },
  {
    question: "What is the correct way to link an external CSS file in HTML?",
    options: [
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'>",
      "<css link='style.css'>",
      "<stylesheet href='style.css'>",
    ],
    answer: 0,
    number: 26,
  },
  {
    question:
      "Which property is used to set the background image of an element in CSS?",
    options: ["background-image", "background", "bg-image", "image"],
    answer: 0,
    number: 27,
  },
  {
    question: "Which attribute is used to open a link in a new tab in HTML?",
    options: ["target='_blank'", "newtab='_yes'", "open='_new'", "tab='_new'"],
    answer: 0,
    number: 28,
  },
  {
    question:
      "Which property is used to control the spacing between lines of text in CSS?",
    options: ["line-height", "letter-spacing", "text-spacing", "text-line"],
    answer: 0,
    number: 29,
  },
  {
    question: "Which tag is used to embed a video in HTML?",
    options: ["<video>", "<media>", "<embed>", "<movie>"],
    answer: 0,
    number: 30,
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
