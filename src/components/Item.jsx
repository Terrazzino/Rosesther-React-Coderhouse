import React from "react";
import '../assets/css/Item.css';
import {Link} from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer'



const Item=(props)=>{
  const detalles =()=>{
    let res = props.productos.find(el=>el.id===props.id);
    // console.log(props.id);
    // console.log(res);
    <ItemDetailContainer filtro={res}/>
  }

  return (

      <div className="item">
        <img src={props.img} alt={props.style + " " +props.container}/>
        <h2>{props.container}</h2>
        <b>{props.liters} {props.unity}</b>
        <h3>${props.price}</h3>
        <Link style={{ textDecoration: 'none' }} to="/productos/details"><button style={{borderRadius:20}} id={props.id} onClick={detalles}>Ver detalles</button></Link>
      </div>

  );
}

export default Item;