// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the play button
    const playButton = document.getElementById("play-button");
  
    // Add event listener to the play button
    playButton.addEventListener("click", function() {
      // Redirect to the game page
      window.location.href = "./game.html"; // Replace "game.html" with the actual path to your game page
    });
  });
  