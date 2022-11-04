import React,{useContext,useState} from 'react';
import {CartContext} from '../Context/CartContext';
import {Link} from 'react-router-dom';
import {db} from '../../utils/firebase';
import {collection,addDoc} from 'firebase/firestore';

export const Cart = () =>{
    const [idCompra,setIdCompra]=useState(false);
    let finishPrice=0;
    const listCart = useContext(CartContext)
    const enviarId = (id) =>{
        listCart.clearProduct(id);
    }
    const clearAll = () =>{
        listCart.clearAllProducts()
    }
    const sendOrder = (sendForm) =>{
        let day = new Date();
        sendForm.preventDefault();
        const sendProducts = {
            buyer:{
                name:sendForm.target[0].value,
                mail:sendForm.target[1].value,
                number:sendForm.target[2].value
            },
            items:listCart.productsCart,
            day:day,
            total:finishPrice
        }
        const queryRef = collection (db,"orders");
        addDoc(queryRef,sendProducts).then((res)=>{
        setIdCompra(res.id); 
        console.log("Agregamos con éxito a nuestra base de datos: ", res.id)});
    }
    if(idCompra){
        clearAll()
        return(
            <>
                <h2 style={{color:"green"}}>Felicidades!</h2>
                <h3 style={{color:"green"}}>Su compra a sido realizada con éxito</h3>
                <h3 style={{marginBottom:"30px"}}>Su numero de identificación o ID de compra es:</h3>
                <b style={{background:"white",color:"black",borderRadius:"10px",padding:"15px",fontSize:"25px"}}>{idCompra}</b>
            </>
        )
    }
    else if(listCart.productsCart[0]){
        // let finishPrice=0;
    
        for(let i=0;i<listCart.productsCart.length;i++){
            finishPrice+=listCart.productsCart[i].price*listCart.productsCart[i].cantidad;
        }
        return(
            <div style={{marginBottom:"30px",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                
                <div style={{width:"70%",marginLeft:"10px"}}>
                <h2 style={{marginBottom:"20px"}}>Lista del Carrito</h2>
                {
                    listCart.productsCart.map(item=>
                        <div style={{width:"70%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(6,1fr)"}}>
                            <b>{item.style}</b>
                            <p>{item.container}</p>
                            <p>{item.cantidad}</p>
                            <p>{item.liters}lts</p>
                            <p>${item.price*item.cantidad}</p>
                            <b><button onClick={()=>enviarId(item.id)} id={item.id} style={{background:"red"}}>BORRAR</button></b>
                        </div>)    
                }
                </div>
                <div style={{width:"30%",marginRight:"50px"}}>
                    <h3>PRECIO FINAL: ${finishPrice}</h3>
                    <form onSubmit={sendOrder} style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
                        <label for="name">Nombre Completo</label>
                        <input required type="text" id="name"></input>
                        <label for="mail">Correo Electrónico</label>
                        <input required type="email" id="mail"></input>
                        <label for="numero">Numero Celular</label>
                        <input required type="tel" id="numero"></input>
                        <div>
                            <button type="submit" style={{background:"green", color:"white"}}>Finalizar Compra</button>
                            <button onClick={()=>clearAll()} style={{background:"red", color:"white"}}>Quitar Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }else{
        return(
            <>
                <h1>Lo lamento, su lista esta vacía!</h1>
                <p>Si desea agregar productos al carrito presione, <Link to="/" style={{textDecoration:"none", color:"orange"}}><b>aquí</b></Link></p>
            </>
        )
    }
}