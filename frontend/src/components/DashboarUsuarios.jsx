import React from 'react'
import { useState } from 'react';

export const DashboarUsuarios = () => {

  const [showNewUser, setShowNewUser] = useState();
  const newUserClose = () => setShowNewUser();
  const newUserShow = () => setShowNewUser(true);

  const [showEditUser, setShowEditUser] = useState();
  const editUserClose = () => setShowEditUser();
  const editUserShow = () => setShowEditUser(true);

  const [showRemoveUser, setShowRemoveUser] = useState();
  const removeUserClose = () => setShowRemoveUser();
  const removeUserShow = () => setShowRemoveUser(true);

  const [view, setView] = useState("all")

  const users = [
    {
      name: "juan",
      email: "asdf@gmail.com",
      profile: true
    },
    {
      name: "maria",
      email: "fdsa@hotmail.com",
      profile: false
    }
  ]

  return (

    <div className='d-flex w-100 flex-column py-2 px-4 dashboard-products_container'>
      <div className='w-100 d-flex dashboard-products_tittle'>
        <h3 className=''>USUARIOS</h3>
        <button onClick={() => ""}
          className='mx-3 py-2 px-3 dashboard-tittle_addProduct'>+ Añadir Nuevo</button>
      </div>
      <div className='w-100 d-flex justify-content-between'>
        <select name="users" id="user-select">
          <option onSelect={() => setView("all")} value="all">Ver Todos</option>
          <option onSelect={() => setView("admin")} value="admin">Administradores</option>
          <option onSelect={() => setView("user")} value="user">Usuarios</option>
        </select>

        <div className='d-flex'>
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </div>
      </div>

      <div className='mx-2 my-4 dashboard-product_show overflow-auto'>
        <div className="p-3 container dashboard-product_grid">
          <div className="row d-flex justify-content-center align-item-center overflow-hidden">
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Imagen </p>  </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Nombre </p>  </div>
            <div className="col-2"> <p className='fw-bold dashboard-product_calumnName'> Descripcion </p> </div>
            <div className="w-100 m-2 border-top"></div>
            {users.map((user) => (
              <>
                <div className='col'> <p className='dashboard-product_text'>{user.name} </p></div>
                <div className='col'> <p className='dashboard-product_text'>{user.email}</p></div>
                <div className="col-2"> <select name="user-class" id="class-select">
                  {user.profile ?
                    <option onSelect={() => ""} value="admin" selected>Administrador</option> :
                    <option onSelect={() => ""} value="user">Usuario</option>
                  }
                  {!user.profile ?
                    <option onSelect={() => ""} value="admin">Administrador</option> :
                    <option onSelect={() => ""} value="user" selected>Usuario</option>
                  }


                </select></div>
                <div className="w-100 m-2 border-top"></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
