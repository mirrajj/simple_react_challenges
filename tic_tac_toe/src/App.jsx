import { useState,useEffect } from 'react'
import './App.css'
import Square from './components/Square'

function App() {
  const [roundArray,setRoundArray] = useState([]);
  const [crossArray,setCrossArray] = useState([]);
  const [playerType,setPlayerType] = useState(false);

  const getPlayerInput = (e) => {
    if(e.target.innerHTML) return
    if(!playerType){
      console.log("o")
      e.target.innerHTML = "o";
      const newRoundArray = [...roundArray,parseInt(e.target.id)]
      setRoundArray(newRoundArray);
      setPlayerType(!playerType);
      if(checkAnswer(newRoundArray)) alert("player o won!");
    }else if(playerType){
      console.log("x")
      e.target.innerHTML = "x";
      const newCrossArray = [...crossArray,parseInt(e.target.id)]
      setCrossArray(newCrossArray);
      setPlayerType(!playerType);
      if(checkAnswer(newCrossArray)) alert("player x won!");
    }
  }

  const checkAnswer = (symbolArray) => {
    const correctPatterns = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    const truthValues = correctPatterns.map(sequence => sequence.map(number => symbolArray.includes(number)));
    const foundPattern = truthValues.find(subArrays => subArrays.toString() === 'true,true,true');
    if (foundPattern) return true;
  }

  // checkAnswer([2,3,4,5,7,8,9]);

  
  useEffect(() => {
    const handleClick = (e) => getPlayerInput(e);
    const container = document.querySelector('.square_container');
    container.addEventListener("click",handleClick)
    // setPlayerType(!playerType);
    return () => {container.removeEventListener("click",handleClick)}

  },[playerType])
  // console.log("test");

  const squareArray = [];

  for(let i = 1; i <= 9 ; i++){
    squareArray.push(<Square key={i} id={i} />)
  }
  

  return (
    <div className='square_container size-96 flex flex-wrap gap-0'>
      {
        console.log(crossArray,roundArray)
        
      }
      {
        squareArray.map(square => square)
      }
    </div>
  )
}

export default App
