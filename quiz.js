function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";

  // Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Check if the user selected an option
  if (!selectedOption) {
    document.getElementById('feedback').textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Compare and give feedback
  const feedback = document.getElementById('feedback');
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
