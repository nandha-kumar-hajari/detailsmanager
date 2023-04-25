import React from 'react';
import "./MainDetails.css"

const MainDetails = (props) => {
  return (
    <div className='container-1'>
      <div className='card-container-1'>
        <h1 className='heading'>{props.name}</h1>
        <p className='para-1'>{props.address}</p>
        <p className="para-2">{props.mob}</p>
      </div>
    </div>
  );
}

export default MainDetails;
