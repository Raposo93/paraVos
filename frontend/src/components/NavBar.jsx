import React from 'react'
import { Link } from 'react-router-dom'
import { bootstrap } from "bootstrap"
import Logo from "../img/logo.png"
import './Style/navbar.css'
import { FaUserAlt } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'



export const NavBar = () => {
  return (
    <>
      <nav className="navbar px-4 navbar-expand-lg text-uppercase " >

        <Link to="/"  >
          <img className='m-1' src={Logo} alt="Logo" width="auto" height="70"></img>
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse h4 navbar-collapse mt-3 " id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto  mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link flex-fill  mx-4 dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </Link>
              <ul className="dropdown-menu mt-4">
                <li><Link className="dropdown-item " to={"/categoria"}>LINEA BEBÉ</Link></li> {/*Filtrar*/}
                <li><Link className="dropdown-item " to={"/categoria"}>LINEA HOGAR</Link></li>
                <li><Link className="dropdown-item " to={"/categoria"}>ACCESORIOS</Link></li>
                <li><Link className="dropdown-item " to={"/categoria"}>PRODUCTOS A PEDIDO</Link></li>
                <li><Link className="dropdown-item " to={"/categoria"}>VER TODOS</Link></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex container-fluid p-2 " role="search">
            <input className="form-control " type="search" placeholder="Buscar" />
            <button className="btn lupa" type="submit"><BsSearch size={'1.3em'} />{/*Busqueda*/}</button>
          </form>

          <div className='w-25 d-flex justify-content-center'>

            <FaUserAlt className='btn' size={'3.3em'} 
            onClick={() => console.log("usuario")}
            />{/*Usuario*/}

            <FaShoppingCart className='btn' size={'3.3em'} 
             onClick={() => console.log("cart")}
            />{/*carrito*/}
          
          </div>

        </div>

      </nav>
    </>
  )
}
