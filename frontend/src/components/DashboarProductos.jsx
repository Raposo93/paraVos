import React from 'react'
import '../components/Style/dashboarProductos.css'

export const DashboarProductos = ({ products }) => {

  return (
    <div className='d-flex w-100 flex-column py-2 px-4 dashboard-products_container'>
      <div className='w-100 d-flex dashboard-products_tittle'>

        <h3 className=''>PRODUCTOS</h3>

        <button className='mx-3 py-2 px-3 dashboard-tittle_addProduct'>+ Añadir Nuevo</button>

      </div>

      <div className='mx-2 my-4 dashboard-product_show overflow-auto'>
        <div className="p-3 container dashboard-product_grid">
          <div className="row">
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Imagen </p>  </div>
            <div className="col-2"> <p className='fw-bold dashboard-product_calumnName'> Nombre </p>  </div>
            <div className="col-3"> <p className='fw-bold dashboard-product_calumnName'> Descripcion </p> </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Descuento </p> </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Precio </p>  </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Stock </p> </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Categoria </p> </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> - </p> </div>
            <div className="w-100 m-2 border-top"></div>
            {products.map((product) => (
              <>
                <div className='col'> <img className='img-thumbnail' src={product.image} alt="" size='50px' /> </div>
                <div className='col-2'> <p className='dashboard-product_text'>{product.name}</p></div>
                <div className="col-3"> <p className='dashboard-product_text'>{product.description}</p></div>
                <div className="col"> <p className='text-center dashboard-product_text'>{product.descuento === null ? "0" : product.descuento} %</p> </div>
                <div className="col"> <p className='text-center dashboard-product_text'>$ {product.price}</p> </div>
                <div className="col"> <p className='text-center dashboard-product_text'>{product.stock}</p> </div>
                <div className="col"> <p className='dashboard-product_text'>{product.category.nameCategory}</p> </div>
                <div className="col">

                  <div>
                    <button> ASDF</button>
                    <button> FDSA </button>
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
