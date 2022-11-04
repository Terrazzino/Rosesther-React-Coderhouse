import React,{useState,useContext} from 'react';
import ItemCount from './ItemCount';
import '../../assets/css/ItemDetails.css';
import {Link}  from 'react-router-dom';
import {CartContext} from '../Context/CartContext'

export const ItemDetails = ({onAdd , filtId})=>{
    const [count, setCount]=useState(0);
    const value = useContext(CartContext);
    const totalCount=(number)=>{
        onAdd(number)
        setCount(number);
        value.alistarProductos({img:filtId.img,id:filtId.id,style:filtId.style,container:filtId.container,liters:filtId.liters,price:filtId.price,cantidad:number});
      }

      let botonFinish;
      let botonAdd;
      if(count>0){
        botonFinish=<Link to="/cart"><button style={{background:"green",color:"white"}}>Terminar Compra</button></Link>
        botonAdd = <Link to="/"><button style={{background:"blue", color:"white"}}>Seguir agregando</button></Link>
      }else{
        botonFinish=<ItemCount onAdd={totalCount} stock={filtId.stock} liters={filtId.liters}/>
      }

    return(
        <div className="ItemDetails">
            <img src={filtId.img} alt={filtId.style+" "+filtId.container}/>
            <div>
                <h1>{filtId.style}</h1>
                <h3>{filtId.container} {filtId.liters}lts</h3>
                <div>
                <p>{filtId.details}</p>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                {botonFinish}
                {botonAdd}
                </div>
                </div>
            </div>
        </div>
    )
}