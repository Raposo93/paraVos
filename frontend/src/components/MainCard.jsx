import React, { useState, useEffect } from 'react'
import Logo from "../img/logo2.png"
import './Style/MainCard.css'
import { bootstrap } from "bootstrap"
import { motion } from "framer-motion"
import { Cards } from './'
import { Loading } from "./"

export const MainCard = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    setLoading(true)
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data);
    setLoading(false)
    setUsers(data)
  }

  useEffect(() => {
    showData()
  }, [])

  return (
    <>
      <div className='d-flex-colums align-items-center'>
        
        <h2 className='card-container_tittle d-block text-center text-uppercase py-2' >productos mas vendidos</h2>
        
        <motion.div className='maincard-container d-flex justify-content-center align-items-center'>
          
          <motion.div className='maincard-container_list d-flex mt-3' drag="x" dragConstraints={{ right: 1050, left: -1050 }}>
            
          { loading ? <Loading/> : <Cards users={users}/> }
          
          </motion.div>
        
        </motion.div>
        
        <h2 className='card-container_tittle d-block text-center text-uppercase py-2'>categorias</h2>

        <div className='main-category_list flex-wrap d-flex justify-content-center align-items-center mt-3'>
          
          { loading ? <Loading/> : users.slice(0, 4).map((user) => (
            
            <div className="maincard main-category-card rounded position-relative d-flex flex-column align-items-center text-center m-2" key={user.id}>
              
              <img className="card-img-top maincard-img mt-4 p-2" src={Logo} alt="Card image cap" />
              
              <div className="card-body">
                
                <p className="main-category_title text-dark m-0 p-0 fw-bold text-uppercase p-2 ">{user.name}</p>
              
              </div>
            
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
