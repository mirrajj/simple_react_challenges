import { useState,useEffect } from 'react'
import './App.css'

function App() {

  // let imagesArray;
  //go through the images element and assign classes current, prev, and next

  const slider = (items) => {

    items = items.map(item => {
      if(item.classList.contains('prev')){
        item.classList.add('hidden');
      }else if(item.classList.contains("hidden")){
        item.classList.remove("hidden");
      }
      else{
        item.classList.remove('next');
      }
      return item;
    })

    var id;
    const foundElement = items.find((item,index) => {
      id = index;
      return item.classList.contains('current')});

      console.log(id);

    foundElement.classList.remove('current');
    foundElement.classList.add('prev');
    items[id+1].classList.add('current');//if indexOf(items[id+1] == -1 then items[0].classList.add("current"));
    items[id+2].classList.add('next');

    for(let n = id + 3; n <= ((items.length - 1)) ; n++){
      console.log(items[n]);
      items[n].classList.add("hidden");
    }
  }
  const selectElements = () => {
    return Array.from(document.querySelectorAll('img'));
  }
  // useEffect(() => {
  //   selectElements();
  //   // console.log(imagesArray);
  // },[])


  return (
    <>
    <div className='w-60 h-60 flex relative border p-2'>
      <img className = "current w-60 h-60" src="/images/Designer.jpeg" alt="" />
      <img className = "w-60 h-60" src="/images/image1.jpg" alt="" />
      <img className = "w-60 h-60" src="/images/image2.jpg" alt="" />
      <img className = "w-60 h-60" src="/images/image3.jpg" alt="" />
      <img className = "w-60 h-60" src="/images/image4.jpg" alt="" />
      <img className = "w-60 h-60" src="/images/image5.jpg" alt="" />
      <img className = "w-60 h-60" src="/images/slippers_grp.jpeg" alt="" />
      <img className = "w-60 h-60" src="/images/slippers2.jpeg" alt="" />
    </div>
    <button className='w-16 h-8 rounded-full border' onClick={() => {slider(selectElements())}}>Next</button>
    <button className='w-16 h-8 rounded-full border'>Prev</button>
    </>
  )
}

export default App
