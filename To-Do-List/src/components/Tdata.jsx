import React from 'react';

const Tdata = ({ value, index }) => {
  return (
    <tr>
        <td>{index+1}</td>
      <td>{value.work}</td>
      <td>{value.Time}</td>
      <td><button className="hr-btn btn btn-danger">Delete</button></td>
    </tr>
  );
}

export default Tdata;
