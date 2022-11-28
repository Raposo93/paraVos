import React from 'react'

export const Producto = () => {
  return (
    <div>
      <div className='w-100 d-flex justify-content-around align-items-center m-3'>
        <div className='w-50'>
          <div>
            <img></img>
          </div>
        </div>
        <div className='w-50 d-flex flex-column'>
          <h2></h2>
          <p></p>
          <p></p>
          <label>cantidad</label>
          <input className='w-50'></input>
          <button className='w-50'></button>
        </div>        
      </div>
    </div>
  )
}
