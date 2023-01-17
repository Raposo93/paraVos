import React ,{useState}  ,{useState}  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Style/dashboarProductos.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaTrashAlt } from 'react-icons/fa'
import { TfiPencilAlt } from 'react-icons/tfi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Style/dashboarProductos.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaTrashAlt } from 'react-icons/fa'
import { TfiPencilAlt } from 'react-icons/tfi'
import '../components/Style/dashboarProductos.css'

export const DashboarCategorias = ({ categories }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
    await fetch('http://localhost:3001/categorias/store', {
      method: 'POST',
      body: JSON.stringify(data)
      }).then((response) => {
        console.log(response)
        return response.json();
        });
  }

  return (
    <div className='d-flex w-100 flex-column py-2 px-4 dashboard-products_container'>
      <div className='w-100 d-flex dashboard-products_tittle'>

        <h3 className=''>CATEGORIAS</h3>

        <button onClick={handleShow}
        className='mx-3 py-2 px-3 dashboard-tittle_addProduct'>+ Añadir Nuevo</button>

       <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Nueva  Categoria </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                nameCategory: '',
                image: '',
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

                  <label htmlFor="image" className='mt-2'>Imagen</label>
                  <Field
                    id="image"
                    name="image"
                    placeholder="Ingrese Url de la imagen"
                    type="url"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.image && errors.image ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="image"
                    className="invalid-feedback"
                  />

                  <button className='my-2 btn align-self-end btn-submit' type="submit">Crear Categoria</button>
                </Form>
                
              )}
            </Formik>
            <span>* campo no obligatorio</span>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

            

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