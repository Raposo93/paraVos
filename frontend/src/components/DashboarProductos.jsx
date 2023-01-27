

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Style/dashboarProductos.css'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ModalProducts } from './ModalProducts';

export const DashboarProductos = ({ products }) => {

  const [showNewItem, setShowNewItem] = useState();
  const newItemClose = () => setShowNewItem();
  const newItemShow = () => setShowNewItem(true);
  const [newProduct, setNewProduct] = useState({})

  const sendToBack = async () => {
    await fetch('http://localhost:3001/productos/store', {
      method: 'POST',
      body: newProduct,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then((response) => {
      console.log(response)
      return response.json();
    });

  }

  const validation = Yup.object().shape({     // validaciones para usuario

    name: Yup.string()
      .required("Campo Obligatorio")
      .min(3, "El campo no puede tener menos de 5 caracteres")
      .max(50, "El campo no puede superar los 50 caracteres"),
    image: Yup.string()
      .typeError("Increse Url Valida")
      .required('Campo Obligatorio')
      .min(4, "Increse Url Valida"),
    imageA: Yup.string()
      .typeError("Increse Url Valida")
      .min(4, "Increse Url Valida"),
    imageB: Yup.string()
      .typeError("Increse Url Valida")
      .min(4, "Increse Url Valida"),
    imageC: Yup.string()
      .typeError("Increse Url Valida")
      .min(4, "Increse Url Valida"),
    description: Yup.string()
      .required("Campo Obligatorio")
      .min(4, "El campo debe tener mas de 4 caracteres")
      .max(300, "el campo no puede tener mas de 300 caracteres"),
    descuento: Yup.number()
      .max(100, "el descuento no puede ser mayor al 100%")
      .min(0, "el numero no puede ser negativo")
      .typeError("ingrese números"),
    price: Yup.number()
      .required("Campo Obligatorio")
      .min(0, "el numero no puede ser negativo")
      .typeError("ingrese números")
      .positive("el numero no puede ser negativo"),
    stock: Yup.number()
      .required("Campo Obligatorio")
      .min(0, "el numero no puede ser negativo")
      .typeError("ingrese números"),
    destacado: Yup.boolean()

  })

  return (
    <div className='d-flex w-100 flex-column py-2 px-4 dashboard-products_container'>
      <div className='w-100 d-flex dashboard-products_tittle'>

        <h3 className=''>PRODUCTOS</h3>

        <button onClick={newItemShow}
          className='mx-3 py-2 px-3 dashboard-tittle_addProduct'>+ Añadir Nuevo</button>

        <Modal show={showNewItem} onHide={newItemClose}>
          <Modal.Header closeButton>
            <Modal.Title> Nuevo Producto </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                name: '',
                image: '',
                imageA: '',
                imageB: '',
                imageC: '',
                categoryId: 0,
                description: '',
                stock: 0,
                price: 0,
                destacado: false,
                descuento: 0,
              }}
              validationSchema={validation}
              onSubmit={(values) => {
                let data = JSON.stringify(values)
                setNewProduct(data),
                  sendToBack(newProduct)
              }}
            >
              {({ touched, errors }) => (

                <Form className='d-flex flex-column justify-content-center m-3 '>
                  <label htmlFor="product-name">Nombre</label>
                  <Field
                    id="product-name"
                    name="name"
                    placeholder="Ingrese el Nombre del Producto"
                    type="name"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.name && errors.name ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-image" className='mt-2'>Imagen Princial</label>
                  <Field
                    id="product-image"
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

                  <label htmlFor="product-imageA" className='mt-2'>Imagen 2 *</label>
                  <Field
                    id="product-imageA"
                    name="imageA"
                    placeholder="Ingrese Url de la imagen"
                    type="url"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.imageA && errors.imageA ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="imageA"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-imageB" className='mt-2'>Imagen 3 *</label>
                  <Field
                    id="product-imageB"
                    name="imageB"
                    placeholder="Ingrese Url de la imagen"
                    type="url"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.imageB && errors.imageB ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="imageB"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-imageC" className='mt-2'>Imagen 4 *</label>
                  <Field
                    id="product-imageC"
                    name="imageC"
                    placeholder="Ingrese Url de la imagen"
                    type="url"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.imageC && errors.imageC ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="imageC"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-categoryId" className='mt-2'>Categoria</label>
                  <Field component="select" name="categoryId" placeholder="Seleccione una Categoria">
                    <option value={1}>Hogar</option>
                    <option value={2}>Bebe</option>
                    <option value={3}>Accesorio</option>
                  </Field>

                  <label htmlFor="product-description" className='mt-2'>Descripcion</label>
                  <Field
                    id="product-description"
                    name="description"
                    placeholder="Ingrese la Descripcion del Producto"
                    type="description"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.description && errors.description ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="description"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-descuento" className='mt-2'>Descuento *</label>
                  <Field
                    id="product-descuento"
                    name="descuento"
                    placeholder="Ingrese el porcentaje de descuento"
                    type="descuento"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.descuento && errors.descuento ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="descuento"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-price" className='mt-2'>Precio</label>
                  <Field
                    id="product-price"
                    name="price"
                    placeholder="Ingrese el Precio"
                    type="price"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.price && errors.price ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="price"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-stock" className='mt-2'>Stock</label>
                  <Field
                    id="product-stock"
                    name="stock"
                    placeholder="Ingrese el Stock"
                    type="number"
                    className={`w-100 px-2 detalle-data_field
                        ${touched.stock && errors.stock ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="stock"
                    className="invalid-feedback"
                  />

                  <label htmlFor="product-destacado" className='mt-2'>
                    <Field
                      className='mx-2'
                      type="checkbox"
                      name="checked"
                      id="product-destacado"
                      value="destacado" />
                    Destacado
                  </label>

                  <button className='my-2 btn align-self-end btn-submit' type="submit" /*onClick={newItemClose}*/>Pasar al envio</button>
                </Form>

              )}
            </Formik>
            <span>* campo no obligatorio</span>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={newItemClose}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

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
                <div className='col'> <img className='img-thumbnail' src={product.image} alt="" /> </div>
                <div className='col-2'> <p className='dashboard-product_text'>{product.name}</p></div>
                <div className="col-3"> <p className='dashboard-product_text'>{product.description}</p></div>
                <div className="col"> <p className='text-center dashboard-product_text'>{product.descuento === null ? "0" : product.descuento} %</p> </div>
                <div className="col"> <p className='text-center dashboard-product_text'>$ {product.price}</p> </div>
                <div className="col"> <p className='text-center dashboard-product_text'>{product.stock}</p> </div>
                <div className="col"> <p className='dashboard-product_text'>{product.category.nameCategory}</p> </div>
                <div className="col">

                  <ModalProducts product={product} validation={validation} />

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
