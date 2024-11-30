import React from 'react';

const SubTotalSelect = ({setSubTotal}) => {
  return (
      <div className='basis-1/2 font-normal border py-3 shadow'>
          <select name="" id="" className='w-full text-center text-sky-500 outline-none' onChange={(e) => setSubTotal(e.currentTarget.value)}>
              <option value="5">get total for every 5 entries</option>
              <option value="10">get total for every 10 entries</option>
              <option value="15">get total for every 15 entries</option>
              <option value="20">get total for every 20 entries</option>
          </select>
      </div>
  );
}

export default SubTotalSelect;
