import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

import ItemList from "../ItemList/ItemList"



const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    const {category} = useParams()    



    useEffect(()=>{
        const db = getFirestore()
        
        const queryCollection = collection(db,"products")
        const queryCollectionFilter = category ? query(queryCollection, where("category", "==" , category)):queryCollection
        getDocs(queryCollectionFilter)
            .then (resp => setProducts(resp.docs.map(product => ({ id:product.id, ...product.data() }))))
            .catch((err)=>console.log(err))
            .finally (()=>setLoading(false))           
        
}, [category])
        
return(
    <div className="container">
        {loading ?
        <h2>Loading...</h2>
        :
        <ItemList products={products}/>
        }
    </div>
)
}

export default ItemListContainer
        
                
    

    
        


    
      
