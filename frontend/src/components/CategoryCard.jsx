import React from 'react'
import { Link } from 'react-router-dom'
import './Style/MainCard.css'

export const CategoryCard = ({ categories }) => {

    return (

        <>
            {categories.map((category) => (

                <Link className='category-link' to="/categorias" >

                    <div className="maincard main-category-card rounded position-relative d-flex flex-column align-items-center text-center m-4" key={category.id}>

                        <img className="card-img-top maincard-img mt-4 p-2" src={category.image} alt="Card image cap" />


                        <p className="main-category_title m-0 p-0 fw-bold text-uppercase p-2 pt-3">{category.nameCategory}</p>

                    </div>
                </Link>
                
            ))}

        </>
    )
}


