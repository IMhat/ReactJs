import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <NavLink to="/cart" className="bCarrito"><BsCart2/></NavLink>
    
  )
}

export default CartWidget
    

