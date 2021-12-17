import React from 'react'
import { useSelector } from 'react-redux'
import { cartPrice } from './Total';


const CartPrice = () => {
    const totalPrice = useSelector(cartPrice);
    return (
        <div>
            {totalPrice}đ
        </div>
    )
}

export default CartPrice;