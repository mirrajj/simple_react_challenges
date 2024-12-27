import React from 'react';


    const componentsObject = {
        tic_tac_toe : false,
        accordion : true,
        slider : false,
        tabs : false,
    }
    export const FeatureComponentAPI = () => {

        const response = new Promise((resolve,reject) => {
            if(componentsObject) setTimeout(resolve(componentsObject))
                else reject("error with retrieving response");
        });
    }

    

