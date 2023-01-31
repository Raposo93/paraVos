import React from 'react';
import compras from '../../img/tuto_compras.png'
import '../Style/realizarpedidos.css'
import { Link } from "react-router-dom"

export const RealizarPedidos = () => {
  return (
    <main>
      <h2 className='h2-pedido'> COMO REALIZAR MI PEDIDO </h2>
      <div className='contenedor_pasos_pedido'>
        <img className='img_realizar-pedido' src={compras}></img>
      <ol>
        <li className='pasos_pedido'> 1 - Navegá por las categorías y hacé click sobre el producto que más te interese.</li>
        <li className='pasos_pedido'> 2 - Hacé click en el botón comprar para ver los detalles y agregar el producto a tu carrito de compras</li>
        <li className='pasos_pedido'> 3 - Tu producto fue agregado. Si querés agregar más productos, podés seguir navegando y repetir el proceso.</li>
        <li className='pasos_pedido'> 4 - Cuando termines, accedé a tu carrito haciendo click en botón del margen superior derecho del sitio.</li>
        <li className='pasos_pedido'> 5 - Allí aparecerá el resumen de tu compra (producto, cantidad y precio). Verificá que el pedido sea correcto y hacé click en el botón indicado para realizar el pedido.</li>
        <li className='pasos_pedido'> 6 - Seguí las instrucciones completando los campos enumerados, Luego hacé click en el botón indicado para continuar.</li>
        <li className='pasos_pedido'> 7 - Serás redirigido al Whatsapp, donde podras coordinar el pago y si es necesario el envio</li>
      </ol>
      </div>
     <Link to="/"> <button className='boton'> VOLVER</button> </Link>
    </main>
  )
}
