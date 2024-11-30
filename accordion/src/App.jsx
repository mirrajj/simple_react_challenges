import { useState,useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const selectElement = () => {
      const spanElements = document.querySelectorAll('span');
      return Array.from(spanElements);
    }
    const selectParent = () => {
      const paragraphElements = document.querySelectorAll('p');
      return Array.from(paragraphElements);
    }
    const addEvent = (elements) => elements.forEach(element => element.addEventListener("click",(e) => {handleClick(e,nodeList)}));
    
    const handleClick = (e,elements) => {
      // console.log(e.target.children[1]);
      elements.forEach(item => {
        item.classList.remove("active"); 
      })
      e.target.children[1].classList.add("active");
      console.log(e.target.children[1]);
    }

    const nodeList = selectElement();
    const paragraphs = selectParent();
    // console.log(nodeList);
    addEvent(paragraphs);

    return (() => nodeList.forEach(element => element.removeEventListener('click',(e) => handleClick(e,nodeList))));

  },[])
  


  return (
    <>
      <p className='border-y bg-gray-300 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur, cum a natus distinctio id.<br/>
        <span className='readmore active'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est repellendus consequatur voluptas vero quisquam totam veniam labore voluptatibus nesciunt?</span>
      </p>
      <p className='border-y text-left shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur, cum a natus distinctio id.<br/>
        <span className='readmore'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est repellendus consequatur voluptas vero quisquam totam veniam labore voluptatibus nesciunt?</span>
      </p>
      <p className='border-y bg-gray-300 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur, cum a natus distinctio id.<br/>
        <span className='readmore'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est repellendus consequatur voluptas vero quisquam totam veniam labore voluptatibus nesciunt?</span>
      </p>
      <p className='border-y text-left shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur, cum a natus distinctio id.<br/>
        <span className='readmore'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est repellendus consequatur voluptas vero quisquam totam veniam labore voluptatibus nesciunt?</span>
      </p>
    </>
  )
}

export default App
