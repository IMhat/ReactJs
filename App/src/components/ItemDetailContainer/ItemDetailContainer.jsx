import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)
    
    const {id} = useParams()
    
    useEffect(()=>{
       const db = getFirestore()
       const dbQuery = doc(db, "products", id)
       getDoc(dbQuery)
        .then(resp => setProduct ( { id : resp.id, ...resp.data() } ) )
        .catch((err) => {console.log(err)})
        .finally(() => setLoader(false))
        
    },[id])


    return(
        <div>
            {loader ?
            <h2>Loading...</h2>
            :    

            <ItemDetail product = {product} />

            }
        </div>
        )
    }
    


    

            
            
            
            


