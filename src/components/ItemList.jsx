import React, {useState,useEffect} from 'react';
import Item from './Item';
import '../assets/css/ItemList.css';


const ItemList=(props)=>{
    // Recibe por props el array de productos y lo guarda en una variable const productos
    const productos = props.productos;
    // Defino una variable de estado para simular una peticion a una api de la lista de productos, el estado inicial indica que se esta cargando el sitio
    const [printProd,setPrintProd]=useState("Cargando el sitio");


    // Creo una variable listProductos donde voy a guardar la respuesta de mi promesa osea el resolve
    let listaProductos;
    const promiseLista = ()=>{
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(props.productos);
                reject("No se a encontrado productos")
            },2000)
        })
    }
    const asincronía = async()=>{
        try{
            // guardo en la variable ya declarada afuera la respuesta de mi promesa y la utilizo para obtener los datos de mi lista de productos
            listaProductos= await promiseLista();
            console.log("Lo tenemos");
            console.log(listaProductos);
            // Obtengo los datos por separado de cada objeto de productos dentro de mi array los envio al componente Item para utilizar sus datos
            setPrintProd(listaProductos.map((items)=><Item productos={productos} id={items.id} img={items.img} style={items.style} container={items.container} liters={items.liters} unity={items.unity} price={items.price} key={items.id} stock={items.stock}/>));
        }catch(err){console.log(err)}
    }

    // Corro la carga de mi peticion una vez que el sitio este cargado
    useEffect(()=>{
        asincronía();
    },[])


    return(
        <div className="container-products">
            {/* Devuelvo la variable de estado que corresponda segun la peticion y el tiempo de respuesta */}
            {printProd}
        </div>
    )
}

export default ItemList;