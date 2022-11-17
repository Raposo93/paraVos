import React, { useState } from 'react'
import sendreset from "../../img/sendreset.png"
import '../Style/recuperarContraseña.css'


export const RecuperarContraseña = () => {

    let [inputValue, setInputValue] = useState("")
    const [display, setDisplay] = useState(false)

  return (
    <div className='w-100 container d-flex flex-column justify-content-center align-items-center my-5'>
        <h2 className='recuperar-texts text-uppercase text-center'>¿olvicaste tu contraseña?</h2>
        <div className='d-none recuperar-enviado h-25 d-flex justify-content-around align-items-center flex-wrap m-5'>
            {/* usar display */}
            <p className='recuperar-texts fw-semibold'>¡Listo! Te enviamos un email a {inputValue}</p>
            <img className='recuperar-img mx-3' src={sendreset} alt="error" width={100}></img>
        </div>
        <p className='recuperar-texts m-4 fw-semibold w-100 text-center'>Vamos a enviarte un email para que puedas cambiar tu contraseña</p>
        <label className='recuperar-texts w-50 fw-semibold'>Email</label>
        <input className='recuperar-mail w-50' placeholder='Ingresa tu Email' onChange={(event) => setInputValue(event.target.value)}></input>
        <button type='submit' className='recuperar-btn text-uppercase w-50 fw-bold p-2 m-3' onClick={("")}>enviar email</button> 
        {/* falta funcionalidad */}
    </div>
  )
}
