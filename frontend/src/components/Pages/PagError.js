import React from 'react'
import Error from "../../img/404.png"
import '../Style/pagError.css'
import { Link } from 'react-router-dom'

export const PagError = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100'>                  
        <img className='w-50' src={Error} alt="error"></img>
        <button className='btn btn-outline-success text-uppercase m-2'> 
            <Link className='btn-volver p-4 text-decoration-none fw-bold' to="/">Volver</Link> 
        </button>
    </div>
  )
}

