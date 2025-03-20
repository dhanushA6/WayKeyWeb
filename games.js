document.addEventListener("DOMContentLoaded", function () {
  initGame();
});

function initGame() {
  const paramValue = window.gameParam;

  if (!paramValue) {
    console.error("Game parameter is undefined.");
    return;
  }
  document.getElementById("toolArea").innerHTML = `
      <iframe 
          id="bookframe" 
          src="games/${paramValue}/index.html" 
          title="Games" 
          width="100%" 
          height="550" 
          style="border:none; overflow:hidden;" 
          scrolling="no">
      </iframe>`;
  // Select the next button
  const nextButton = document.querySelector(".btn-next");

  // Remove the check-answer button from the DOM
  const checkAnswerButton = document.querySelector(".check-answer");
  if (checkAnswerButton) {
    checkAnswerButton.remove();
  }

  // Initially hide the next button
  if (nextButton) {
    nextButton.disabled = true;
    nextButton.style.display = "none";
  }

  let levelCompleteData = null;

  // Listen for messages from the game iframe
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) {
      console.warn("Invalid origin:", event.origin);
      return;
    }

    const { type, data } = event.data;

    if (type === "levelComplete") {
      levelCompleteData = data;
      console.log(
        `Level ${data.level} completed in ${data.timeTaken} seconds with ${data.points} points.`
      );

      // Enable and show the next button when the game score is received
      if (nextButton) {
        nextButton.disabled = false;
        nextButton.style.display = "inline-block";
        nextButton.style.backgroundColor = "#007bff";
        nextButton.style.color = "white";
        nextButton.style.cursor = "pointer";
      }
    }
  });

  // Handle next button click
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      if (levelCompleteData) {
        alert(
          `Level ${levelCompleteData.level} completed!\nTime: ${levelCompleteData.timeTaken} seconds\nPoints: ${levelCompleteData.points}`
        );
      }

      // Hide the next button again until the next level completion
      nextButton.disabled = true;
      nextButton.style.display = "none";
      levelCompleteData = null;
    });
  }
}
