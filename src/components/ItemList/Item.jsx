import React from "react";
import '../../assets/css/Item.css';
import {Link} from 'react-router-dom';

export const Item=({producto})=>{
  return (
      <div className="item">
        <img src={producto.img} alt={producto.style + " " +producto.container}/>
        <h2>{producto.container}</h2>
        <b>{producto.liters} {producto.unity}</b>
        <h3>${producto.price}</h3>
        <Link to={`/item/${producto.id}`}>
          <button style={{borderRadius:20}} id={producto.id} >Ver detalles</button>
        </Link>
      </div>
  );
}