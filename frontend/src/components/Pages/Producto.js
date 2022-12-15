import React, { useState } from 'react'
import '../Style/producto.css'
import { useSelector, useDispatch } from 'react-redux'


export const Producto = () => {

  const [quantity, setQuantity] = useState(1)

  const getProduct = useSelector(state => state.product);
  const showProduct = getProduct[0];
  
  return (
    <div>
      <div className='w-100 h-100 d-flex product-container'>

        <div className='d-flex flex-column justify-content-center h-100 product-imgs'>

            <div className='product-img d-flex flex-column justify-content-center align-items-center w-100'>
              <img className='w-50 h-50 p-1' src={showProduct.image}></img>
            </div>

            <div className='d-flex w-100'>
              <img className='product-img product-img_selected w-25 h-25 m-2 p-2' src={showProduct.image}></img> {/* map que filtra por imagenes*/}
              <img className='product-img w-25 h-25 m-2 p-2' src={showProduct.image}></img>
              <img className='product-img w-25 h-25 m-2 p-2' src={showProduct.image}></img>
            </div>
          
        </div>


        <div className=' h-100 d-flex flex-column justify-content-around align-items-start product-desc '>
          <div className='d-flex'>
            <h4 className='text-uppercase'> {showProduct.name} </h4>
            <p className='product-tittle_discount px-1 mx-4 '> -{showProduct.descuento}%</p>
          </div>

          <div className='d-flex'>
            <h5 className='product-price '>${showProduct.price - ((showProduct.price / 100) * showProduct.descuento)}</h5>
            <h5 className='product-discount text-inline mx-3'>${showProduct.price}</h5>
          </div>

          <p className="m-1">{showProduct.desc}</p>

          <div className='w-50 d-flex flex-column'>
            <h5 className='product-quantity_tittle text-capitalize'>cantidad</h5>

            <div className='d-flex product-quantity_conteiner'>
              <button className='btn'
              onClick={()=> quantity!== 0? setQuantity(quantity - 1): quantity }
              >-</button>                           

              <input className='product-quantity_number' type="text" value={quantity} disabled></input>

              <button className='btn'
              onClick={()=> quantity < showProduct.stock? setQuantity(quantity + 1) : quantity }
              >+</button>
            </div>

          </div>
          <button className='btn-outline-dark w-100 w-50 text-uppercase rounded my-2 py-2'>agrega al carrito</button>
        </div>        
      </div>
    </div>
  )
}
