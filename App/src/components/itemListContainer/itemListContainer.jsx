import { ItemCount  } from "../ItemCount/ItemCount"

const ItemListContainer = ({saludo="saludo"})=>{
   
    return(
        <div>
            {saludo}
            
            <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos`)}/>  
        </div>
    )
}
export default ItemListContainer