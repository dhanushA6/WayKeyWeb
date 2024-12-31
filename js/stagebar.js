let currentGameScript = null; // Track the currently loaded game script

function openTool(toolName) {
  $("#toolArea").empty(); // Clear the existing content
  const cat = toolName.split("-");

  if (cat[0] === "book") {
    openBook(cat[1]);
  } else if (cat[0] === "game") {
    openGame(cat[1]); // Switch games dynamically
  } else {
    toolName = cat[1];
  }
}

function openBook(bookName) {
  alert(bookName);
}

function openGame(gameName) {
  if (!gameName) {
    console.error("Game name is undefined.");
    return;
  }

  window.gameParam = gameName; // Set the global parameter

  // Remove any existing game script
  if (currentGameScript) {
    document.body.removeChild(currentGameScript);
    currentGameScript = null;
  }

  // Load the new game script
  currentGameScript = document.createElement("script");
  currentGameScript.src = `js/games/games.js`;
  currentGameScript.onload = () => {
    console.log(`Game ${gameName} loaded`);
    initGame(); // Initialize the game
  };
  document.body.appendChild(currentGameScript);
}

// Attach event listeners for game-switching buttons
document.getElementById("switchMemoryGame").onclick = () =>
  openTool("game-memoryGame");
document.getElementById("switchKuzhappi").onclick = () =>
  openTool("game-Kuzhappi");
document.getElementById("switchOrupizhai2").onclick = () =>
  openTool("game-orupizhai");
