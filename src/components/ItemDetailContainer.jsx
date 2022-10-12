import React from 'react';
import ItemDetails from './ItemDetails';

const ItemDetailContainer = (props)=>{
    return(
        <div style={{background:"black"}}>
            <ItemDetails img={props.img} style={props.style} container={props.container} detail={props.detail}/>
        </div>

    )
}

export default ItemDetailContainer;