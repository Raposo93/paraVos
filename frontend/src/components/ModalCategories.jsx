import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { TfiPencilAlt } from 'react-icons/tfi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/Style/dashboarProductos.css'
import { Form, Formik, Field, ErrorMessage } from 'formik'

export const ModalCategories = (validation, category) => {

    const [showEditCategory, setShowEditCategory] = useState();
    const editCategoryClose = () => setShowEditCategory();
    const editCategoryShow = () => setShowEditCategory(true);

    const [showRemoveCategory, setShowRemoveCategory] = useState();
    const removeCategoryClose = () => setShowRemoveCategory();
    const removeCategoryShow = () => setShowRemoveCategory(true);

    const editCategory = async (id, data) => {
        await fetch(`http://localhost:3001/productos/:${id}/update`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
            console.log(response)
            return response.json();
        });
    }

    const deleteCategory = async (id) => {
        await fetch(`http://localhost:3001/productos/:${id}/destroy`, {
            method: 'POST',
        }).then((response) => {
            console.log(response)
            return response.json();
        });
    }


    return (

        <div className='d-flex flex-column'>

            <TfiPencilAlt onClick={editCategoryShow} className='mt-2 dashboard-icon' color='grey' size="1.5rem" />
            <Modal show={showEditCategory} onHide={editCategoryClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Editar Categoria </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            nameCategory: category.nameCategory,
                            image: category.image,
                        }}
                        validationSchema={validation}
                        onSubmit={(values) => {
                            editCategory(values)
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
                    <Button variant="primary" onClick={editCategoryClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            <FaTrashAlt onClick={removeCategoryShow} className='mt-2 dashboard-icon' color='red' size="1.5rem" />

            <Modal show={showRemoveCategory} onHide={removeCategoryClose}>
                <Modal.Header closeButton>
                    <Modal.Title> ¿QUERÉS ELIMINAR ESTA CATEGORIA? </Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-around w-100'>
                    <Button className='w-50 mx-2' variant="primary" onClick={removeCategoryClose}>
                        VOLVER
                    </Button>
                    <Button className='w-50 mx-2' variant="primary" onClick={deleteCategory(category.id)}>
                        ELIMINAR
                    </Button>
                </Modal.Body>
            </Modal>
        </div>

    )
}
