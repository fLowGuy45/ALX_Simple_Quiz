// Function to check the quiz answer
function checkAnswer() {
    // Correct answer
    var correctAnswer = "4";

    // Get user answer
    var selectedOption = document.querySelector('input[name="quiz"]:checked');
    var userAnswer = selectedOption ? selectedOption.value : null;

    var feedback = document.getElementById("feedback");

    // Compare and give feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

// Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
