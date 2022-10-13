import React from 'react';
import {Item} from './Item';
import '../assets/css/ItemList.css';


export const ItemList=({list})=>{
    const newList = [];
    for(const item in list){
        newList[item]=list[item]
    }

    return(
        <div className="container-products">
            {
                newList.map(item=><Item key={item.id} producto={item}/> )
            }
        </div>
    )
}