import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { getFetch } from "../helpers/getFetch"



const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()    

    useEffect(()=>{
        if(category){
            getFetch()
                .then(resp => setProducts(resp.filter((prods)=>prods.category === category)))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))
        }else{
            getFetch()
                .then(resp => setProducts(resp))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))

        }
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