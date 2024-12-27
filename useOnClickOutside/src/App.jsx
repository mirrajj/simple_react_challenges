import { useState,useRef } from 'react'
import useOnClickOutside from './assets/useOnClickOutside';


function App() {
  const [showContent,setShowContent] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref,() => setShowContent(false));


  return (
    <div className='box'>
    {
      showContent ?
      <div ref = {ref}>
        <h1>OnClickOutside</h1>
        <p>Click outside the box to hide the content or click inside to do nothing</p>
      </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
    }
    
    </div>
    
  )
}

export default App
