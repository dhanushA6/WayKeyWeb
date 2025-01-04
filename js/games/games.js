function initGame() {
  const paramValue = window.gameParam;

  if (!paramValue) {
    console.error("Game parameter is undefined.");
    return;
  }

  // Insert the iframe with the correct game path
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

  // Re-attach event listeners for buttons
  document.getElementById("switchMemoryGame").onclick = () =>
    openTool("game-memoryGame");
  document.getElementById("switchKuzhappi").onclick = () =>
    openTool("game-Kuzhappi");
  document.getElementById("switchOrupizhai2").onclick = () =>
    openTool("game-orupizhai2");
  document.getElementById("switchVerbGame").onclick = () =>
    openTool("game-Mukkala");
  document.getElementById("switchIdavalam").onclick = () =>
    openTool("game-Idavalam"); // Switch to the new game Idavalam

  const iframe = document.getElementById("bookframe");
  iframe.onload = () => {
    // Send updated data to the iframe after it loads
    iframe.contentWindow.postMessage(
      { type: "tileData", data: getTileDistributions() },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "levelsData", data: getLevelsData() },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "sentencesData", data: getSentences() },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "verbsData", data: getVerbsData() },
      "*"
    );
    iframe.contentWindow.postMessage(
      { type: "wordsData", data: getWordsData() }, 
      "*"
    );
  };

  // Listen for messages from the iframe
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) {
      console.warn("Invalid origin:", event.origin);
      return;
    }

    const { type, data } = event.data;
    if (type === "levelComplete") {
      const { level, timeTaken, points } = data;
      console.log(
        `Level ${level} completed in ${timeTaken} seconds with ${points} points.`
      );
      showToast(
        `Level ${level} completed! Time: ${timeTaken} seconds, Points: ${points}`
      );
    }
  });
}

// New function to retrieve verb data
function getVerbsData() {
  return [
    { verb: "படித்தான்", tense: "past", complexity: "easy" },
    { verb: "கொண்டிருக்கிறான்", tense: "present", complexity: "hard" },
    { verb: "யெழுவான்", tense: "future", complexity: "easy" },
    { verb: "வெண்டுதக்குள்ளு", tense: "future", complexity: "hard" },
    { verb: "கீடுக்கிறான்", tense: "present", complexity: "hard" },
  ];
}

// Data retrieval functions
function getTileDistributions() {
  return [
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
}

function getLevelsData() {
  return {
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
}

function getSentences() {
  return [
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
}

// New function to retrieve words data for Idavalam
function getWordsData() {
  return [
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
}

// Toast function to show messages
function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  document.body.appendChild(toast);

  // Show the toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 500); // Clean up after animation
  }, 3000);
}

// Call initGame to trigger the game setup
initGame();
