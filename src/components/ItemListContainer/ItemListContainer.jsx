import React,{useEffect, useState} from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../mock/data"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos]= useState([])
    const [loader, setLoader]= useState(false)
    const {categoryId}= useParams()

    // useEffect(()=>{
    //     setLoader(true)
    //     getProducts()
    //     .then((res)=> {
    //         if(categoryId){
    //             setProductos(res.filter((item)=> item.category === categoryId))
    //         }else{
    //             setProductos(res)
    //         }
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoader(false))
    // },[categoryId])

    useEffect(()=>{
        setLoader(true)
        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)): collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProductos(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
    },[categoryId])

    return(
        <div className='d-flex flex-column align-items-center flex-wrap'>
            {
                loader ? <img src="../img/loader.gif"  />:<div>
                <h1>{greeting}<span>{categoryId && categoryId}</span></h1>
                <ItemList productos={productos}/>
                
            </div>
            }
            
        </div>
    )
}

export default ItemListContainer