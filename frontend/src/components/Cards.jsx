import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Style/MainCard.css'

export const Cards = ({ products }) => {

    return (

        <>
            {products.map((product) => (
                <motion.div className="maincard rounded position-relative d-flex flex-column align-items-center text-center m-4" key={product.id} >
                    <img className="card-img-top maincard-img mt-4 p-2" src={product.image} alt="Card image cap" />
                    <motion.div className="maincard-body m-0 p-0 w-100">
                        <p className="text-dark m-0 p-0 fw-bold text-uppercase px-1 mt-2 ">{product.name}</p>
                        <p className="maincard-price pb-2">$ {product.price}</p>
                    </motion.div>
                    
                        <p className="main-btn_comprar w-100 text-center fw-bold m-0 p-0 text-uppercase" onClick={() => { console.log("producto") }}><Link className='product-link' to={"/producto"}>comprar</Link></p>
                    
                </motion.div>
            ))}

        </>
    )
}



