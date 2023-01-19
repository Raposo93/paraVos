import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { TfiPencilAlt } from 'react-icons/tfi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Style/dashboarProductos.css'
import { Form, Formik, Field, ErrorMessage } from 'formik'


export const ModalProducts = (validation, product) => {

    const [showEditItem, setShowEditItem] = useState();
    const editItemClose = () => setShowEditItem();
    const editItemShow = () => setShowEditItem(true);

    const [showRemoveItem, setShowRemoveItem] = useState();
    const removeItemClose = () => setShowRemoveItem();
    const removeItemShow = () => setShowRemoveItem(true);


    const editItem = async (id, data) => {
        await fetch(`http://localhost:3001/productos/:${id}/update`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response)
            return response.json();
        });
    }

    const deleteItem = async (id) => {
        await fetch(`http://localhost:3001/productos/:${id}/destroy`, {
            method: 'POST',
        }).then((response) => {
            console.log(response)
            return response.json();
        });
    }

    return (
        <div className='d-flex flex-column'>
            <TfiPencilAlt onClick={editItemShow} className='mt-2 dashboard-icon' color='grey' size="1.5rem" />

            <Modal show={showEditItem} onHide={editItemClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Editar Producto </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            name: product.name,
                            image: product.image,
                            imageA: product.imageA,
                            imageB: product.imageB,
                            imageC: product.imageC,
                            description: product.description,
                            stock: product.stock,
                            price: product.price,
                            destacado: product.destacado,
                            descuento: product.descuento,
                        }}
                        validationSchema={validation}
                        onSubmit={(values) => {
                            editItem(product.id, values)
                        }}
                    >
                        {({ touched, errors }) => (

                            <Form className='d-flex flex-column justify-content-center m-3 '>
                                <label htmlFor="edit-name">Nombre</label>
                                <Field
                                    id="edit-name"
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

                                <label htmlFor="edit-image" className='mt-2'>Imagen Princial</label>
                                <Field
                                    id="edit-image"
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

                                <label htmlFor="edit-imageA" className='mt-2'>Imagen 2 *</label>
                                <Field
                                    id="edit-imageA"
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

                                <label htmlFor="edit-imageB" className='mt-2'>Imagen 3 *</label>
                                <Field
                                    id="edit-imageB"
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

                                <label htmlFor="edit-imageC" className='mt-2'>Imagen 4 *</label>
                                <Field
                                    id="edit-imageC"
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

                                <label htmlFor="edit-description" className='mt-2'>Descripcion</label>
                                <Field
                                    id="edit-description"
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

                                <label htmlFor="edit-descuento" className='mt-2'>Descuento *</label>
                                <Field
                                    id="edit-descuento"
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

                                <label htmlFor="edit-price" className='mt-2'>Precio</label>
                                <Field
                                    id="edit-price"
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

                                <label htmlFor="edit-stock" className='mt-2'>Stock</label>
                                <Field
                                    id="edit-stock"
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

                                <label htmlFor="edit-destacado" className='mt-2'>
                                    <Field
                                        className='mx-2'
                                        type="checkbox"
                                        name="checked"
                                        id="edit-destacado"
                                        value="destacado" />
                                    Destacado
                                </label>

                                <button className='my-2 btn align-self-end btn-submit' type="submit" /*onClick={editItemClose}*/>Guardar</button>
                            </Form>

                        )}
                    </Formik>
                    <span>* campo no obligatorio</span>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={editItemClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            <FaTrashAlt onClick={removeItemShow} className='mt-2 dashboard-icon' color='red' size="1.5rem" />

            <Modal show={showRemoveItem} onHide={removeItemClose}>
                <Modal.Header closeButton>
                    <Modal.Title> ¿QUERÉS ELIMINAR ESTE PRODUCTO? </Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-around w-100'>
                    <Button className='w-50 mx-2' variant="primary" onClick={removeItemClose}>
                        VOLVER
                    </Button>
                    <Button className='w-50 mx-2' variant="primary" onClick={deleteItem(product.id)}>
                        ELIMINAR
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}
