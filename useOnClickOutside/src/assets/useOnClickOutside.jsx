import React,{useEffect} from 'react';

const useOnClickOutside = (ref,callback) => {

    useEffect(() => {
        const handleClick  = (e) => {
            // console.log(e.target);
            // console.log(ref);
            if(!ref.current || e.target == ref) return;
            callback(e);
        }
        document.addEventListener("mousedown",handleClick)
        document.addEventListener("touchstart",handleClick)
        
        return () => {
            document.removeEventListener("mousedown",handleClick);
            document.removeEventListener("touchstart",handleClick)
        };

    },[callback,ref])

}

export default useOnClickOutside;
