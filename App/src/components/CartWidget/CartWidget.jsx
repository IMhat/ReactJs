import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

import { useCartContext } from "../../Context/CartContext";

import "./CartWidget.css"

const CartWidget = () => {
  const {totalQty} = useCartContext()
  
  return (
    <NavLink to="/cart" >
      <BsCart2 className="iconCart"/>
      {totalQty() !== 0 && totalQty()}
      
    </NavLink>
    
  )
}

export default CartWidget
    

