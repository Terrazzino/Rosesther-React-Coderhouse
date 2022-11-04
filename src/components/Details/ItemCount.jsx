import React,{useState} from 'react';

const ItemCount =({onAdd,stock,liters})=>{
    const [number,setNumber]=useState(1);
    const agregar=()=>{
      let suma=number+1;
      setNumber(suma)
    }
    const restar=()=>{
      if(number<2){
        setNumber(1)
      }else{
        let resta=number-1;
        setNumber(resta)
      }
    }

    return(
          <div style={{background:"white",borderRadius:10, padding:5,width:"50%", margin:"auto"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",background:"white",borderRadius:10, padding:5}}>
                <button style={{width:30,height:30, borderRadius:"50%"}} onClick={restar}>-</button>
                <b style={{color:"black",fontSize:20}}>{number}</b>
                <button disabled={liters*number>=stock} style={{width:30,height:30, borderRadius:"50%"}} onClick={agregar}>+</button>
            </div>
            <button onClick={()=>onAdd(number)} style={{width:"max-content",height:30, borderRadius:10, margin:"auto"}}>Agregar al Carrito</button>
          </div>

    )
}

export default ItemCount;