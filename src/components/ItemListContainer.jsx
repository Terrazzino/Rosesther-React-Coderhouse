import React from 'react';
import '../assets/css/ItemListContainer.css'
import ItemList from './ItemList'
import {NavLink,useParams} from 'react-router-dom'



const ItemListContainer=(props)=>{  
    // recibimos el props equivalente al array de productos, lo guardamos en una variable y lo enviamos por props al siguiente componente   
    const productos = props.productos;
    const {style} = useParams();
    return(
        <>
            <h2 className="speech" >EL SABOR DE LO BUENO</h2> 
            <p>Categorías:</p> 
            <ul style={{textDecoration:"none",listStyle:"none", display:"flex", flexDirection:"row",justifyContent:"space-evenly"}}>
                <li><NavLink style={{textDecoration:"none",fontSize:20}} className={({isActive})=>isActive===true?'activa':'desactiva'} to="/category/Dorada Pampeana">Dorada Pampeana</NavLink></li>
                <li><NavLink style={{textDecoration:"none",fontSize:20}} className={({isActive})=>isActive===true?'activa':'desactiva'} to="/category/Golden">Golden</NavLink></li>
                <li><NavLink style={{textDecoration:"none",fontSize:20}} className={({isActive})=>isActive===true?'activa':'desactiva'} to="/category/Scottish">Scottish</NavLink></li>
                <li><NavLink style={{textDecoration:"none",fontSize:20}} className={({isActive})=>isActive===true?'activa':'desactiva'} to="/category/Porter">Porter</NavLink></li>
                <li><NavLink style={{textDecoration:"none",fontSize:20}} className={({isActive})=>isActive===true?'activa':'desactiva'} to="/category/Ipa">Ipa</NavLink></li>
            </ul>
            {/* Enviamos el array de productos al componente ItemList */}
            <ItemList productos={productos} filtro={style}/>
        </>
    )
}

export default ItemListContainer;