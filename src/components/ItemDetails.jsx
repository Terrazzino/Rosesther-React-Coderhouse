import React from 'react';
import ItemCount from './ItemCount';
import '../assets/css/ItemDetails.css';

export const ItemDetails = ({filtId})=>{

    return(
        <div className="ItemDetails">
            <img src={filtId.img} alt={filtId.style+" "+filtId.container}/>
            <div>
                <h1>{filtId.style}</h1>
                <h3>{filtId.container}</h3>
                <div>
                <p>{filtId.details}</p>
                <ItemCount/>
                </div>
            </div>

        </div>
    )
}