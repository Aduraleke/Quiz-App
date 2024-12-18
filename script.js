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
    question:
      "Which attribute is used to specify a unique identifier for an HTML element?",
    options: ["class", "id", "name", "role"],
    answer: 1,
    number: 2,
  },
  {
    question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
    options: [
      "To provide the image's dimensions",
      "To describe the image if it cannot be displayed",
      "To set the alignment of the image",
      "To preload the image",
    ],
    answer: 1,
    number: 3,
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<hyperlink>", "<href>"],
    answer: 1,
    number: 4,
  },
  {
    question:
      "Which attribute is used to specify the destination URL in a hyperlink?",
    options: ["src", "href", "link", "target"],
    answer: 1,
    number: 5,
  },
  {
    question: "How do you add a comment in HTML?",
    options: ["<!-- Comment -->", "// Comment", "/* Comment */", "# Comment"],
    answer: 0,
    number: 6,
  },
  {
    question: "What is the purpose of the `title` attribute?",
    options: [
      "To set the title of the document",
      "To display a tooltip when hovering over an element",
      "To define a heading for an element",
      "To provide the page title",
    ],
    answer: 1,
    number: 7,
  },
  {
    question: "Which tag is used to display an image?",
    options: ["<img>", "<picture>", "<image>", "<media>"],
    answer: 0,
    number: 8,
  },
  {
    question: "What is the correct syntax for specifying inline CSS styles?",
    options: [
      "<style>color: red;</style>",
      'style="color: red;"',
      'css="color: red;"',
      'class="color: red;"',
    ],
    answer: 1,
    number: 9,
  },
  {
    question: "Which attribute is used to open a link in a new tab?",
    options: ["rel", "href", 'target="_blank"', "new"],
    answer: 2,
    number: 10,
  },
  {
    question: "Which tag is used to define the largest heading?",
    options: ["<heading>", "<h6>", "<title>", "<h1>"],
    answer: 3,
    number: 11,
  },
  {
    question: "What does the `lang` attribute do?",
    options: [
      "Defines the primary language of the page or element",
      "Sets the text direction",
      "Specifies the type of language used in the code",
      "None of the above",
    ],
    answer: 0,
    number: 12,
  },
  {
    question: "Which tag is used to create an unordered list?",
    options: ["<ol>", "<ul>", "<list>", "<item>"],
    answer: 1,
    number: 13,
  },
  {
    question: "How can you make a numbered list in HTML?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    answer: 1,
    number: 14,
  },
  {
    question: "Which attribute specifies a tooltip for an element?",
    options: ["alt", "title", "tooltip", "hint"],
    answer: 1,
    number: 15,
  },
  {
    question:
      "What is the purpose of the `placeholder` attribute in an input field?",
    options: [
      "To label the input field",
      "To display a short hint inside the field",
      "To validate the input field",
      "To add a default value",
    ],
    answer: 1,
    number: 16,
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<row>", "<tr>", "<td>", "<th>"],
    answer: 1,
    number: 17,
  },
  {
    question: "What does the `<br>` tag do?",
    options: [
      "Adds a horizontal line",
      "Breaks text into a new line",
      "Boldens the text",
      "Ends a paragraph",
    ],
    answer: 1,
    number: 18,
  },
  {
    question: "Which attribute is used to make a text input field mandatory?",
    options: ["required", "mandatory", "validate", "must"],
    answer: 0,
    number: 19,
  },
  {
    question: "What is the default type of an `<input>` element?",
    options: ["text", "button", "password", "checkbox"],
    answer: 0,
    number: 20,
  },
  {
    question: "Which tag is used to define the body of an HTML document?",
    options: ["<html>", "<body>", "<main>", "<div>"],
    answer: 1,
    number: 21,
  },
  {
    question: "What is the purpose of the `meta` tag?",
    options: [
      "To link to external resources",
      "To provide metadata about the HTML document",
      "To add styles to the document",
      "To create a navigation menu",
    ],
    answer: 1,
    number: 22,
  },
  {
    question: "Which attribute is used to define inline JavaScript code?",
    options: ["onload", "onclick", "script", "style"],
    answer: 1,
    number: 23,
  },
  {
    question: "What does the `viewport` meta tag do?",
    options: [
      "Sets the background color",
      "Defines responsive design settings",
      "Specifies the page title",
      "Adds a tooltip",
    ],
    answer: 1,
    number: 24,
  },
  {
    question: "Which tag is used to define a dropdown list?",
    options: ["<select>", "<dropdown>", "<list>", "<option>"],
    answer: 0,
    number: 25,
  },
  {
    question: "Which attribute is used to group radio buttons together?",
    options: ["id", "class", "name", "group"],
    answer: 2,
    number: 26,
  },
  {
    question: "Which tag is used to define emphasized text?",
    options: ["<strong>", "<em>", "<italic>", "<mark>"],
    answer: 1,
    number: 27,
  },
  {
    question: "What is the purpose of the `colspan` attribute in a table?",
    options: [
      "To merge rows",
      "To merge columns",
      "To add borders",
      "To align text",
    ],
    answer: 1,
    number: 28,
  },
  {
    question: "Which tag is used to define an ordered list?",
    options: ["<list>", "<ol>", "<ul>", "<li>"],
    answer: 1,
    number: 29,
  },
  {
    question:
      "Which attribute is used to specify the character encoding for an HTML document?",
    options: ["charset", "encoding", "code", "meta"],
    answer: 0,
    number: 30,
  },
  {
    question: "What is the purpose of the `<iframe>` tag?",
    options: [
      "To create a frame around content",
      "To embed another HTML document",
      "To define inline styles",
      "To create a popup window",
    ],
    answer: 1,
    number: 31,
  },
  {
    question: "Which tag is used to define a section of navigation links?",
    options: ["<nav>", "<section>", "<header>", "<footer>"],
    answer: 0,
    number: 32,
  },
  {
    question: "Which tag is used to define bold text?",
    options: ["<b>", "<strong>", "<bold>", "<em>"],
    answer: 0,
    number: 33,
  },
  {
    question: "What does the `src` attribute specify in an `<img>` tag?",
    options: [
      "The image's alternative text",
      "The image's file path",
      "The image's title",
      "The image's alignment",
    ],
    answer: 1,
    number: 34,
  },
  {
    question: "Which tag is used to define a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<section>", "<nav>"],
    answer: 0,
    number: 35,
  },
  {
    question: "Which tag is used to define a caption for a table?",
    options: ["<caption>", "<title>", "<summary>", "<header>"],
    answer: 0,
    number: 36,
  },
  {
    question: "What is the purpose of the `<audio>` tag?",
    options: [
      "To play audio files",
      "To add background music",
      "To define a speaker",
      "To embed a playlist",
    ],
    answer: 0,
    number: 37,
  },
  {
    question:
      "Which attribute is used to specify a default value for an input field?",
    options: ["value", "default", "placeholder", "name"],
    answer: 0,
    number: 38,
  },
  {
    question: "Which tag is used to define a video in HTML?",
    options: ["<media>", "<video>", "<source>", "<embed>"],
    answer: 1,
    number: 39,
  },
  {
    question: "Which attribute is used to set the width of an HTML element?",
    options: ["size", "width", "length", "dimension"],
    answer: 1,
    number: 40,
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
