import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {

  return (
    <Link to="/cart">
      <li className="a bCarrito"><BsCart2/></li>
    </Link>
  )
}

export default CartWidget