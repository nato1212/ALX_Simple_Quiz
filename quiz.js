function checkAnswer() {
  const correctAnswer = "4";
  const checkedAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;
  const feedback = document.getElementById("feedback");
  if (checkedAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

const submit_answer = document.getElementById("submit-answer");
submit_answer.addEventListener("click", checkAnswer);
