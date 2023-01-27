import React from 'react';
import compras from '../../img/tuto_compras.png'
import '../Style/realizarpedidos.css'

export const RealizarPedidos = () => {
  return (
    <div>
      <div>
        <img src={compras}></img>
      <ol>
        <li> Navegá por las categorías y hacé click sobre el producto que más te interese.</li>
        <li> Hacé click en el botón comprar para ver los detalles y agregar el producto a tu carrito de compras</li>
        <li> Tu producto fue agregado. Si querés agregar más productos, podés seguir navegando y repetir el proceso.</li>
        <li> Cuando termines, accedé a tu carrito haciendo click en botón del margen superior derecho del sitio.</li>
        <li> Allí aparecerá el resumen de tu compra (producto, cantidad y precio). Verificá que el pedido sea correcto y hacé click en el botón indicado para realizar el pedido.</li>
        <li> Seguí las instrucciones completando los campos enumerados, Luego hacé click en el botón indicado para continuar.</li>
        <li> Serás redirigido al Whatsapp, donde podras coordinar el pago y si es necesario el envio</li>
      </ol>
      </div>
    </div>
  )
}
