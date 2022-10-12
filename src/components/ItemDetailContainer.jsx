import React from 'react';
import ItemDetails from './ItemDetails';

const ItemDetailContainer = (props)=>{
    let prod=props;
    return(
        <div style={{background:"black"}}>
            <h1>{prod.style}</h1>
            <ItemDetails img={prod.img} style={prod.style} container={prod.container} detail={prod.detail}/>
        </div>

    )
}

export default ItemDetailContainer;