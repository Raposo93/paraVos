import React, { useState, useEffect } from 'react'

import { Cards } from '../'
import { Loading } from "../"
import '../Style/categorias.css'
import '../Style/MainCard.css'

export const Categorias = () => {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading ] = useState(false);
  const [selected, setSelected ] = useState("bebe");

  let componentMounted = true;
  const showSelected = "category-selected"

  const URL = "http://localhost:3001/";

useEffect(() => {

  const getProduct = async () => {
    setLoading(true);
    const response = await fetch(URL+"productos");
    const asd = await response.clone().json();
    const dsa = await response.json()
    
    if(componentMounted){
      setProducts(asd.data);
      setFilter(dsa.data);
      setLoading(false);    
    }
    
    return () => {
      componentMounted = false;
    }

  }

    getProduct();

},[]);

const filterProduct = (cat) => {
  const updatedList = products.filter((x)=> x.categoryId === cat); {/* Cambiar id por category */}
  setFilter(updatedList)
}


const ShowProducts = () => {
  return(
    <>
      <div className='d-flex w-100 flex-column justify-content-center aling-items-center'>
        
      <div className='buttons d-flex justify-content-around my-3 flex-wrap'>
        <button className={`${selected === "Bebe"? showSelected : ""} btn btn-outline-dark me-2 text-uppercase m-2`} 
        onClick={() => {filterProduct(2), setSelected("Bebe")}}
        >Linea Bebe</button> 
        <button className={`${selected === "Hogar"? showSelected : ""} btn btn-outline-dark me-2 text-uppercase m-2`} 
        onClick={() => {filterProduct(1), setSelected("Hogar")}}
        >Linea Hogar</button>
        <button className={`${selected === "Accesorio"? showSelected : ""} btn btn-outline-dark me-2 text-uppercase m-2`} 
        onClick={() => {filterProduct(3), setSelected("Accesorio")}}
        >Accesorios</button>
        <button className={`${selected === "Todos"? showSelected : ""} btn btn-outline-dark me-2 text-uppercase m-2`} 
        onClick={() => {setFilter(products), setSelected("Todos")}}
        >Todos los Productos</button>
      </div>
      
        <div className='flex-wrap d-flex justify-content-center align-items-center my-3 mx-1' >
          <Cards products={filter} />
        </div>
      </div>
    </>
  );
};

  return (
    <>
      <div className='d-flex-colums align-items-center '>
        
        <h2 className='category-tittle d-block text-center text-uppercase py-2'>Categorias</h2>
                  
          <div className='d-flex mt-3 justify-content-center aling-items-center flex-wrap'>
            
            { loading ? <Loading/> : <ShowProducts/> }
          
          </div>        
      
      </div>
    </>
  )
}
