import React from 'react';
import Trolley from '../assets/images/carrito.png'
import '../assets/css/NavBar.css'


const CartWidget = ()=>{
    let count= 0;
    return(
        <p className="count"><img className="trolley" src={Trolley}/> {count}</p>
    );
}

export default CartWidget;