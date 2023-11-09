import Board from './components/gameboard.jsx'
import Header from './components/header.jsx';
import GameOver from './components/gameOver.jsx';
import characters from './utils/data';
import { useState, useCallback, useEffect } from 'react'
import './App.css';


export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [idClickes, setIdClickes] = useState([]);

  useEffect(() => {
    idClickes.length === characters.length ? setGameOver(true) : null;
    setHighScore(score > highScore ? score : highScore);
  }, [idClickes, score, highScore])

  const handleClick = useCallback((id) => {
    if (idClickes.includes(id)) {
      setGameOver(true);
    } else {
      setScore((pervScore) => pervScore + 1);
      setIdClickes((prevIds) => [...prevIds, id]);
    }
  }, [score, highScore, gameOver, idClickes, characters]);

  const resetGame = (restHighScore) => {
    setScore(0);
    setIdClickes([]);
    setGameOver(false);
    restHighScore ? setHighScore(0) : null;
  }
  document.body.style.backgroundColor = 'dodgerblue';
  return gameOver ? <GameOver resetGame={resetGame} winnerDecleration={score === characters.length -1} score={score}/> : 
     (
      <>
        <Header score={score} highScore={highScore} restGame={resetGame}  />
        <Board characters={characters} handleClick={handleClick} />
      </>
    );
  

}

