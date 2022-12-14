import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import userReducer from "../../reducers/userReducer";




export const Registro = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

  const dispatch = useDispatch();
  
  return (
    <main>
      <div className="grid-containter">
        <div>
          <Formik
            initialValues={{
              nombre: '',
              email: '',
              apellido: '',
              contraseña: '',


            }}
            // ----------- Validacion y mensaje de error -------------
            validate={(valores) => {
              let errores = {};


              //--------- Validacion Nombre -----------
              if (!valores.nombre) {
                errores.nombre = "Por favor, ingresa tu nombre"
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre = 'El nombre solo puede contener letras y espacios'
              }

              //--------- Validacion Apellido -----------
              if (!valores.apellido) {
                errores.apellido = "Por favor, ingresa tu apellido"
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                errores.apellido = 'El apellido solo puede contener letras y espacios'
              }

              //---------- Validacion Correo ------------
              if (!valores.email) {
                errores.email = "Por favor, ingresa un correo electronico"
              } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errores.email = 'El correo electronico solo puede contener letras, numeros, puntos y guoines'
              }
              //--------- Validacion Apellido -----------
              if (!valores.contraseña) {
                errores.contraseña = "Por favor, ingresa una contraseña"
              } else if (/^(?=.\d)(?=.[a-z])(?=.[A-Z]).$/.test(valores.contraseña)) {
                errores.contraseña = 'La contraseña debe tener al menos más de 8 caracteres y uno de estos debe ser una mayúscula'
              }
              
              return errores;
            }}
            //-------------- Mensaje exitoso de formulario enviado --------------
            onSubmit={(valores, { resetForm }) => {
              //-------------- Back --------------
              dispatch(userReducer(
                {firstname: nombre,
                lastname: apellido,
                address_mail: email,
                password: contraseña,
                google_id: "",
                rol_user: "cliente",
                photo_perfil:"",
                phone_number:""},))
              
                resetForm();
              console.log("Formulario Enviado")
              cambiarFormularioEnviado(true);
              setTimeout(() => {
                cambiarFormularioEnviado(false)
              }, 5000)
            }}

          >


            {({ values, errors, touched, handleChange, handleBlur }) => (
              <form className="formulario" >
                <div>
                  <h1>CREAR CUENTA</h1>
                  <label/> Nombre <br></br>
                  <input className="Register_name"
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                
                </div>
                
                <div>
                <label/> Apellido <br></br>
                  <input className="Register_surname"
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="Apellido"
                    value={values.apellido}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.apellido && errors.apellido && <div className="error">{errors.apellido}</div>}
                </div>


                <div>
                <label/> Email <br></br>
                  <input className="Register_email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div>
                <label> Contraseña </label> <br/>
                  <input className="Register_password"
                    type="text"
                    id="contraseña"
                    name="contraseña"
                    placeholder="Contraseña"
                    value={values.contraseña}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.contraseña && errors.apellido && <div className="error">{errors.contraseña}</div>}
                </div>




                <button type="submit" className="btn-Registro"> CREAR CUENTA </button>
                

                
              </form>
            )}

              
          </Formik>
          
        </div>
      </div>
    </main>
  )
}
