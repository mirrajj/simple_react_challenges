import { useState,useEffect } from 'react'
import './App.css'
import {FaPlus,FaMinus} from 'react-icons/fa'

function App() {
  const [element,setElement] = useState(null);

  useEffect(() => {
    const icon = document.querySelector('.icon');
  },[])

  const toggleView = (e) => {
    e.currentTarget.classList.toggle('hidden');
    if(e.currentTarget.previousSibling.classList.contains('hidden')){
      e.currentTarget.previousSibling.classList.toggle('hidden');
    }else{
      e.currentTarget.parentElement.children[3].classList.toggle('hidden');
    }
    if(e.currentTarget.nextSibling.classList.contains('hidden')){
      e.currentTarget.nextSibling.classList.toggle('hidden');
    }
  
  }

  return (
    <div className='flex items-stretch h-screen'>
      <ul className='grow'>

        <li className='flex justify-between flex-wrap'>
          <p className='basis-1/2'>User</p>
          <FaMinus className='self-center basis-1/2 cursor-pointer hidden icon' onClick={(e) => {toggleView(e)}}/>
          <FaPlus className='self-center basis-1/2 cursor-pointer' onClick={(e) => {toggleView(e)}}/>

          <ul className='hidden w-full'>
            <li className='flex justify-between flex-wrap'>
              <p className='basis-1/2'>User</p>
              <FaMinus className='self-center basis-1/2 cursor-pointer hidden' onClick={(e) => {toggleView(e)}}/>
              <FaPlus className='self-center basis-1/2 cursor-pointer' onClick={(e) => {toggleView(e)}}/>
              <ul className='hidden'>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </li>
          </ul>

        </li>
        <li className='flex justify-between flex-wrap'>
          <p className='basis-1/2'>Settings</p>
          <FaMinus className='self-center basis-1/2 cursor-pointer hidden icon' onClick={(e) => {toggleView(e)}}/>
          <FaPlus className='self-center  basis-1/2 cursor-pointer' onClick={(e) => {toggleView(e)}} />
          <ul className='hidden'>
            <li>change  password</li>
            <li>change username</li>
            <li>update profile</li>
          </ul>
        </li>
        <li className='flex justify-between flex-wrap'>
          <p className='basis-1/2'>Account</p>
          <FaMinus className='self-center basis-1/2 cursor-pointer hidden icon' onClick={(e) => {toggleView(e)}}/>
          <FaPlus className='self-center basis-1/2 cursor-pointer' onClick={(e) => {toggleView(e)}}/>
          <ul className='hidden'>
            <li>add account</li>
            <li>remove account</li>
          </ul>
        </li>
      
      </ul>
      <div className='grow-2'>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  )
}

export default App
