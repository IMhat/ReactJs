import CartWidget from "../CartWidget/CartWidgets";
import logo from '../img/logo1.png';
import "./Navbar.css"


function Navbar() {
    return(
        <>
        <img className="logo" src="{logo}" alt="logo" />

        <nav>
            <ul className="Links">
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">Products</a> </li>
                <li> <a href="#">FAQ</a> </li>

            </ul>
        </nav>

        <CartWidget/>


        </>
    )
}

export default Navbar