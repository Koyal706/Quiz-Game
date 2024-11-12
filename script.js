const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "b",
  },
];

const answerEles = document.querySelectorAll(".answer");
const questionElm = document.getElementById("question");
const optionInputs = document.querySelectorAll(".option");
const submitBtn = document.getElementById("submit");

let index = 0;
let score = 0;

// Load the initial question
const loadQuestion = () => {
  if (index === questions.length) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  questionElm.innerText = ` ${index + 1}) ${data.que}`;
  optionInputs[0].innerText = data.a;
  optionInputs[1].innerText = data.b;
  optionInputs[2].innerText = data.c;
  optionInputs[3].innerText = data.d;
};

// Reset the selection
const reset = () => {
  answerEles.forEach((input) => (input.checked = false));
};

// Get the selected answer
const getAnswer = () => {
  let ans;
  answerEles.forEach((input) => {
    if (input.checked) {
      ans = input.id; // Assuming each input has an ID corresponding to "a", "b", "c", "d"
    }
  });
  return ans;
};

// Submit quiz function
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    score++;
  }
  index++;
  loadQuestion();
};

// End quiz function
const endQuiz = () => {
  document.getElementById("quiz").innerHTML = `
    <h3>Your Score: ${score}/${questions.length}</h3>
    <button onclick="location.reload()">Restart</button>
  `;
};

// Load the first question initially
loadQuestion();

// Add an event listener to the submit button
submitBtn.addEventListener("click", submitQuiz);

