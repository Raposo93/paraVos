import React from 'react'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'


export const DashboarOrderList = ({ orden }) => {

    const [showProduct, setShowProduct] = useState()

    const prices = orden.products.map(item => item.cost * item.quantity)
    const total = prices.reduce((a, b) => a + b, 0);


    console.log(total)

    return (
        <>
            <div className='col'> <p className='dashboard-product_text'> {orden.date}  </p></div>
            <div className='col'> <p className='dashboard-product_text'> {orden.user.name}  </p></div>
            <div className='col'> <p className='dashboard-product_text'> {orden.send.type}  </p></div>
            <div className='col'>
                <select name="user-class" id="class-select">
                    {orden.checked ?
                        <>
                            <option onSelect={() => ""} value="enviado" selected>Enviado</option>
                            <option onSelect={() => ""} value="pendiente" >Pendiente</option>
                        </>
                        :
                        <>
                            <option onSelect={() => ""} value="enviado">Enviado</option>
                            <option onSelect={() => ""} value="pendiente" selected>Pendiente</option>
                        </>

                    }


                </select>
            </div>
            <div className='col'> <p className='dashboard-product_text'> $ {orden.total} {showProduct ?
                <IoIosArrowDown onClick={() => setShowProduct()} /> :
                <IoIosArrowBack onClick={() => setShowProduct(true)} />} </p></div>

            {showProduct ?
                orden.products.map((product) =>
                    <div className='d-flex justify-content-around'>
                        <div className='w-25 d-flex justify-content-between'>
                            <img src={product.image} alt="Imagen" />

                            <p>{product.name} x{product.quantity} </p>
                        </div>
                        <p>$ {product.cost}</p>
                    </div>
                )

                : ""}

            <div className="w-100 m-2 border-top"></div>
        </>
    )
}
