import React from 'react';

const Table2 = ({index,item,modNumber}) => {
  return (
    <tr>
      <td>{parseInt(index)+1}</td>
      <td>{item}</td>
      <td>{modNumber}</td>
    </tr>
  );
}

export default Table2;
