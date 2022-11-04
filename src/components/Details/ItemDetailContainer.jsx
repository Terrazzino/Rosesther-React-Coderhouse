import React, {useState,useEffect} from 'react';
import {ItemDetails} from './ItemDetails';
// import {arrayProducts} from '../datos';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

//firebase
import {doc,getDoc} from 'firebase/firestore';
import {db} from '../../utils/firebase';

const ItemDetailContainer = ({onAdd})=>{

    const [load,setLoad]=useState(true);
    const [idProducts,setIdProducts]=useState({});
    let {id}=useParams();
    let ide = id;

    useEffect(()=>{
        const getData = async()=>{
            const docRef = doc(db,"items",ide);
            const response = await getDoc(docRef);
            const result = {
                ...response.data(),
                id:response.id
            };
            setLoad(false);
            setIdProducts(result)
        }
        getData()
    },[ide])

    const totalCount =(number)=>{
        onAdd(number)
    }
    
    return(
        <div style={{background:"black"}}>
            {load?<Spinner style={{marginTop:"8%",width:"100%",height:"5px"}} animation="grow" variant="light" />:<ItemDetails onAdd={totalCount} filtId={idProducts}/>}          
        </div>

    )
}

export default ItemDetailContainer;