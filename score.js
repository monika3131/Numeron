// Iteration 5: Store the player score and display it on the game over screen
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve score from local storage
    const score = localStorage.getItem("score");
    // Display the score on the game over screen
    const scoreElement = document.getElementById("score-board"); // Corrected id
    scoreElement.textContent = score; // No need to append "Your score: ", as it's already included in the HTML
});
