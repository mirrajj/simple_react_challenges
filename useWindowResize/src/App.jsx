import { useState,useEffect } from 'react'
import useWindowResize from './assets/UseWindowResize'


function App() {
const {width, height} = useWindowResize();

  return (
    <>
      <h1>This is a use window resize Hook</h1>
      <p>width : {width}</p>
      <p>height : {height}</p>
    </>
  )
}

export default App
