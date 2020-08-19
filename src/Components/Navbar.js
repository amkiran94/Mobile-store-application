import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mobilelogo from '../mobilelogo.png'
const imageStyle ={
    width:'40px',
    height:'40px',
    color:'r'
}
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
                <Link to='/' className="text-decoration-none">
                    <img src={mobilelogo} alt="store" className="navbar-brand" style={imageStyle}/><span className="text-light font-weight-bold">Mobile Store</span>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5 list-unstyled">
                        <Link to="/" className="nav-link text-light font-weight-bold">
                            Products
                       </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="btn shadow-none bg-primary text-light font-weight-bold">
                        <i className="fas fa-cart-plus mr-2 text-light"></i>
                       My Cart</button>
                </Link>
            </nav>
        )
    }
}
export default Navbar
