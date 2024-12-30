// script.js

let tileDistributions = [];
let currentLevel = 1;
let firstTile, secondTile;
let lockBoard = false;
let matchedPairs = 0;
let startTime; // Track time at the start of each level

// Listen for messages from the parent
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    console.warn("Invalid origin:", event.origin);
    return;
  }

  const { type, data } = event.data;

  if (type === "tileData") {
    tileDistributions = data;
    setupGame(currentLevel);
  }
});

// Function to set up game with selected tiles
function setupGame(level) {
  if (!tileDistributions || tileDistributions.length === 0) {
    console.error("tileDistributions data is not yet available.");
    return; // Do not proceed if tileDistributions is not ready
  }
  console.log("tileDistributions data is available.");
  console.log("Game Board Element:", document.getElementById("game-board"));

  const selectedData = tileDistributions.find((data) => data.level === level);
  if (!selectedData) {
    console.error(`No data found for level ${level}`);
    return;
  }

  const tiles = selectedData.tilesDistribution.concat(
    selectedData.tilesDistribution
  ); // Duplicate for matching pairs
  tiles.sort(() => 0.5 - Math.random()); // Shuffle tiles

  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = ""; // Clear board
  gameBoard.style.display = "grid"; // Show the game board
  gameBoard.style.opacity = "1"; // Fade in

  // Reset game variables
  matchedPairs = 0;
  [firstTile, secondTile] = [null, null];
  lockBoard = false;

  // Set start time for level
  startTime = new Date().getTime();

  // Create and display tiles
  tiles.forEach((tile) => {
    const tileElement = document.createElement("div");
    tileElement.classList.add("tile");
    tileElement.dataset.tile = tile;
    tileElement.innerText = "?"; // Hidden initially
    tileElement.addEventListener("click", handleTileClick);
    gameBoard.appendChild(tileElement);
  });
}

// Tile click handler
function handleTileClick() {
  if (lockBoard || this === firstTile) return;

  this.innerText = this.dataset.tile;

  if (!firstTile) {
    firstTile = this;
  } else {
    secondTile = this;
    checkForMatch();
  }
}

// Match checking
function checkForMatch() {
  lockBoard = true;

  if (firstTile.dataset.tile === secondTile.dataset.tile) {
    disableTiles();
  } else {
    unflipTiles();
  }
}

function disableTiles() {
  firstTile.classList.add("matched");
  secondTile.classList.add("matched");
  firstTile.removeEventListener("click", handleTileClick);
  secondTile.removeEventListener("click", handleTileClick);

  matchedPairs++;
  const tilesInLevel = tileDistributions.find(
    (data) => data.level === currentLevel
  ).tilesDistribution.length;

  if (matchedPairs === tilesInLevel) {
    // Level completed
    const endTime = new Date().getTime();
    const timeTaken = Math.floor((endTime - startTime) / 1000); // in seconds
    const points = 20; // Fixed points for single level

    // Send the result data to the parent window
    window.parent.postMessage(
      {
        type: "gameComplete",
        data: {
          level: currentLevel,
          timeTaken: timeTaken,
          points: points,
        },
      },
      "*"
    );

    // Show completion message
    showToast("Congratulations! You've completed the game.");
    return; // End the game
  }

  resetBoard();
}

function unflipTiles() {
  setTimeout(() => {
    firstTile.innerText = "?";
    secondTile.innerText = "?";
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstTile, secondTile] = [null, null];
  lockBoard = false;
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
