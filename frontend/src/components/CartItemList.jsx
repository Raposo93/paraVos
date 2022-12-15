import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart } from '../reducers/cartReducer';



export const CartItemList = () => {
  const dispatch = useDispatch();
  const newList = useSelector(state => state.cart);
  console.log(newList)

  return (
    <div className='d-flex flex-column'>
      <div className="">

        { newList.map((item) => (
        <div className="d-flex">

        <img className="" src={item.image} alt="Card image cap" />
        
        <p className='' key={item.id}> {item.name} </p>

        <p>{item.price}</p>
        </div>
        
        ))}
      </div>
    </div>
  )
}
