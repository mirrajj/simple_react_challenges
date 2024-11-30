import React,{useEffect} from 'react';

const RawMaterialSelect = ({setRawMaterial}) => {

  return (
    <div className='basis-1/2 font-normal border py-3 shadow'>
      <select name="" id="material" className='w-full text-center text-sky-500 outline-none' onChange={(e) => setRawMaterial(e.target.value)}>
        <option value="pineapple">Pineapple</option>
        <option value="mango">Mango</option>
        <option value="banana">Banana</option>
        <option value="coconut">Coconut</option>
        <option value="papaya">Papaya</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default RawMaterialSelect;
