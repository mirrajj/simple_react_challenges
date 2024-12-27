import React, {useContext} from 'react';
import FeatureContext from './FeatureContext';

const FeatureFlag = () => {
    const {objects} = useContext(FeatureContext);
    const componentToRender = [
        {
            component : "tic_tac_toe",
            content : <div>This is tic-tac_toe component</div>
        },
        {
            component : "accordion",
            content : <div>This is accordion component</div>
        },
        {
            component : "slider",
            content : <div>This is slider component</div>
        },
        {
            component : "tabs",
            content : <div>This is tabs component</div>
        },
    ]

    const handleComponentsToRender = (componentType) => {
        return objects[componentType];
    }
  return (
    <div>
      {
        componentToRender.map(item => handleComponentsToRender(item.component) ? item.content : null)
      }
    </div>
  );
}

export default FeatureFlag;
