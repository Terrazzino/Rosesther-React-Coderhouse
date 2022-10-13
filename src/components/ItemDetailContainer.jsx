import React, {useState,useEffect} from 'react';
import {ItemDetails} from './ItemDetails';
import {arrayProducts} from './datos';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = (props)=>{

    const [idProducts,setIdProducts]=useState({});
    let {id}=useParams();
    let ide = parseInt(id);


    const listaProductos = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(arrayProducts);
            reject("No se a encontrado el siguiente dato")
        },3000);
     })

     useEffect(()=>{
        const filtrarId = async()=>{
            try{
                const lista = await listaProductos;
                let filtro = lista.find(item=>item.id===ide);
                setIdProducts(filtro);
            }catch(error){
                console.log(error);
            }
        }
        filtrarId();
    },[id])

    return(
        <div style={{background:"black"}}>
            <ItemDetails filtId={idProducts}/>
        </div>

    )
}

export default ItemDetailContainer;