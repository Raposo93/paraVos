import React from 'react'
import { Link } from 'react-router-dom'
import './Style/MainCard.css'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../reducers/categoryReducer'


export const CategoryCard = ({ categories }) => {
    
    const dispatch = useDispatch();

    return (

        <>
            {categories.map((cat) => (

                <Link 
                    key={cat.id} 
                    onClick={()=> {cat.nameCategory === "todos los productos" ? dispatch(changeCategory("Todos")) : dispatch(changeCategory(cat.nameCategory))}}
                    className='category-link'  to="/categorias">

                    <div className="maincard main-category-card rounded position-relative d-flex flex-column align-items-center text-center m-4" key={cat.id}>

                        <img className="card-img-top maincard-img mt-4 p-2" src={cat.image} alt="Card image cap" />

                        <p className="main-category_title m-0 p-0 fw-bold text-uppercase p-2 pt-3">{cat.nameCategory}</p>

                    </div>
                </Link>
                
            ))}

        </>
    )
}


