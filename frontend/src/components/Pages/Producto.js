import React, { useState } from 'react'
import Todos from "../../img/todos.png"
import '../Style/producto.css'

export const Producto = () => {

  const [quantity, setQuantity] = useState(1)

/* Testeo de Página */
  
    const testeo = {
    id: 4,
    name: "mochila",
    image: Todos,
    price: 4000,
    desc: "asdfasd asdf asd fas asd fasdfasdfasd fasdf asdf asdf asdf as  asd asd  fasd fasd fasd asf asdf asdadsfsdfsd asd fasdf asdf asdf asdf sdfasd afasas dfasdf",
    descuento: 50,
    stock: 5,
  };


  return (
    <div>
      <div className='w-100 h-100 d-flex product-container'>

        <div className='d-flex flex-column justify-content-center h-100 product-imgs'>

            <div className='product-img d-flex flex-column justify-content-center align-items-center w-100'>
              <img className='w-50 h-50 p-1' src={testeo.image}></img>
            </div>

            <div className='d-flex w-100'>
              <img className='product-img product-img_selected w-25 h-25 m-2 p-2' src={testeo.image}></img> {/* map que filtra por imagenes*/}
              <img className='product-img w-25 h-25 m-2 p-2' src={testeo.image}></img>
              <img className='product-img w-25 h-25 m-2 p-2' src={testeo.image}></img>
            </div>
          
        </div>


        <div className=' h-100 d-flex flex-column justify-content-around align-items-start product-desc '>
          <div className='d-flex'>
            <h4 className='text-uppercase'> {testeo.name} </h4>
            <p className='product-tittle_discount px-1 mx-4 '> -{testeo.descuento}%</p>
          </div>

          <div className='d-flex'>
            <h5 className='product-price '>${testeo.price - ((testeo.price / 100) * testeo.descuento)}</h5>
            <h5 className='product-discount text-inline mx-3'>${testeo.price}</h5>
          </div>

          <p className="m-1">{testeo.desc}</p>

          <div className='w-50 d-flex flex-column'>
            <h5 className='product-quantity_tittle text-capitalize'>cantidad</h5>

            <div className='d-flex product-quantity_conteiner'>
              <button className='btn'
              onClick={()=> quantity!== 0? setQuantity(quantity - 1): quantity }
              >-</button>                           

              <input className='product-quantity_number' type="text" value={quantity} disabled></input>

              <button className='btn'
              onClick={()=> quantity < testeo.stock? setQuantity(quantity + 1) : quantity }
              >+</button>
            </div>

          </div>
          <button className='btn-outline-dark w-100 w-50 text-uppercase rounded my-2 py-2'>agrega al carrito</button>
        </div>        
      </div>
    </div>
  )
}
