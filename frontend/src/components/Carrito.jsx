import React from 'react'
import './Style/carrito.css'
import { FaShoppingCart } from 'react-icons/fa'
import { CartItemList } from './CartItemList'


export const Carrito = () => {
  return (
    <div className='carrito-fondo w-100 h-100'>
        <div className='carrito-container d-flex flex-column justify-content-around align-items-center'>
            <div className='carrito-title w-100 h-25 d-flex justify-content-center align-items-center'>
                <h3 className='d-inline'>carrito</h3> <FaShoppingCart className='mx-2' size={'2.5em'}/>
            </div>

            <div className='h-75'>
                <div>
                    <CartItemList/>
                </div>
            </div>

            <div className='carrito-buyData d-flex w-100 flex-column'>
                <div className='d-flex w-100 justify-content-between'>
                    <p className='mx-2'>Total sin envio:</p>
                    <p className='mx-2'>$1000</p>
                </div>
                <button className='btn btn-outline-dark me-2 text-uppercase m-2'>realizar pedido</button>
            </div>
        </div>
    </div>
  )
}
