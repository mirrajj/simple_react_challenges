import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [tab,setTab] = useState("Home");

  const selectNav = (e) => {
    if(e.target.innerHTML === "Home"){
      setTab("Home") 
    }else if(e.target.innerHTML === "About"){
      setTab("About")
    }else if(e.target.innerHTML === "Pages"){
      setTab("Pages")
    }
  }
  useEffect(() => {
    document.querySelectorAll('nav').forEach(nav => nav.addEventListener('click',(e) =>  selectNav(e)))

    return () => {
      document.querySelectorAll('nav').forEach(nav => nav.removeEventListener('click', (e) => selectNav(e)));
    }

  })

  if(tab === "About"){
    return (
      <>
      <nav>
        <ul className='flex justify-evenly bg-slate-200 font-sans '>
          <li className={`${tab === "Home" ? "text-cyan-700 shadow border" : "text-white"} basis-1 grow`}>Home</li>
          <li className={`${tab === "About" ? "text-cyan-700 shadow border" : "text-white"} border-x basis-1 grow border-cyan-600`}>About</li>
          <li className={`${tab === "Pages" ? "text-cyan-700 shadow border" : "text-white"} basis-1 grow`}>Pages</li>
        </ul>
      </nav>
      <div>
        <p>This is the about page</p>
      </div>
    </>
    )
  }else if(tab === "Pages"){
    return(<>
    <nav>
      <ul className='flex justify-evenly bg-slate-200 font-sans '>
        <li className={`${tab === "Home" ? "text-cyan-700 shadow border" : "text-white"} basis-1 grow`}>Home</li>
        <li className={`${tab === "About" ? "text-cyan-700 shadow border" : "text-white"} basis-1 grow`}>About</li>
        <li className={`${tab === "Pages" ? "text-cyan-700 shadow border" : "text-white"} basis-1 grow border-x border-cyan-600`}>Pages</li>
      </ul>
    </nav>
    <div>
      <p>Welcome to Pages</p>
    </div>
  </>)
  }else return (
    <>
      <nav>
        <ul className='flex justify-evenly bg-slate-200 font-sans '>
          <li className={`${tab === "Home" ? "text-cyan-700 shadow border" : "text-white"} basis-1 border-x border-cyan-600 grow`}>Home</li>
          <li className={`${tab === "About" ? "text-cyan-700 shadow border" : "text-white"} basis-1 grow border-cyan-600`}>About</li>
          <li className={`${tab === "Pages" ? "text-cyan-700 shadow border" : "text-white"} basis-1 grow`}>Pages</li>
        </ul>
      </nav>
      <div>
        <p>Welcome to the home page</p>
      </div>
    </>
  )
}

export default App
