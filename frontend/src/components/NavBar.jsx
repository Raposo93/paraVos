import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
import './Style/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../reducers/categoryReducer'
import { Carrito } from '../components'


export const NavBar = () => {

  const [showCart, setShowCart] = useState(false)
  const [value, setValue] = useState("")

  const hangleInputChange = ({ target }) => {
    setValue(target.value)
  }

  const dispatch = useDispatch()

  return (
    <div>

      <Navbar className='navbar-main' expand="lg">
        <Container className='navbar-container'>
          <Navbar.Brand href="#home">
            <Link className='main-img' to="/"  >
              <img className='m-1' src={Logo} alt="Logo" height="70"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-nav">
              <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">

                <NavDropdown.Item className='navbar-dropdown'>
                  <Link onClick={() => { dispatch(changeCategory("Hogar")) }}
                    className="dropdown-item " to={"/categorias"}
                  >LINEA HOGAR
                  </Link>
                  </NavDropdown.Item>
                <NavDropdown.Item className='navbar-dropdown'>
                  <Link onClick={() => { dispatch(changeCategory("Linea Bebe")) }}
                    className="dropdown-item " to={"/categorias"}
                  >LINEA BEBÉ
                  </Link>
                  </NavDropdown.Item>
                <NavDropdown.Item className='navbar-dropdown'>
                  <Link onClick={() => { dispatch(changeCategory("Accesorio")) }}
                    className="dropdown-item" to={"/categorias"}
                  >ACCESORIOS
                  </Link>
                  </NavDropdown.Item>
                <NavDropdown.Item className='navbar-dropdown'>
                  <Link onClick={() => { dispatch(changeCategory("Todos")) }}
                    className="dropdown-item" to={"/categorias"}
                  >TODOS LOS PRODUCTOS
                  </Link>
                  </NavDropdown.Item>

              </NavDropdown>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar Producto"
                className="me-2"
                aria-label="Search"
                value={value}
                onChange={hangleInputChange}
              />
            </Form>

            <Link role="button" aria-expanded="false">
              <FaShoppingCart onClick={() => setShowCart(true)} className='btn navbar-cart' size={'3.5em'} />
            </Link>

            <ul className={`${showCart ? "" : "d-none"}`}>

              <div className='carrito-fondo w-100 h-100'>

                <li onMouseLeave={() => setShowCart(false)} >

                  <Carrito />

                </li> {/*carrito*/}

              </div>

            </ul>

          </Navbar.Collapse>

        </Container>
      </Navbar>


    </div>
  )
}

