import React from 'react'
import './Style/carrito.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'


export const Carrito = () => {
    const dispatch = useDispatch();
    const newList = useSelector(state => state.cart);

    let newListMap = newList.map(item => {
        return [item.id, item]
    });

    var newListMapArr = new Map(newListMap); // Pares de clave y valor

    let unicos = [...newListMapArr.values()]; // Conversión a un array

    console.log(unicos);

    let prices = unicos.map(item => item.price)
    let total = prices.reduce((a, b) => a + b, 0);

    return (
        <div className='carrito-fondo w-100 h-100'>
            <div className='carrito-container d-flex flex-column justify-content-around align-items-center'>
                <div className='carrito-title w-100 h-25 d-flex justify-content-center align-items-center'>
                    <h3 className='d-inline'>carrito</h3> <FaShoppingCart className='mx-2' size={'2.5em'} />
                </div>

                <div className='h-100 overflow-auto'>
                    <div className='d-flex flex-column justify-content-around align-items-center'>

                        {unicos.map((item) => (

                            <div className="d-flex justify-content-around align-items-center w-100" key={item.id}>

                                <img className="w-25 h-25" src={item.image.uno} alt="Card image cap" />
                               
                                <div>
                                    <p className='' key={item.id}> {item.name} </p>
                                </div>
                               
                                <div>
                                    <p>{item.price}</p>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>

                <div className='carrito-buyData d-flex w-100 flex-column'>
                    <div className='d-flex w-100 justify-content-between'>
                        <p className='mx-2'>Total sin envio:</p>
                        <p className='mx-2'>{total}</p>
                    </div>
                    <button className='btn btn-outline-dark me-2 text-uppercase m-2'>realizar pedido</button>
                </div>
            </div>
        </div>
    )
}
