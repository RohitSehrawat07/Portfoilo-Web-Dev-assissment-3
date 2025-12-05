const quizQuestions = [
  {
    question: "What is the capital of India?",
    answer: "delhi",
  },
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "mars",
  },
  {
    question: "What is 5 + 7?",
    answer: "12",
  },
  {
    question: "Who is the father of computers?",
    answer: "charles babbage",
  }
];

// Function that runs the quiz
function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    // If user clicks cancel
    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  alert(
    "Quiz completed! Your final score is " +
    score +
    " out of " +
    quizQuestions.length
  );
}

// Start the quiz
runQuiz();
