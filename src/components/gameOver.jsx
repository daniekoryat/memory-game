import Button from '@mui/material/Button';


export default function GameOver(props) {
    const winnerDecleration = props.isWinner ? 'you won!!' : 'you lost.'
    const points = props.score === 1 ? 'point' : 'points'
    document.body.style.backgroundColor = 'white';
    return (
        <div className="center-div">
            <h1>Game Over</h1>
            <h2>{winnerDecleration}</h2>
            <h3>You scored {props.score} {points}!</h3>
            <Button variant="text" onClick={() => props.resetGame(false)}>Play Again</Button>
        </div>
    )
}