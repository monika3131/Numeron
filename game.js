// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game
document.addEventListener("DOMContentLoaded", function() {
    let score = 0; // Initialize the score
  
    // Get references to the number elements
    const number1Element = document.getElementById("number1");
    const number2Element = document.getElementById("number2");
  
    // Function to generate and display random numbers
    function generateNumbers() {
      const number1 = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
      const number2 = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  
      // Display the random numbers on the screen
      number1Element.textContent = number1;
      number2Element.textContent = number2;
    }
  
    // Generate initial set of numbers
    generateNumbers();
  
    // Get a reference to the options buttons
    const greaterThanButton = document.getElementById("greater-than");
    const equalToButton = document.getElementById("equal-to");
    const lesserThanButton = document.getElementById("lesser-than");
  
    // Add event listeners to the options buttons
    greaterThanButton.addEventListener("click", function() {
      checkRelation("greater");
    });
  
    equalToButton.addEventListener("click", function() {
      checkRelation("equal");
    });
  
    lesserThanButton.addEventListener("click", function() {
      checkRelation("lesser");
    });
  
    // Function to check the relation and display the result
    function checkRelation(relation) {
      const num1 = parseInt(number1Element.textContent);
      const num2 = parseInt(number2Element.textContent);
      let result;
      if (relation === "greater") {
        result = num1 > num2 ? "Correct!" : "Wrong!";
      } else if (relation === "equal") {
        result = num1 === num2 ? "Correct!" : "Wrong!";
      } else if (relation === "lesser") {
        result = num1 < num2 ? "Correct!" : "Wrong!";
      }
      alert(result);
  
      // Update score based on the result
      if (result === "Correct!") {
        score++;
      }
  
      // Generate new set of numbers after the user responds
      generateNumbers();
    }
  
    // Timer for the game
    const timerElement = document.getElementById("timer");
    let timeLeft = 60; // Time limit for the game in seconds
    timerElement.textContent = " " + timeLeft;
  
    const timerInterval = setInterval(function() {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        // Redirect to the game over screen
        localStorage.setItem("score", score); // Store the score in localStorage
        window.location.href = "gameOver.html";
      } else {
        timerElement.textContent = " " + timeLeft;
      }
    }, 1000);
  });
  
  