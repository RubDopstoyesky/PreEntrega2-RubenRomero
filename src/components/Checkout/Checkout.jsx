import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { db } from '../../services/firebase'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const[user, setUser]=useState({})
    const[valiteEmail, setValidateEmail]= useState('')
    const[orderId, setOrderId]= useState('')
    const {cart, total, clear}= useContext(CartContext)
    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name && !user.phone){
            alert('Campos Obligatorios')
        }else{
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas,order)
            .then((res)=> {
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
    return (
        <div>
            {orderId != ''
            ?<div>
                <h2>Felicidades su compra se ha registrado con exito!</h2>
                <h5>Su ID de registro es: {orderId}</h5>
            </div>
            :<div>
            <h2>Terminar Compra</h2>
            <h5>Por favor llene sus datos</h5>
            <form onSubmit={finalizarCompra}>
                <div className='mb-3'>
                    <label className='form-label'> Nombre completo:</label>
                    <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Numero telefonico:</label>
                    <input className='form-control' onChange={datosComprador} type='number' placeholder='+523121035890' name='phone' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Correo electronico:</label>
                    <input className='form-control' onChange={datosComprador} type='email' placeholder='ejemplo@ejemplo.com' name='mail' required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Repetir correo electronico:</label>
                    <input className='form-control' type='email' placeholder='ejemplo@ejemplo.com' name='mail' onChange={((e)=>setValidateEmail(e.target.value))} required/>
                </div>
                <button className='btn btn-dark' type='submit' disabled={valiteEmail !== user.mail}>Generar Orden</button>
            </form>
        </div>}
        </div>
    )
}

export default Checkout