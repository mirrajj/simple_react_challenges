import {useState} from 'react';
import './App.css'

function App() {
  const styles = {
    align : "left-2",
    state : "On",
    position : "right-px",
    background : "bg-gray-500"
  }
  const [state,setState] = useState(styles);
  const toggleSwitch = () => {
    setState({
      align : `${state.align === "left-2" ? "right-2" : "left-2"}`,
      state : `${state.state === "On" ? "Off" : "On"}`,
      position : `${state.position === "right-px" ? "left-px" : "right-px"}`,
      background : `${state.background === "bg-gray-500" ? "bg-green-500" : "bg-gray-500"}`
    })
  }

  return (
      <div className = {`max-w-24 h-8 border border-sky-600 rounded-full relative p-1 flex items-center cursor-pointer ${state.background}`} onClick={toggleSwitch}>
        <p className={`absolute ${state.align} text-white`}>{state.state}</p>
        <span className={`w-1 h-1 rounded-full shadow-inner px-4 py-4  transition-all duration-500 ease-linear absolute  ${state.position} border bg-slate-100`}></span>
      </div>
  )
}

export default App
