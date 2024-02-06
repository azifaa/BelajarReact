import React from 'react'

function Event() {

    const handleClick = () => {
       alert("Berhasil!!!");
    };

  return (
    <div>
        <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Event