import React, { useState, useEffect } from 'react'
import Logo from "../img/logo2.png"
import './Style/MainCard.css'
import { bootstrap } from "bootstrap"

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
        <h2 className='card-container_tittle' >productos mas vendidos</h2>

        <div className=' card-container_list mt-3'>
          {users.map((user) => (
            <div className="card m-2" key={user.id}>
              <img className="card-img-top main-card-img p-2" src={Logo} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">{user.name}</p>
                <p className="card-price">$ {user.email}</p>
              </div>
              <p className="btn-comprar" onClick={() => { console.log("producto") }}> comprar</p>
            </div>
          ))}

        </div>
        <h2 className='card-container_tittle'>categorias</h2>

        <div className=' card-container_list mt-3'>
          {users.slice(0,4).map((user) => (
            <div className="card m-2" key={user.id}>
              <img className="card-img-top main-card-img p-2" src={Logo} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">{user.name}</p>                
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
