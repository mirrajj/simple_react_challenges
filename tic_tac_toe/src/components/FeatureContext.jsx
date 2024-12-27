import React,{ createContext,useEffect,useState } from 'react';
import FeatureComponentAPI from './FeatureComponentAPI';


    const FeatureContext = createContext();


    export const  ContextWrapper = ({children}) => {
        const [objects,setObjects] = useState(null);

        useEffect(async () => {
            try{
                const response = await FeatureComponentAPI;
                setObjects(response);

            }catch(error){
                console.log(error);
            }
        },[])

        return(
            <FeatureContext.Provider value={{objects}}>
                {children}
            </FeatureContext.Provider>

        )

}

export default FeatureContext;
