const { useState, useEffect } = React;

const words = [
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

const difficultyPoints = { Easy: 1, Medium: 5, Hard: 10 };

const App = () => {
  const [bgMusic, setBgMusic] = useState(null); // Track background music instance

  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [time, setTime] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isCorrectLeft, setIsCorrectLeft] = useState(true);
  const [clickedButton, setClickedButton] = useState(""); // Track clicked button
  const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status
  const [timerRunning, setTimerRunning] = useState(false); // Track whether the timer is running
  const [timerStartTime, setTimerStartTime] = useState(Date.now()); // Track the timer start time
  const [timerPausedTime, setTimerPausedTime] = useState(0); // Track the time when timer was paused
  const [swapButtons, setSwapButtons] = useState(false); // New state to manage button swapping

  const currentWord = words[currentIndex];
  const calculateScore = (difficulty, attempts) => {
    // Adjusting the divisor to prevent overly penalizing the user for small attempts
    return difficultyPoints[difficulty] / (attempts + 2);
  };
  useEffect(() => {
    setIsCorrectLeft(Math.random() > 0.5);
  }, [currentIndex]);

  useEffect(() => {
    setIsCorrectLeft(Math.random() > 0.5);
    setSwapButtons(Math.random() > 0.5); // Randomize button swapping
  }, [currentIndex]);

  // Load background music on mount
  useEffect(() => {
    const music = new Audio("/sounds/bg.wav");
    music.loop = true; // Enable looping
    music.volume = 0.5; // Adjust volume (optional)
    setBgMusic(music);

    return () => {
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    };
  }, []);
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      ) {
        // Entered fullscreen
        setIsFullscreen(true);
        if (!timerRunning) {
          setTimerStartTime(Date.now() - timerPausedTime); // Resume timer from where it was paused
          setTimerRunning(true); // Start the timer
          if (bgMusic) bgMusic.play();
        }
      } else {
        // Exited fullscreen
        setIsFullscreen(false);
        if (timerRunning) {
          setTimerPausedTime(Date.now() - timerStartTime); // Pause the timer
          setTimerRunning(false); // Stop the timer
          if (bgMusic) bgMusic.pause();
        }
      }
    };

    // Add fullscreen change event listeners
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      // Cleanup event listeners
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, [timerRunning, timerPausedTime, bgMusic]);

  // Timer logic
  useEffect(() => {
    let interval;

    if (!gameOver) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => {
          if (prevMilliseconds >= 99) {
            setTime((prevTime) => prevTime + 1);
            return 0;
          }
          return prevMilliseconds + 1;
        });
      }, 10);
    }

    return () => clearInterval(interval); // Cleanup the timer when the component unmounts or gameOver changes
  }, [gameOver]);

  const handleOptionClick = (choice, buttonType) => {
    // Play the button click sound
    const buttonClickSound = new Audio("/sounds/button.mp3");
    buttonClickSound.play();

    setAttempts(attempts + 1);

    if (choice === currentWord.correctTamil) {
      const points = calculateScore(currentWord.difficulty, attempts);
      setScore((prevScore) => prevScore + points);
      setFeedback("Correct!");
      setClickedButton("");

      if (currentIndex + 1 < words.length) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setAttempts(0);
      } else {
        setGameOver(true);
      }
    } else {
      // Play the wrong answer sound
      const wrongAnswerSound = new Audio("/sounds/oops.mp3");
      wrongAnswerSound.play();

      setFeedback("Incorrect! Try again.");
      setClickedButton(buttonType);
    }
  };

  const handlePlayAgain = () => {
    setGameOver(false);
    setScore(0);
    setTime(0);
    setMilliseconds(0);
    setCurrentIndex(0);
    setAttempts(0);
    setFeedback("");
    setIsCorrectLeft(true);
    setClickedButton(""); // Reset clicked button on play again
    setTimerPausedTime(0); // Reset paused time
    setTimerStartTime(Date.now()); // Reset the timer's start time
    setTimerRunning(false); // Ensure the timer starts fresh
    if (isFullscreen && bgMusic) {
      bgMusic.play(); // Restart music when game restarts
    }
  };

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handleOptionClick(
          isCorrectLeft ? currentWord.correctTamil : currentWord.incorrectTamil,
          "left"
        );
      }
      if (event.key === "ArrowRight") {
        handleOptionClick(
          isCorrectLeft ? currentWord.incorrectTamil : currentWord.correctTamil,
          "right"
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCorrectLeft, currentWord]);

  if (gameOver) {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-gradient-to-r from-[#e0b040] to-pink-500 text-center p-8 rounded-lg shadow-xl transform transition-all duration-500 scale-105">
          <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
            🎉 விளையாட்டு முடிந்தது | Game Over 🎉
          </h1>
          <div className="text-lg text-white mb-6 animate__animated animate__fadeIn animate__delay-1.5s">
            <p>Final Score: {score.toFixed(2)}</p>
            <p>
              Total Time: {time}.{milliseconds.toString().padStart(2, "0")}s
            </p>
          </div>
          <button
            onClick={handlePlayAgain}
            className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg font-bold text-xl shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="fixed bottom-4 left-4 bg-white text-black font-bold text-2xl w-40 h-16 flex items-center justify-center transform skew-x-12 shadow-md space-x-2">
        <img src="acc.png" alt="Icon" className="w-10 h-10 mr-4" />
        <span>
          {time}.{milliseconds.toString().padStart(2, "0")}s
        </span>
      </div>

      <div className="relative">
        {/* English Word Section */}
        <div
          className="text-center mb-10 text-black-900 rounded p-6 relative z-20"
          style={{
            fontSize: "clamp(4rem, 8vw, 12rem)",
            fontWeight: "800",
            position: "relative",
            left: "90px", // Moves the element 20px to the right
          }}
        >
          <span>{currentWord.english}</span>
        </div>

        <div className="fixed top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-[100px] flex justify-between space-x-8 w-[300px]">
          {/* Left Button */}
          <button
            className={`rounded-lg w-30 h-12 flex items-center justify-center font-bold text-2xl text-black shadow-lg ${
              clickedButton === (swapButtons ? "right" : "left")
                ? isCorrectLeft &&
                  clickedButton === (swapButtons ? "right" : "left")
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-yellow-400"
            }`}
            onClick={() =>
              handleOptionClick(
                isCorrectLeft === swapButtons
                  ? currentWord.incorrectTamil
                  : currentWord.correctTamil,
                swapButtons ? "right" : "left"
              )
            }
          >
            {swapButtons ? "வலம்" : "இடம்"}
          </button>

          {/* Right Button */}
          <button
            className={`rounded-lg w-30 h-12 flex items-center justify-center font-bold text-2xl text-black shadow-lg ${
              clickedButton === (swapButtons ? "left" : "right")
                ? !isCorrectLeft &&
                  clickedButton === (swapButtons ? "left" : "right")
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-yellow-400"
            }`}
            onClick={() =>
              handleOptionClick(
                isCorrectLeft === swapButtons
                  ? currentWord.correctTamil
                  : currentWord.incorrectTamil,
                swapButtons ? "left" : "right"
              )
            }
          >
            {swapButtons ? "இடம்" : "வலம்"}
          </button>
        </div>
      </div>
      <div
        className="fixed right-4 flex flex-col space-y-8 sm:space-y-12 lg:space-y-16"
        style={{ bottom: "calc(24vh)", transform: "translateX(1px)" }}
      >
        <span className="rounded-lg w-32 h-12 flex items-center justify-center font-black text-xl sm:text-2xl text-yellow-500 shadow-2xl p-2 relative top-10">
          {currentWord.correctTamil}
        </span>

        <span className="rounded-lg w-32 h-12 flex items-center justify-center font-black text-xl sm:text-2xl text-yellow-500 shadow-2xl p-2 translate-y-4 -translate-x-2 bottom-4">
          {currentWord.incorrectTamil}
        </span>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
