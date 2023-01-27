import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Style/dashboarProductos.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const DashboarUsuarios = () => {


  const [showNewUser, setShowNewUser] = useState(false);
  const newUserClose = () => setShowNewUser(false);
  const newUserShow = () => setShowNewUser(true);

  const [view, setView] = useState("all")

  const users = [
    {
      name: "juan",
      email: "asdf@gmail.com",
      profile: "admin"
    },
    {
      name: "maria",
      email: "fdsa@hotmail.com",
      profile: "user"
    }
  ]

  const changeView = (e) => {
    setView(e.target.value)
  }

  const usersFilter = users.filter((user) => user.profile == view)

  const validation = Yup.object().shape({

    name: Yup.string()
      .required("Campo Obligatorio")
      .min(5, "El campo no puede tener menos de 5 caracteres")
      .max(50, "El campo no puede superar los 50 caracteres"),
    image: Yup.string()
      .typeError("Increse Url Valida")
      .required('Campo Obligatorio')
      .min(4, "Increse Url Valida"),

  })

  const sendToBack = async (data) => {
    await fetch('http://localhost:3001/user/store', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then((response) => {
      console.log(response)
      return response.json();
    });
  }


  return (

    <div className='d-flex w-100 flex-column py-2 px-4 dashboard-products_container'>
      <div className='w-100 d-flex dashboard-products_tittle'>
        <h3 className=''>USUARIOS</h3>
        <button onClick={newUserShow}
          className='mx-3 py-2 px-3 dashboard-tittle_addProduct'>+ Añadir Nuevo</button>


        <Modal show={showNewUser} onHide={newUserClose}>
          <Modal.Header closeButton>
            <Modal.Title> Nuevo Usuario </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                nameCategory: '',
                email: '',
                profile: '',
              }}
              validationSchema={validation}
              onSubmit={(values) => {
                sendToBack(values)
              }}
            >
              {({ touched, errors }) => (

                <Form className='d-flex flex-column justify-content-center m-3 '>
                  <label htmlFor="nameCategory">Nombre</label>
                  <Field
                    id="nameCategory"
                    name="nameCategory"
                    placeholder="Ingrese el Nombre de la categoria"
                    type="text"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.nameCategory && errors.nameCategory ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="nameCategory"
                    className="invalid-feedback"
                  />

                  <label htmlFor="email" className='mt-2'>Email</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="Ingrese el Email"
                    type="email"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />

                  <label htmlFor="profile" className='mt-2'>Tipo de Usuario:</label>
                  <Field as="select" name="profile">
                    <option value="user">Usuario</option>
                    <option value="admin">Administrador</option>
                  </Field>

                  <button className='my-2 btn align-self-end btn-submit' type="submit">Crear Usuario</button>
                </Form>

              )}
            </Formik>
            <span>* campo no obligatorio</span>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={newUserClose}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
      <div className='w-100 d-flex justify-content-between'>
        <select value={view} onChange={changeView} name="users" id="user-select">
          <option value="all">Ver Todos</option>
          <option value="admin">Administradores</option>
          <option value="user">Usuarios</option>
        </select>

        {/*                             Buscador sin funcion
        <div className='d-flex'>
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </div>
        */}

      </div>

      <div className='mx-2 my-4 dashboard-product_show overflow-auto'>
        <div className="p-3 container dashboard-product_grid">
          <div className="row d-flex justify-content-center align-item-center overflow-hidden">
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Imagen </p>  </div>
            <div className="col"> <p className='fw-bold dashboard-product_calumnName'> Nombre </p>  </div>
            <div className="col-2"> <p className='fw-bold dashboard-product_calumnName'> Perfil </p> </div>
            <div className="w-100 m-2 border-top"></div>
            {view === "all" ?
              users.map((user) => (
                <>
                  <div className='col'> <p className='dashboard-product_text'>{user.name} </p></div>
                  <div className='col'> <p className='dashboard-product_text'>{user.email}</p></div>
                  <div className="col-2"> <select name="user-class" id="class-select">
                    {user.profile == "admin" ?
                      <>
                        <option onSelect={() => ""} value="admin" selected>Administrador</option>
                        <option onSelect={() => ""} value="user">Usuario</option>
                      </>
                      :
                      <>
                        <option onSelect={() => ""} value="admin" >Administrador</option>
                        <option onSelect={() => ""} value="user" selected>Usuario</option>
                      </>
                    }

                  </select></div>
                  <div className="w-100 m-2 border-top"></div>
                </>
              ))
              :
              usersFilter.map((user) => (
                <>
                  <div className='col'> <p className='dashboard-product_text'>{user.name} </p></div>
                  <div className='col'> <p className='dashboard-product_text'>{user.email}</p></div>
                  <div className="col-2"> <select name="user-class" id="class-select">
                    {user.profile ?
                      <>
                        <option onSelect={() => ""} value="admin" selected>Administrador</option>
                        <option onSelect={() => ""} value="user">Usuario</option>
                      </>
                      :
                      <>
                        <option onSelect={() => ""} value="admin" >Administrador</option>
                        <option onSelect={() => ""} value="user" selected>Usuario</option>
                      </>
                    }

                  </select></div>
                  <div className="w-100 m-2 border-top"></div>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  )
}




