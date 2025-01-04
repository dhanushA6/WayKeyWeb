let tileDistributions = [];
let currentDistributionIndex = 0; // Tracks the current tilesDistribution
let firstTile, secondTile;
let lockBoard = false;
let matchedPairs = 0;
let startTime; // Track time at the start of the game

// Listen for messages from the parent
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    console.warn("Invalid origin:", event.origin);
    return;
  }

  const { type, data } = event.data;

  if (type === "tileData") {
    tileDistributions = data;
    setupGame();
  }
});

// Function to set up the game for the current tilesDistribution
function setupGame() {
  if (!tileDistributions || tileDistributions.length === 0) {
    console.error("tileDistributions data is not available.");
    return;
  }

  if (currentDistributionIndex >= tileDistributions.length) {
    endGame();
    return;
  }

  const currentDistribution = tileDistributions[currentDistributionIndex];
  const tiles = currentDistribution.tilesDistribution.concat(
    currentDistribution.tilesDistribution
  ); // Duplicate for matching pairs
  tiles.sort(() => 0.5 - Math.random()); // Shuffle tiles

  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = ""; // Clear the board
  gameBoard.style.display = "grid"; // Show the game board
  gameBoard.style.opacity = "1"; // Fade in

  // Reset game variables
  matchedPairs = 0;
  [firstTile, secondTile] = [null, null];
  lockBoard = false;

  // Set start time for this tilesDistribution
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

  // Check if all pairs are matched
  const tilesInCurrentDistribution =
    tileDistributions[currentDistributionIndex].tilesDistribution.length;
  if (matchedPairs === tilesInCurrentDistribution) {
    // Move to the next tilesDistribution
    currentDistributionIndex++;
    setupGame(); // Setup next distribution
    return;
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

function endGame() {
  const endTime = new Date().getTime();
  const totalTimeTaken = Math.floor((endTime - startTime) / 1000); // in seconds

  // Send the result data to the parent window
  window.parent.postMessage(
    {
      type: "gameComplete",
      data: {
        timeTaken: totalTimeTaken,
        points: 20 * tileDistributions.length, // Points for all completed distributions
      },
    },
    "*"
  );

  // Show end message
  showToast("Congratulations! You've completed all levels of the game.");
  const gameBoard = document.getElementById("game-board");
  gameBoard.style.display = "none"; // Hide game board
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
