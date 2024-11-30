import React from 'react';

const Table = ({index,item,weight,subTotal}) => {
  return (
    <tr className='font-bold text-slate-500'>
      <td className='border border-sky-400'>{parseInt(index)+1}</td>
      <td className='border border-sky-400'>{item}</td>
      <td className='border border-sky-400 bg-sky-200'>{(index +1)%subTotal === 0 ? weight.slice(0,index+1).reduce((total,item) => (total += item),0).toFixed(3) : ""}</td>
    </tr>
  );
}

export default Table;
