import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial)
    const suma = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const resta = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div className='d-flex flex-column align-items-center justify-content-between'>
            <div>
                <Button variant="warning" onClick={resta}>-</Button>
                <span className='btn'>{count}</span>
                <Button variant="warning" onClick={suma}>+</Button>
            </div>
            <Button className='mt-1' variant="warning" disabled={count === 0} onClick={()=>onAdd(count)}>Comprar</Button>
        </div>
    )
}

export default ItemCount