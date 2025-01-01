const soundEffect = new Audio("audio/click.mp3"); // Path to your sound file
const bgMusic = new Audio("audio/bg.mp3"); // Path to your background music
const switchSound = new Audio("audio/switch.mp3"); // Path to your switch sound
const cheersSound = new Audio("audio/cheers.mp3"); // Path to your cheers sound
bgMusic.loop = true; // Ensure the background music loops

const playSound = () => {
  soundEffect.currentTime = 0; // Ensure sound starts from the beginning
  soundEffect.play(); // Play the sound immediately
};

const playSwitchSound = () => {
  switchSound.currentTime = 0; // Ensure sound starts from the beginning
  switchSound.play(); // Play the switch sound immediately
};

function App() {
  const [verbs, setVerbs] = React.useState([]); // State to hold the verbs data
  const [currentVerbIndex, setCurrentVerbIndex] = React.useState(-1); // -1 for intro screen
  const [score, setScore] = React.useState(0);
  const [feedback, setFeedback] = React.useState("");
  const [showSecondImage, setShowSecondImage] = React.useState(false);
  const [timer, setTimer] = React.useState(0); // Timer state for milliseconds
  const [isGameActive, setIsGameActive] = React.useState(false); // To control game timer
  const [isMuted, setIsMuted] = React.useState(false); // To control background music mute/unmute
  const [gameOver, setGameOver] = React.useState(false); // Track if game is over

  // Control the background music only after the game starts
  const handleStartGame = () => {
    setCurrentVerbIndex(0); // Start the game
    setIsGameActive(true); // Activate the timer when the game starts
    bgMusic.play(); // Play background music when the game starts
  };

  const toggleMute = () => {
    playSwitchSound(); // Play the switch sound
    if (isMuted) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
    setIsMuted(!isMuted); // Toggle mute state
  };

  const handleSecondGifClick = () => {
    setShowSecondImage(true); // Placeholder logic for second GIF click
  };

  // Display the current verb
  const displayVerb = () => {
    if (currentVerbIndex < verbs.length) {
      return verbs[currentVerbIndex].verb;
    } else {
      return null; // No more verbs to display
    }
  };

  // Classify the selected tense
  const classifyTense = (selectedTense) => {
    if (currentVerbIndex >= verbs.length) return;

    const currentVerb = verbs[currentVerbIndex];
    let points = 0;
    let penalty = 0;

    if (selectedTense === currentVerb.tense) {
      points = currentVerb.complexity === "easy" ? 3 : 7;
      setFeedback(`✅ சரியான பதில்! புள்ளிகள் +${points}`);
    } else {
      penalty = currentVerb.complexity === "easy" ? -5 : -2;
      setFeedback(`❌ தவறான பதில்! புள்ளிகள் ${penalty}`);
    }

    setScore(score + points + penalty);
    setCurrentVerbIndex(currentVerbIndex + 1);

    // Clear feedback after 2 seconds and move to game over logic if it's the last verb
    setTimeout(() => {
      setFeedback(""); // Clear feedback
      if (currentVerbIndex >= verbs.length - 1) {
        setGameOver(true); // Trigger game over if it's the last verb
      }
    }, 20); // Wait for 2 seconds before hiding feedback
  };

  React.useEffect(() => {
    if (gameOver) {
      setIsGameActive(false); // Stop timer when the game ends
      bgMusic.pause(); // Stop background music
      cheersSound.play(); // Play cheers sound
    }
  }, [gameOver]);

  React.useEffect(() => {
    let timerInterval;
    if (isGameActive) {
      timerInterval = setInterval(() => {
        setTimer((prev) => prev + 1); // Increment the timer by 1 ms
      }, 100); // Update every 100 milliseconds
    }
    return () => clearInterval(timerInterval); // Cleanup on component unmount
  }, [isGameActive]);

  // Listen for messages from the parent
  React.useEffect(() => {
    const handleMessages = (event) => {
      if (event.origin !== window.location.origin) {
        console.warn("Invalid origin:", event.origin);
        return;
      }

      const { type, data } = event.data;
      if (type === "verbsData") {
        console.log("Verb data received:", data);
        setVerbs(data); // Update verbs state with the received data
      }
    };

    window.addEventListener("message", handleMessages);

    return () => {
      window.removeEventListener("message", handleMessages);
    };
  }, []);

  return (
    <div className="app">
      {currentVerbIndex === -1 ? (
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
          </div>
        </React.Fragment>
      ) : gameOver ? (
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
      ) : (
        <React.Fragment>
          <div className="game-background">
            <div className="verb-display">{displayVerb()}</div>

            <div className="buttons">
              <img
                src="images/arrow.png"
                alt="Past"
                className="past-icon"
                onClick={() => {
                  playSound(); // Play sound when clicked
                  classifyTense("past");
                }}
              />
              <img
                src="images/arrow.png"
                alt="Present"
                className="present-icon"
                onClick={() => {
                  playSound(); // Play sound when clicked
                  classifyTense("present");
                }}
              />
              <img
                src="images/arrow.png"
                alt="Future"
                className="future-icon"
                onClick={() => {
                  playSound(); // Play sound when clicked
                  classifyTense("future");
                }}
              />
            </div>

            <div className="timer">
              {` ${Math.floor(timer / 10)}.${timer % 10}`}
            </div>
            <img
              src="images/helper.gif"
              alt="Additional Control"
              className="top-left-gif"
              onClick={handleSecondGifClick}
            />
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
            <div className="mute-button">
              <img
                src={isMuted ? "images/off.png" : "images/on.png"}
                alt="Mute/Unmute Background Music"
                onClick={toggleMute}
                className="mute-icon"
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
