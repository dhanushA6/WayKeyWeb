function App() {
  const [sentences, setSentences] = React.useState([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = React.useState(-1);
  const [attempts, setAttempts] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [feedback, setFeedback] = React.useState("");
  const [timer, setTimer] = React.useState(0);
  const [showSecondImage, setShowSecondImage] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);
  const [isClickable, setIsClickable] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false); // Mute state for background music only
  const [loading, setLoading] = React.useState(true); // New state for loading assets and sentences

  const currentSentence = sentences[currentSentenceIndex];

  // Background music (only affected by mute/unmute)
  const bgMusic = new Audio("sounds/bg.mp3");
  bgMusic.loop = true; // Loop the music
  bgMusic.volume = 0.2; // Adjust volume (optional)

  const images = [
    "images/intro-img.png",
    "images/game-control.gif",
    "images/helper.gif",
    "images/helper.png",
    "images/end.png",
  ];

  const sounds = [
    "sounds/start.mp3",
    "sounds/correct.mp3",
    "sounds/wrong.mp3",
    "sounds/cheers.mp3",
  ];

  // Function to preload all assets (images and sounds)
  const preloadAssets = () => {
    const promises = [];

    // Preload images
    images.forEach((src) => {
      promises.push(
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
      );
    });

    // Preload sounds
    sounds.forEach((src) => {
      promises.push(
        new Promise((resolve) => {
          const audio = new Audio(src);
          audio.oncanplaythrough = resolve;
        })
      );
    });

    return promises;
  };

  const preloadAllData = () => {
    const assetPromises = preloadAssets();
    const sentencePromise = new Promise((resolve) => {
      if (sentences.length > 0) {
        resolve();
      } else {
        // Wait for sentences to be loaded via postMessage
        const handleMessage = (event) => {
          console.log("Message received:", event.data); // Debug log
          if (event.origin !== window.location.origin) {
            console.warn("Invalid origin:", event.origin);
            return;
          }

          const { type, data } = event.data;
          if (type === "sentencesData") {
            setSentences(data);
            window.removeEventListener("message", handleMessage); // Remove the listener once data is received
            resolve();
          }
        };
        window.addEventListener("message", handleMessage);
      }
    });

    Promise.all([...assetPromises, sentencePromise])
      .then(() => {
        setLoading(false); // Set loading to false when all assets and sentences are loaded
      })
      .catch((error) => {
        console.error("Error loading data", error);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  React.useEffect(() => {
    preloadAllData(); // Start preloading assets and sentences when the component mounts
  }, []);

  React.useEffect(() => {
    // Start background music when game starts
    if (currentSentenceIndex !== -1 && !gameOver) {
      if (!isMuted) {
        bgMusic.play();
      } else {
        bgMusic.pause();
      }
    }

    return () => {
      bgMusic.pause(); // Pause music when game ends or component unmounts
    };
  }, [currentSentenceIndex, gameOver, isMuted]);

  React.useEffect(() => {
    let timerInterval;

    if (currentSentenceIndex !== -1 && !gameOver) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [currentSentenceIndex, gameOver]);

  const playSound = (soundPath) => {
    // Always play sounds other than background music
    const audio = new Audio(soundPath);
    audio.play();
  };

  const handleSecondGifClick = () => {
    setShowSecondImage(true);
  };

  const handleStartGame = () => {
    // Play the click sound immediately when the image is clicked
    const clickSound = new Audio("sounds/start.mp3");
    clickSound.playbackRate = 2.0; // Speed it up
    clickSound.play();

    // Then move to the first sentence and reset other states
    setCurrentSentenceIndex(0); // Move to the first sentence
    setTimer(0); // Reset the timer when the game starts
    setGameOver(false); // Reset game over state
  };

  const handleWordClick = (word, position) => {
    if (!isClickable) return;

    if (attempts >= 3) {
      setFeedback("Maximum attempts reached. Moving to the next sentence.");
      setIsClickable(false); // Disable clicking
      setTimeout(() => {
        setFeedback(""); // Clear feedback
        setAttempts(0); // Reset attempts
        if (currentSentenceIndex + 1 < sentences.length) {
          setCurrentSentenceIndex(currentSentenceIndex + 1); // Move to the next sentence
        } else {
          setGameOver(true); // End the game
          playSound("sounds/cheers.mp3"); // Game finish sound
        }
        setIsClickable(true); // Re-enable clicking
      }, 2000); // Delay before moving to next sentence
      return;
    }

    if (
      word === currentSentence.errorWord &&
      position === currentSentence.errorPosition
    ) {
      playSound("sounds/correct.mp3"); // Correct answer sound
      let points = attempts === 0 ? 10 : attempts === 1 ? 5 : 2.5;
      setScore(score + points);
      setFeedback(
        `Correct! The error was '${currentSentence.errorWord}'. It should be '${currentSentence.correctWord}'. Explanation: ${currentSentence.explanation}`
      );
      setIsClickable(false);
      setTimeout(() => {
        setFeedback("");
        setAttempts(0);
        if (currentSentenceIndex + 1 < sentences.length) {
          setCurrentSentenceIndex(currentSentenceIndex + 1); // Move to the next sentence
        } else {
          setGameOver(true);
          playSound("sounds/cheers.mp3"); // Game finish sound
        }
        setIsClickable(true);
      }, 5000);
    } else {
      playSound("sounds/wrong.mp3"); // Incorrect answer sound
      setFeedback("Incorrect! Try again.");
      setAttempts(attempts + 1);
    }
  };

  const renderSentence = () => {
    const words = currentSentence.sentence.split(" ");
    return words.map((word, index) => (
      <span
        key={index}
        onClick={() => isClickable && handleWordClick(word, index + 1)}
        className={`word ${!isClickable ? "disabled" : ""}`}
      >
        {word}
      </span>
    ));
  };

  const handleMuteToggle = () => {
    // Toggle background music mute/unmute
    setIsMuted(!isMuted);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <p>Loading assets and sentences...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {currentSentenceIndex === -1 ? (
        <React.Fragment>
          <div className="image-container">
            <img
              src="images/intro-img.png"
              alt="Game Introduction"
              className="intro-image"
            />
            <img
              src="images/game-control.gif"
              alt="Start Game"
              className="start-game-gif"
              onClick={handleStartGame}
            />
            <img
              src="images/helper.gif"
              alt="Additional Control"
              className="top-left-gif"
              onClick={handleSecondGifClick}
            />
          </div>
          {showSecondImage && (
            <div className="second-image-container">
              <button
                className="close-button"
                onClick={() => setShowSecondImage(false)}
              >
                ✖
              </button>
              <img
                src="images/helper.png"
                alt="Second Image"
                className="second-image"
              />
            </div>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="game-background">
            {currentSentenceIndex < sentences.length ? (
              <div className="sentence">{renderSentence()}</div>
            ) : null}

            <div className="text-container">{feedback}</div>
            <div className="timer" style={{ fontWeight: "bold" }}>
              {timer}
            </div>

            {gameOver && (
              <div
                className="final-score-container"
                onClick={() => window.location.reload()}
              >
                <img
                  src="images/end.png"
                  alt="Final Score"
                  className="final-score-image"
                />
                <div className="final-score">
                  <p>{score}</p>
                </div>
              </div>
            )}

            {/* Mute/Unmute Icon */}
            <div className="mute-icon" onClick={handleMuteToggle}>
              <img
                src={isMuted ? "images/off.png" : "images/on.png"}
                alt={isMuted ? "Mute" : "Unmute"}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
