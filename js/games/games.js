const VERBS_DATA = [
  { verb: "படித்தான்", tense: "past", complexity: "easy" },
  { verb: "கொண்டிருக்கிறான்", tense: "present", complexity: "hard" },
  { verb: "யெழுவான்", tense: "future", complexity: "easy" },
  { verb: "வெண்டுதக்குள்ளு", tense: "future", complexity: "hard" },
  { verb: "கீடுக்கிறான்", tense: "present", complexity: "hard" },
];

const TILE_DISTRIBUTIONS = [
  {
    tilesDistributionId: "TD009",
    level: 10,
    tilesDistribution: ["லே", "ரே", "வே", "நே", "பே", "கே", "சே", "தே"],
    complexity: "High",
  },
  {
    tilesDistributionId: "TD010",
    level: 9,
    tilesDistribution: ["டி", "பி", "மி", "யி", "ழி", "சி", "கி", "தி"],
    complexity: "Low",
  },
];

const LEVELS_DATA = {
  easy: [
    { word: "கோவில்", scrambled: ["வி", "ல்", "கோ"] },
    { word: "வாழை", scrambled: ["ழை", "வா"] },
    { word: "நிலா", scrambled: ["நி", "லா"] },
  ],
  medium: [
    { word: "இடியாப்பம்", scrambled: ["ப்", "ம்", "டி", "யா", "இ", "ப"] },
    { word: "மணிக்கட்டை", scrambled: ["ணி", "டை", "க்", "ம", "ட்", "க"] },
    { word: "பள்ளி", scrambled: ["ளி", "ள்", "ப"] },
  ],
  hard: [
    { word: "சிந்தனைகள்", scrambled: ["ந்", "கள்", "த", "சி", "னை"] },
    { word: "தொகுதிகள்", scrambled: ["கு", "கள்", "தொ", "தி"] },
    { word: "அரசு", scrambled: ["சு", "அ", "ர"] },
  ],
};

const SENTENCES_DATA = [
  {
    id: 4,
    sentence: "மறத்தில் கிளி பழத்தைக் கொத்தியது",
    errorWord: "மறத்தில்",
    correctWord: "மரத்தில்",
    errorPosition: 1,
    explanation:
      "மரத்தில் என்பது சரி. மறம் என்பதற்கு வீரம் என்பது பொருளாகும்.மறத்தில் என்பது பிழை.",
  },
  {
    id: 7,
    sentence: "நாய் வேகமாக ஒடியது",
    errorWord: "ஒடியது",
    correctWord: "ஓடியது",
    errorPosition: 3,
    explanation:
      "ஓடியது என்பது சரி. ஒடி என்பதற்கு முறி என்பது பொருளாகும். ஆதலால்,ஒடியது என்பது பிழை.",
  },
  {
    id: 10,
    sentence: "மழை பெய்ததும் குலத்தில் தண்ணீர் பெருகியது",
    errorWord: "குலத்தில்",
    correctWord: "குளத்தில் ",
    errorPosition: 3,
    explanation:
      "குளத்தில் என்பது சரி. குலத்தில் என்பதற்கு இனத்தில் என்று பொருளாகும். ஆதலால் குலத்தில் என்பது பிழை ",
  },
];

const WORDS_DATA = [
  {
    english: "Bird",
    correctTamil: "பறவை",
    incorrectTamil: "பரவை",
    difficulty: "Easy",
  },
  {
    english: "Sun",
    correctTamil: "சூரியன்",
    incorrectTamil: "சூரியம்",
    difficulty: "Easy",
  },
  {
    english: "Apple",
    correctTamil: "ஆப்பிள்",
    incorrectTamil: "ஆபிள்",
    difficulty: "Medium",
  },
  {
    english: "Cloud",
    correctTamil: "மேகம்",
    incorrectTamil: "மேகம",
    difficulty: "Medium",
  },
  {
    english: "Elephant",
    correctTamil: "யானை",
    incorrectTamil: "யனாய்",
    difficulty: "Hard",
  },
  {
    english: "River",
    correctTamil: "ஆறு",
    incorrectTamil: "அறு",
    difficulty: "Hard",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  initGame();
});

