import React from 'react';
import ItemCount from './ItemCount'

const ItemDetails = (props)=>{
    console.log(props)
    return(
        <div className="ItemDetails" style={{background:"black",color:"white",width:"80%", margin:"auto"}}>
            <img src={props.img} alt={props.style+" "+props.container}/>
            <div>
                <h1>{props.style}</h1>
                <h3>{props.container}</h3>
                <p>{props.details}</p>
            </div>
            <h5>COMPRAR</h5>
            <ItemCount/>
        </div>
    )
};

export default ItemDetails;