import React, { useState, useEffect } from 'react'
import Logo from "../img/logo2.png"
import './Style/MainCard.css'
import { bootstrap } from "bootstrap"
import { motion } from "framer-motion"

export const MainCard = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data);
    setUsers(data)
  }

  useEffect(() => {
    showData()
  }, [])

  return (
    <>
      <div className='d-flex-colums align-items-center'>
        <h2 className='card-container_tittle d-block text-center text-uppercase py-2' >productos mas vendidos</h2>
        <motion.div className='card-container_list'>

          <motion.div className='d-flex card-container mt-3' drag="x" dragConstraints={{ right: 650, left: -650 }}>

            {users.map((user) => (
              <motion.div className="card m-2" key={user.id} >
                <img className="card-img-top main-card-img p-2" src={Logo} alt="Card image cap" />
                <motion.div className="card-body">
                  <p className="card-text">{user.name}</p>
                  <p className="card-price">$ {user.email}</p>
                </motion.div>
                <p className="btn-comprar" onClick={() => { console.log("producto") }}> comprar</p>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
        <h2 className='card-container_tittle d-block text-center text-uppercase py-2'>categorias</h2>

        <div className='card-container_list mt-3'>
          {users.slice(0, 4).map((user) => (
            <div className="card category-card m-4" key={user.id}>
              <img className="card-img-top main-card-img p-2" src={Logo} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text category-card_text">{user.name}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