function initGame() {
  const paramValue = window.gameParam;

  if (!paramValue) {
    console.error("Game parameter is undefined.");
    return;
  }

  // Insert the iframe without modifying existing buttons
  document.getElementById("toolArea").innerHTML = `
    <iframe 
        id="bookframe" 
        src="games/${paramValue}/index.html" 
        title="Games" 
        width="100%" 
        height="550" 
        style="border:none; overflow:hidden;" 
        scrolling="no">
    </iframe>

    <div id="gameButtons" style="text-align: center; margin-top: 10px;">
        <button id="switchMemoryGame" class="game-switch-btn">Memory Game</button>
        <button id="switchKuzhappi" class="game-switch-btn">Kuzhappi</button>
        <button id="switchOrupizhai2" class="game-switch-btn">Orupizhai</button>
        <button id="switchVerbGame" class="game-switch-btn">Mukkala</button>
        <button id="switchIdavalam" class="game-switch-btn">Idavalam</button>
    </div>`;

  // Attach event listeners for game switch buttons
  document.getElementById("switchMemoryGame").onclick = () =>
    openTool("game-memoryGame");
  document.getElementById("switchKuzhappi").onclick = () =>
    openTool("game-Kuzhappi");
  document.getElementById("switchOrupizhai2").onclick = () =>
    openTool("game-orupizhai2");
  document.getElementById("switchVerbGame").onclick = () =>
    openTool("game-Mukkala");
  document.getElementById("switchIdavalam").onclick = () =>
    openTool("game-Idavalam");

  const iframe = document.getElementById("bookframe");
  iframe.onload = () => {
    // Send each data set individually
    iframe.contentWindow.postMessage(
      { type: "tileData", data: TILE_DISTRIBUTIONS },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "levelsData", data: LEVELS_DATA },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "sentencesData", data: SENTENCES_DATA },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "verbsData", data: VERBS_DATA },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "wordsData", data: WORDS_DATA },
      "*"
    );
  };

  // Select buttons AFTER inserting iframe
  const nextButton = document.querySelector(".btn-next");
  const checkAnswerButton = document.querySelector(".check-answer");

  if (nextButton) {
    nextButton.disabled = true;
    nextButton.style.display = "none";
  }

  if (checkAnswerButton) {
    checkAnswerButton.disabled = true;
    checkAnswerButton.style.backgroundColor = "#d3d3d3"; // Light gray (Disabled)
    checkAnswerButton.style.color = "#808080";
    checkAnswerButton.style.cursor = "not-allowed";
  }

  let levelCompleteData = null; // Store game data to show after clicking the check button

  // Listen for messages from the iframe
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) {
      console.warn("Invalid origin:", event.origin);
      return;
    }

    const { type, data } = event.data;

    if (type === "levelComplete") {
      levelCompleteData = data; // Store the received game data

      console.log(
        `Level ${data.level} completed in ${data.timeTaken} seconds with ${data.points} points.`
      );

      // Enable the "Check Answer" button
      if (checkAnswerButton) {
        checkAnswerButton.disabled = false;
        checkAnswerButton.style.backgroundColor = "#28a745"; // Green (Enabled)
        checkAnswerButton.style.color = "white";
        checkAnswerButton.style.cursor = "pointer";
      }
    }
  });

  // Event listener for "Check Answer" button
  if (checkAnswerButton) {
    checkAnswerButton.addEventListener("click", function () {
      if (levelCompleteData) {
        // Show the alert with game data
        alert(
          `Level ${levelCompleteData.level} completed!\nTime: ${levelCompleteData.timeTaken} seconds\nPoints: ${levelCompleteData.points}`
        );

        // Enable and display the "Next" button
        if (nextButton) {
          nextButton.disabled = false;
          nextButton.style.display = "inline-block";
          nextButton.style.backgroundColor = "#007bff"; // Blue
          nextButton.style.color = "white";
          nextButton.style.cursor = "pointer";
        }
      }
    });
  }

  // Event listener for "Next" button
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      // Reset everything
      nextButton.disabled = true;
      nextButton.style.display = "none";
      if (checkAnswerButton) {
        checkAnswerButton.disabled = true;
        checkAnswerButton.style.backgroundColor = "#d3d3d3"; // Reset to gray
        checkAnswerButton.style.color = "#808080";
        checkAnswerButton.style.cursor = "not-allowed";
      }
      levelCompleteData = null; // Clear stored game data
    });
  }
}
