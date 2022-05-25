import { useCartContext } from "../../Context/CartContext"



export const Cart = () => {
  const{ cartList, deleteCart} = useCartContext()

  return (
    <div>
      {cartList.map(product => <li> {product.name} - ${product.price} - {product.quantity} </li>)}
      <button onClick={deleteCart}>Vaciar Carrito</button>
    </div>
  )
}
