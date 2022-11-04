import React,{useState} from 'react';

export const Inicio=()=>{

    const[name,setName]=useState("");

    const envio = (event)=>{
        event.preventDefault();
        console.log("Enviado con exito");
        setName(event.target[0].value)
    }

    return(
        <>
            <h1>ROSESTHER</h1>
            <h3>Tenes una pregunta, y nosotros la respuesta!</h3>
            <b style={{fontSize:"40px",color:"#ce9b3a"}}>¡¡¡ SÍ HERMANO !!!</b>
            <p style={{fontSize:"20px"}}>Estas en el sitio indicado, el sabor de lo bueno le pertenece <br/> a esta familia y lo quiere compartir con vos!</p>
            <form onSubmit={envio}>
                <input type="text" placeholder='Como te llamamos?'/>
                <button type="submit">ENVIAR</button>
            </form>
            <h2>{name}</h2>
        </>
    )
}