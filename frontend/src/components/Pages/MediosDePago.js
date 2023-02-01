
import React from 'react';
import compras from '../../img/tuto_compras.png'
import '../Style/mediosdepago.css'
import { Link } from "react-router-dom"
import credit_card from '../../img/Credit_card.png'

export const MediosDePago = () => {
  return (
    <div>
      <div>
        <h2 className='h2_medios-de-pago'>MEDIOS DE PAGO</h2>
        <div>
          <img className='img-credit_card' src={credit_card}></img>
        </div>
        <p className='text-pagos'> Podrás abonar tus compras por transferencia, mercado pago y  efectivo. </p>
        <br></br>
        <p id='p_segundo' className='text-pagos'> En el ultimo paso de la compra, será redirigido al whatsapp de la empresa, donde podrá coordinar el pago. </p>
      </div>
      <Link to="/"> <button className='boton_mp'> VOLVER</button> </Link>
    </div>
  )
}
