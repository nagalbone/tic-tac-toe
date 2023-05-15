import React,{useState} from 'react';
import Board from './Board';

const Players = () => {
    const [player1,setPlayer1] = useState('');
    const [player2,setPlayer2] = useState('');
    const [flag,setFlag] = useState(false);

    const pl1 = (e)=>{
        const value = e.target.value;
        setPlayer1(value);
    } 

    const pl2 = (e)=>{
        const value = e.target.value;
        setPlayer2(value);
    } 

    const start = ()=>{
        setFlag(true);
    }
  return (
    <>
    
    {
        flag ? '' : 
        <>
        <span>Player 1:</span><input name="player1" value={player1} onChange={pl1}/><br/>
        <span>Player 2:</span><input name="player2" value={player2} onChange={pl2}/><br/>
        <button onClick={start}>Start</button>
        </>
    }

    {
        flag ? <Board player1={player1} player2={player2}/> : ''
    }
    </>
  )
}

export default Players;