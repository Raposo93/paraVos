import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { TfiPencilAlt } from 'react-icons/tfi'
import '../components/Style/dashboarProductos.css'

export const DashboarCategorias = ({ categories }) => {

  return (
    <div className='d-flex w-100 flex-column py-2 px-4 dashboard-products_container'>
      <div className='w-100 d-flex dashboard-products_tittle'>

        <h3 className=''>CATEGORIAS</h3>

        <button className='mx-3 py-2 px-3 dashboard-tittle_addProduct'>+ Añadir Nuevo</button>

      </div>

      <div className='mx-2 my-4 dashboard-product_show overflow-auto'>
        <div className="p-3 container dashboard-product_grid">
          <div className="row d-flex">
            <div className="col-1"> <p className='fw-bold dashboard-product_calumnName'> Imagen </p>  </div>
            <div className="text-center col-8"> <p className='fw-bold dashboard-product_calumnName'> Nombre </p>  </div>
            <div className="col-1"> <p className='fw-bold dashboard-product_calumnName'> </p>  </div>
            <div className="w-100 m-2 border-top"></div>
            {categories.map((category) => (
              <>
                <div className='col-1'> <img className='img-thumbnail' src={category.image} alt=""/> </div>
                <div className='text-center align-self-center col-8'> <p className='dashboard-product_text'>{category.nameCategory}</p></div>
                <div className="col-1">

                  <div className='d-flex flex-column'>
                    <TfiPencilAlt onClick={() => ""} className='mt-2 dashboard-icon' color='grey'  size={"1.5rem"}/>
                    <FaTrashAlt  onClick={() => ""} className='mt-2 dashboard-icon' color='red' size={"1.5rem"}/>
                  </div>

                </div>
                <div className="w-100 m-2 border-top"></div>
              </>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

