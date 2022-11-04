import React , {useEffect,useState} from 'react';
import '../../assets/css/ItemListContainer.css';
import {ItemList} from './ItemList';
import {NavLink,useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
//firebase
import {collection,getDocs,query,where} from 'firebase/firestore';
import {db} from '../../utils/firebase';

export const ItemListContainer=()=>{ 

    const [products,setProduct]=useState([]);
    const [load,setLoad]=useState(true)
    const {style} = useParams();
    useEffect(()=>{
        const getData = async()=>{
            const queryRef = style? query(collection(db,"items"),where("style","==",style)):query(collection(db,"items"));
            const response = await getDocs(queryRef)
            const documents = response.docs
            const result = documents.map(item=>{
                return({
                    ...item.data(),
                    id:item.id
                })
            });
            setLoad(false);
            setProduct(result)
        }
        getData()
    },[style])
    
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
            {load?<Spinner style={{marginTop:"3%",width:"100%",height:"5px"}} animation="grow" variant="light" />:<ItemList list={products}/>}
        </>
    )
}