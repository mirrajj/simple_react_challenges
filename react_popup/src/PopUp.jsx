import React from 'react';

const PopUp = ({popup,setPopUp}) => {
  return (
      <div className={`border border-stone-400 px-5 py-14 rounded-3xl backdrop-blur-3xl relative  ${popup ? "scale-100 transition-[scale]": "scale-50 hidden transition-[scale]"}`}>
          <p className='absolute text-2xl top-2 right-5 border border-white rounded-full text-center h-10 w-10 cursor-pointer shadow-white shadow-sm' onClick={() => setPopUp(false)}>x</p>
          <div>
              <p>React Popup Component</p>
          </div>
      </div>
  );
}

export default PopUp;
