import { useState } from 'react'
import './App.css'
import PopUp from './PopUp';

function App() {
  const [popup, setPopUp] = useState(false);
  const handleClick = () => {
    setPopUp(!popup);
  }

  return (
    <div className='bg-black text-white px-20 py-16'>
      <h1 className='text-white font-light font-sans text-4xl'>Hello World!</h1>
      <button className='px-8 py-2 border border-lime-900 rounded-lg shadow-lime-900 shadow-lg my-8 hover:scale-110 transition-all' onClick = {() => handleClick()} >Open Popup</button>
      
      <PopUp popup={popup} setPopUp={setPopUp} />
    </div>
  )
}

export default App
