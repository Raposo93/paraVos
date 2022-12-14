import React, { useState, useEffect } from 'react'
import Todos from "../img/todos.png"
import './Style/MainCard.css'
import { motion } from "framer-motion"
import { Cards } from './'
import { CategoryCard } from './'
import { Loading } from "./"

export const MainCard = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = "http://localhost:3001/";

  const showData = async () => {
    setLoading(true);

    const responseProductos = await fetch(URL + "productos");
    const productos = await responseProductos.json();

    const responseCategorias = await fetch(URL + "categorias");
    const categorias = await responseCategorias.json();

    setProducts(productos.data);
    setCategories(categorias.data)
    setLoading(false);
  }

  useEffect(() => {
    showData()
  }, [])

  const productAll = [{
    id: 4,
    nameCategory: "todos los productos",
    image: Todos,
  }];


  return (
    <>
      <div className='d-flex-colums align-items-center'>

        <h2 className='card-container_tittle d-block text-center text-uppercase py-2' >productos mas vendidos</h2>

        <motion.div className='maincard-container d-flex justify-content-center align-items-center'>

          <motion.div className='maincard-container_list d-flex mt-3' drag="x" dragConstraints={{ right: 1050, left: -1050 }}>

            {loading ? <Loading /> : <Cards products={products} />}

          </motion.div>

        </motion.div>

        <h2 className='card-container_tittle d-block text-center text-uppercase py-2'>categorias</h2>

        <div className='main-category_list flex-wrap d-flex justify-content-center align-items-center mt-3'>

          {loading ? <Loading /> : <CategoryCard categories={categories} />} {/* la categoria TODOS, va por fuera del .map */}

          <CategoryCard categories={productAll} />

        </div>
      </div>
    </>
  )
}

