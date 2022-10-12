import React from 'react';
import '../assets/css/ItemListContainer.css'
import ItemList from './ItemList'



const ItemListContainer=(props)=>{  
    // recibimos el props equivalente al array de productos, lo guardamos en una variable y lo enviamos por props al siguiente componente   
    const productos = props.productos;

    return(
        <>
            <h2 className="speech" >EL SABOR DE LO BUENO</h2>  
            {/* Enviamos el array de productos al componente ItemList */}
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer;