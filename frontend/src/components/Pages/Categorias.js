import React, { useState, useEffect } from 'react'
import { bootstrap } from "bootstrap"
import { motion } from "framer-motion"
import { Cards } from '../'
import { Loading } from "../"
import '../Style/categorias.css'

export const Categorias = () => {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(users);
  const [loading, setLoading ] = useState(false);
  let componentMounted = true;

  const URL = "https://jsonplaceholder.typicode.com/users";

useEffect(() => {

  const getProduct = async () => {
    setLoading(true);
    const response = await fetch(URL);
    if(componentMounted){
      setUsers(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      console.log(filter)
    }
    
    return () => {
      componentMounted = false;
    }

  }

    getProduct();

},[]);

const filterProduct = (cat) => {
  const updatedList = users.filter((x)=> x.id === cat); {/* Cambiar id por category */}
  setFilter(updatedList)
}


const ShowProducts = () => {
  return(
    <>
      <div className='d-flex w-100 flex-column justify-content-center aling-items-center'>
        
      <div className='buttons d-flex justify-content-around my-3 flex-wrap'>
        <button className='btn btn-outline-dark me-2 text-uppercase m-2' onClick={() => filterProduct(1)}>Linea Bebe</button> 
        <button className='btn btn-outline-dark me-2 text-uppercase m-2' onClick={() => filterProduct(2)}>Linea Hogar</button>
        <button className='btn btn-outline-dark me-2 text-uppercase m-2' onClick={() => filterProduct(3)}>Accesorios</button>
        <button className='btn btn-outline-dark me-2 text-uppercase m-2' onClick={() => setFilter(users)}>Todos los Productos</button>
      </div>
      
        <div className='flex-wrap d-flex justify-content-center align-items-center my-3' >
          <Cards users={filter} />
        </div>
      </div>
    </>
  );
};

  return (
    <>
      <div className='d-flex-colums align-items-center '>
        
        <h2 className='category-tittle d-block text-center text-uppercase py-2'>Categorias</h2>
                  
          <div className='product-container d-flex mt-3 justify-content-center aling-items-center flex-wrap'>
            
            { loading ? <Loading/> : <ShowProducts/> }
          
          </div>        
      
      </div>
    </>
  )
}
