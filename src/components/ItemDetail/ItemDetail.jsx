import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {
    const [quantityAdded, setQuantityAdded]= useState('')
    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantityAdded(cantidad)
        addItem(producto, cantidad)
    }
    
    return (
        <div className='d-flex flex-column align-items-center'>
            <h3>Detalle de: {producto.name}</h3>
            <img src={producto.img} alt={producto.name}/>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            { quantityAdded === '' ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            : <Link to='/cart' className='btn btn-warning'>Ir al Carrito</Link>}
        </div>
    )
}

export default ItemDetail