import React , {useEffect,useState} from 'react';
import '../assets/css/ItemListContainer.css';
import {ItemList} from './ItemList';
import {NavLink,useParams} from 'react-router-dom';
import {arrayProducts} from './datos';

export const ItemListContainer=()=>{     
    const {style} = useParams();
    const [products,setProduct]=useState([]);

    const peticionProductos = ()=>{
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(arrayProducts);
                reject("No existe base de datos")
            },2000)
        })
    }

    const peticionAsincronicaProductos = async()=>{
        try{
            let listProducts = await peticionProductos();
            if(style){
                const filtrado = listProducts.filter(items=>items.style===style);
                setProduct(filtrado);
            }else{
                setProduct(listProducts);
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        peticionAsincronicaProductos();
    },[style]);

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
            <ItemList list={products}/>
        </>
    )
}