import React,{useState} from 'react';
import Square from './Square';

const Board = (props) => {
  const [state,setState] = useState(Array(9).fill(null));
  const [isXset,setIsXset] = useState(true);

  const checkWinner = ()=>{
    const posibility = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(var winners of posibility)
    {
     const [a,b,c] = winners;
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c])
      {
        return state[a];
      }
    }
    return false;
  }

  const isWinner = checkWinner();

  function handleClick(index)
  {
    if(state[index] !== null)
    {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXset ? 'X' : 'O';
    setState(copyState);
    setIsXset(!isXset);
  }

  const reset = ()=>{
    setState(Array(9).fill(null));
  } 
  
  return (
    <>
    {
      isWinner ? <><h1>Player {isWinner === 'X' ? props.player1 : props.player2} is Winner</h1><button onClick={reset}>Play Again</button></>: 
      <>
      <div className='board-container'>
      <h1>Player {isXset ? props.player1 : props.player2 } Turn</h1>
      <div className='board-row'>
      <Square onClick={()=>handleClick(0)} value={state[0]}/>
      <Square onClick={()=>handleClick(1)} value={state[1]}/>
      <Square onClick={()=>handleClick(2)} value={state[2]}/>
      </div>
      <div className='board-row'>
      <Square onClick={()=>handleClick(3)} value={state[3]}/>
      <Square onClick={()=>handleClick(4)} value={state[4]}/>
      <Square onClick={()=>handleClick(5)} value={state[5]}/>
      </div>
      <div className='board-row'>
      <Square onClick={()=>handleClick(6)} value={state[6]}/>
      <Square onClick={()=>handleClick(7)} value={state[7]}/>
      <Square onClick={()=>handleClick(8)} value={state[8]}/>
      </div>
    </div>
      </>
    }
    
    </>
  )
}

export default Board;