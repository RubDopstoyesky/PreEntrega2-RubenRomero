import React, {useEffect, useState} from 'react'
import { getItem } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loader, setLoader]= useState(false)
    const { id }= useParams()

    useEffect(()=>{
        setLoader(true)
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoader(false))
    },[])
    return (
        <div className='d-flex flex-column align-items-center flex-wrap'>
            {loader ? <img src="../img/loader.gif"  />:<ItemDetail producto={producto}/>}
        </div>
        )
}

export default ItemDetailContainer