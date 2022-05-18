
import Item from '../Item/Item'
import './ItemDetail.css'



const ItemDetail = ({product}) => {
  return (
    <div>
      <Item 
            id = {product.id}
            name= {product.name}
            price={product.price}
            img=  {product.img} />
    </div>

  
  
          
  )
}

export default ItemDetail
      