import React,{useEffect,useState} from 'react';

const useWindowResize = () => {
    const [windowSize,setWindowSize] = useState({
        width : 0,
        height : 0
       })
      
       useEffect(() => {
        const handleResize = () => {
          console.log("window resized!");
          setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight
          })
        }
        window.addEventListener('resize',handleResize);
      
        return () => window.removeEventListener('resize',handleResize);
       },[])
  return (
    windowSize
  );
}

export default useWindowResize;
