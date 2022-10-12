import React,{useState} from 'react';


const ItemCount =(props)=>{
    const [number,setNumber]=useState(0);

    const agregar=()=>{
      let suma=number+1;
      setNumber(suma)
    }
    const restar=()=>{
      if(number<1){
        setNumber(0)
      }else{
        let resta=number-1;
        setNumber(resta)
      }
    }


    return(
          <div style={{background:"white",borderRadius:10, padding:5}}>
            <div style={{display:"flex",justifyContent:"space-evenly",background:"white",borderRadius:10, padding:5}}>
                <button style={{width:30,height:30, borderRadius:"50%"}} onClick={restar}>-</button>
                <b style={{color:"black",fontSize:20}}>{number}</b>
                <button style={{width:30,height:30, borderRadius:"50%"}} onClick={agregar}>+</button>
            </div>
            <button>Agregar al Carrito</button>
          </div>

    )
}

export default ItemCount;