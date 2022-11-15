import React from 'react'
import { motion } from 'framer-motion'
import './Style/MainCard.css'

export const Cards = ({ users }) => {

    return (

        <>
            {users.map((user) => (
                <motion.div className="maincard rounded position-relative d-flex flex-column align-items-center text-center m-2" key={user.id} >
                    <img className="card-img-top maincard-img mt-4 p-2" src={user.image} alt="Card image cap" />
                    <motion.div className="maincard-body m-0 p-0 w-100">
                        <p className="text-dark m-0 p-0 fw-bold text-uppercase mt-2 ">{user.name}</p>
                        <p className="maincard-price pb-2">$ {user.price}</p>
                    </motion.div>
                    <p className="main-btn_comprar w-100 text-center fw-bold m-0 p-0 text-uppercase" onClick={() => { console.log("producto") }}> comprar</p>
                </motion.div>
            ))}

        </>
    )
}


