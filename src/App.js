import './App.css';
// import Board from './board/Board';
import Players from './board/Players';
import React,{useState} from 'react';
function App() {
  const [start,setStart] = useState(false);

  const gemeStart=()=>{
    setStart(true);
  }
  return (
    <>
    {
      start ? '': <button onClick={gemeStart}>Start Game</button>
    }
    
    {
      start ? <Players /> : ''
    }
    </>
  );
}

export default App;
