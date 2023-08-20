import React, { useContext } from 'react'
import {BsCart4} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'
import { CartContext } from '../../context/CartContext'
const CartWidget = () =>{
    const {cartQuantity} = useContext(CartContext)
    return(
<div>
    <BsCart4 fontSize={'2.0rem'}color='black'/>
    {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
</div>
    )
}

export default CartWidget