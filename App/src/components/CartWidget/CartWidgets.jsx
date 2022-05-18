import  Cart  from "../img/logo1.png";
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {

  return (
    <Link to="/cart">
      <li className="a bCarrito"><Cart/></li>
    </Link>
  )
}

export default CartWidget