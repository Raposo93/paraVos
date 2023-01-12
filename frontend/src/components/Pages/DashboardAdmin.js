import React, { useState, useEffect } from 'react'
import { BsCart } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi'
import { AiOutlineBars, AiOutlineRight } from 'react-icons/ai'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { DashboarCategorias, DashboarOrdenes, DashboarProductos, DashboarUsuarios } from '../';
import '../Style/dashboardAdmin.css'

export const DashboardAdmin = () => {

   const [products, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(false);
   const [item, setItem] = useState(1)
   
   const URL = "http://localhost:3001/";

   const showData = async () => {
     setLoading(true);
 
     const responseProductos = await fetch(URL + "productos");
     const productos = await responseProductos.json();
 
     const responseCategorias = await fetch(URL + "categorias");
     const categorias = await responseCategorias.json(); 
 
     setProducts(productos.data);
     setCategories(categorias.data)
     setLoading(false);
   }
 
   useEffect(() => {
     showData()
   }, [])

  return (
    <div className='d-flex dashboard-main_container'>
        <div className='dashboard-item_container h-100'>
            <div className={`d-flex justify-content-between align-items-center dashboard-item_category ${item == 1 ? "selected-item" : ""}`}
            onClick={() => setItem(1)}>
                <HiOutlineBuildingStorefront size="1.5rem" color="#a6a6a0" className="mx-2"/>
                
                <p className='pt-3 dashboar-text_item'>Productos</p>
                
                <AiOutlineRight size="1.5rem" color="#a6a6a0" />
            </div>
            <div className={`d-flex justify-content-between align-items-center dashboard-item_category ${item == 2 ? "selected-item" : ""}`}
            onClick={() => setItem(2)}>
                <AiOutlineBars size="1.5rem" color="#a6a6a0" className="mx-2"/>
                
                <p className='pt-3 dashboar-text_item'>Categorias</p>
                
                <AiOutlineRight size="1.5rem" color="#a6a6a0"/>
            </div>
            <div className={`d-flex justify-content-between align-items-center dashboard-item_category ${item == 3 ? "selected-item" : ""}`}
            onClick={() => setItem(3)}>
                <BsCart size="1.5rem" color="#a6a6a0" className="mx-2"/>
                
                <p className='pt-3 dashboar-text_item'>Ordenes</p>
                
                <AiOutlineRight size="1.5rem" color="#a6a6a0"/>
            </div>
            <div className={`d-flex justify-content-between align-items-center dashboard-item_category ${item == 4 ? "selected-item" : ""}`}
            onClick={() => setItem(4)}>
                <FiUsers size="1.5rem" color="#a6a6a0" className="mx-2"/>
                
                <p className='pt-3 dashboar-text_item'>Usuarios</p>
                
                <AiOutlineRight size="1.5rem" color="#a6a6a0"/>
            </div>
        </div>
        <div className='overflow-auto overflowx-hiden'>  

            <div className={`${ item == 1 ? "" : "d-none"} w-100`}>
                <DashboarProductos products={products}/> 
            </div>

            <div className={`${ item == 2 ? "" : "d-none"} w-100 h-100`}>
                <DashboarCategorias categories={categories} /> 
            </div>

            <div className={`${ item == 3 ? "" : "d-none"} w-100 h-100`}>
                <DashboarOrdenes/> 
            </div>
            
            <div className={`${ item == 4 ? "" : "d-none"} w-100 h-100`}>
                <DashboarUsuarios/>             
            </div>
        </div>
    </div>
  )
}
