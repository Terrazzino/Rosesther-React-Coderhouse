import React,{useContext} from 'react';
import Trolley from '../../assets/images/carrito.png'
import '../../assets/css/NavBar.css'
import {CartContext} from '../Context/CartContext'
import {Link} from 'react-router-dom'


const CartWidget = ()=>{
    const cart = useContext(CartContext)
    let quantityProducts = cart.productsCart.length;
    let quantity=0;
    for(let i=0; i<quantityProducts;i++){
        quantity+=cart.productsCart[i].cantidad
    }

    return(
        <Link to="/cart" style={{textDecoration:"none"}}><p className="count"><img className="trolley" src={Trolley} alt="carrito"/> {quantity}</p></Link>
    );
}

export default CartWidget;