import React, { useRef, useEffect, useState } from 'react';
import './Pong.css'; 
import { saveHighScore, fetchHighScores } from './firebaseConfig'; 

const Pong = () => {
  const canvasRef = useRef(null);
  const paddle1Y = useRef(200);
  const paddle2Y = useRef(200); 
  const ball = useRef({ x: 300, y: 200, speedX: 3, speedY: 3 });
  const [playerScore, setPlayerScore] = useState(0); 
  const [aiScore, setAiScore] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false); 
  const [showGame, setShowGame] = useState(false); 
  const [username, setUsername] = useState('');
  const [highScores, setHighScores] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [showHighScoresPopup, setShowHighScoresPopup] = useState(false); 

  
  useEffect(() => {
    const getScores = async () => {
      const scores = await fetchHighScores();
      setHighScores(scores);
    };
    getScores();
  }, []);

  useEffect(() => {
    if (!isGameRunning || gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fps = 60;

    const updateGame = () => {
      if (ball.current.y < paddle2Y.current + 50 && paddle2Y.current > 0) {
        paddle2Y.current -= 3;
      } else if (ball.current.y > paddle2Y.current + 50 && paddle2Y.current < 300) {
        paddle2Y.current += 3;
      }

      ball.current.x += ball.current.speedX;
      ball.current.y += ball.current.speedY;

      if (ball.current.y <= 0 || ball.current.y >= 400) {
        ball.current.speedY = -ball.current.speedY;
      }

      if (
        (ball.current.x <= 20 &&
          ball.current.y >= paddle1Y.current &&
          ball.current.y <= paddle1Y.current + 100) ||
        (ball.current.x >= 580 &&
          ball.current.y >= paddle2Y.current &&
          ball.current.y <= paddle2Y.current + 100)
      ) {
        ball.current.speedX = -ball.current.speedX;
        ball.current.speedX *= 1.1;
        ball.current.speedY *= 1.1;
      }

      if (ball.current.x < 0) {
        setGameOver(true);
        setAiScore((prev) => prev + 1);
        resetBall();
        handleStopGame(); 
      } else if (ball.current.x > 600) {
        setPlayerScore((prev) => prev + 1);
        resetBall();
      }
    };

    const renderGame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.fillRect(10, paddle1Y.current, 10, 100);
      ctx.fillRect(580, paddle2Y.current, 10, 100);

      ctx.beginPath();
      ctx.arc(ball.current.x, ball.current.y, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'white';
      ctx.font = '20px Orbitron, sans-serif';
      ctx.fillText(`Player: ${playerScore}`, 250, 30);
    };

    const resetBall = () => {
      ball.current.x = 300;
      ball.current.y = 200;
      ball.current.speedX = 3 * (Math.random() > 0.5 ? 1 : -1);
      ball.current.speedY = 3 * (Math.random() > 0.5 ? 1 : -1);
    };

    const gameLoop = () => {
      updateGame();
      renderGame();
    };

    const intervalId = setInterval(gameLoop, 1000 / fps);

    return () => clearInterval(intervalId);
  }, [isGameRunning, playerScore, aiScore, gameOver]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      paddle1Y.current = Math.max(0, Math.min(300, mouseY - 50));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleStartGame = () => {
    if (!username) {
      setAlertMessage('Please enter your username!');
      return;
    }

    setPlayerScore(0);
    setAiScore(0);
    setIsGameRunning(true);
    setShowGame(true);
    setGameOver(false);
    ball.current = { x: 300, y: 200, speedX: 3, speedY: 3 };
    setAlertMessage('');
  };

  const handleStopGame = async () => {
    setIsGameRunning(false);
    setShowGame(false);
    if (playerScore > 0 && username) {
      await saveHighScore(username, playerScore);
      const updatedScores = await fetchHighScores();
      setHighScores(updatedScores);
    }
  };

  const handleReplay = () => {
    setGameOver(false);
    setPlayerScore(0);
    setAiScore(0);
    setIsGameRunning(true);
    setShowGame(true);
  };

  const handleViewHighScores = () => {
    setShowHighScoresPopup(true); 
  };

  const closeHighScoresPopup = () => {
    setShowHighScoresPopup(false); 
  };

  return (
    <div className="game-layout">
      {!showGame && !gameOver && (
        <div className="start-screen">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="username-input"
            />
          </div>
          <button className="neon-button" onClick={handleStartGame}>
            Play Ping Pong
          </button>
          {alertMessage && <div className="alert-message">{alertMessage}</div>}
        </div>
      )}

      {showGame && !gameOver && (
        <div className="game-container">
          <div className="side-bar blue-bar"></div>
          <div className="game-overlay">
            <h1 className="text-4xl md:text-5xl font-bold neon-text m-4">Ping Pong</h1>
            <canvas ref={canvasRef} width={600} height={400} className="pong-canvas mb-4" />
            <button className="neon-button stop-button" onClick={handleStopGame}>
              Stop Game
            </button>
          </div>
          <div className="side-bar red-bar"></div>
        </div>
      )}

      {gameOver && (
        <div className="game-over mt-2">
          <h2 className="font-bold ">Game Over!</h2>
          <p className="font-bold text-[#FF006E] ">Your Score: {playerScore}</p>
          <button className="neon-button " onClick={handleReplay}>
            Play Again
          </button>
        </div>
      )}

      
      {showHighScoresPopup && (
        <div className="high-scores-popup">
          <div className="popup-content">
            <h2>Top 3 High Scores</h2>
            <ol>
              {highScores.slice(0, 3).map((score, index) => (
                <li key={index}>
                  <strong>{score.username}</strong>: {score.score}
                </li>
              ))}
            </ol>
            <button className="close-button" onClick={closeHighScoresPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pong;
