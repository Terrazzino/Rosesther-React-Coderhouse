import React from "react";
import '../assets/css/Item.css';
import ItemDetailContainer from './ItemDetailContainer'



const Item=(props)=>{

  const detalles =()=>{
    let res = props.productos.find(el=>el.id===props.id);
    let resFilter=[res];
    resFilter.map((item)=><ItemDetailContainer img={item.img} style={item.style} container={item.container} detail={item.detail} />)
  }

  return (

      <div className="item">
        <img src={props.img} alt={props.style + " " +props.container}/>
        <h2>{props.container}</h2>
        <b>{props.liters} {props.unity}</b>
        <h3>${props.price}</h3>
        <button style={{borderRadius:20}} id={props.id} onClick={detalles}>Ver detalles</button>
      </div>

  );
}

export default Item;