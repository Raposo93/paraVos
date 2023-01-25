import React from 'react'
import { DashboarOrderList } from './DashboarOrderList'

export const DashboarOrdenes = () => {

  const ordenes = [
    {
      date: "15/12/1900",
      user: {
        name: "pedro",
        email: "perdo@pedro.com",
        dni: "32123323"
      },
      send: {
        type: "retira en local",
        address: "",
        state: "",
        country: "",
      },
      checked: false,
      total: 2500,
      products: [
        {
          img: " :D ",
          name: " Producto 1",
          quantity: 1,
          cost: 1000
        },
        {
          img: "http://test1",
          name: " Producto 2",
          quantity: 1,
          cost: 1500
        }
      ],
    },
    {
      date: "16/12/1900",
      user: {
        name: "raquel",
        email: "raquel@raquel.com",
        dni: "35123412"
      },
      send: {
        type: "Envio",
        address: "false Street 123",
        state: "Andatuasaber",
        country: "La Luna",
      },
      checked: true,
      cost: 1500,
      products: [
        {
          img: "http://test2",
          name: " Producto 2",
          quantity: 1,
          cost: 1500
        }
      ],
    }
  ]

  return (
    <div className='d-flex w-100 flex-column py-2 px-4 dashboard-products_container'>
      <div className='w-100 d-flex dashboard-products_tittle'>
        <h3 className=''>ORDENES</h3>
      </div>
      <div className='mx-2 my-4 dashboard-product_show overflow-auto'>
        <div className="p-3 container dashboard-product_grid">
          <div className="row d-flex justify-content-center align-item-center overflow-hidden">
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Fecha </p>  </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Datos </p>  </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Envio </p> </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Estado </p> </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Compra </p> </div>
            <div className="w-100 m-2 border-top"></div>
            {ordenes.map((orden) => (

              <DashboarOrderList orden={orden} />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
