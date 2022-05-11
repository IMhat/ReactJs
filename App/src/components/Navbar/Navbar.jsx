import CartWidget from "../CartWidget/CartWidgets";
import logo from '../img/logo1.png';
import "./Navbar.css"


function Navbar() {
    return(
        <div className="contNav">
            <div className="navbar">
                <img className="logo" src={logo} alt="logo"/>

                <ul className="navLinks">
                    <li> <a href="#">Home</a></li>
                    <li> <a href="#">Products</a></li>
                    <li> <a href="#">FAQ</a></li>
                    <a  href="#"><button className="bNeon">Contact</button></a>
                </ul>
                <CartWidget/>


            </div>
    </div>
    )
}

export default Navbar