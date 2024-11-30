import { useState } from 'react'
import './App.css'
import {FaStar} from 'react-icons/fa';

function App() {

  const [hover, setHover] = useState(false);
  const [current,setCurrent] = useState(5);

  const renderStars = () => {

    let array = [];
    for (let i = 1 ; i <= 5 ; i++){
      if(!(i <= current)){
       array.push(<FaStar color = 'white' key={i} id = {i} onClick={(e) => { setCurrent(e.currentTarget.id)}}/>)
      }else if(hover){
        array.push(<FaStar color='yellow' key={i} id = {i} onClick={(e) => {setCurrent(e.currentTarget.id)}}/>)
      }else{
        array.push(<FaStar color='white' key={i} id = {i} onClick={(e) => {setCurrent(e.currentTarget.id);setHover(true)}}/>)
      }
    }
    console.log("run");
    return array;
  }

  return (
    <div>
      {renderStars()}
    </div>
  )
}

export default App
