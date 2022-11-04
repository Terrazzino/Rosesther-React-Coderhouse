import React,{useState} from 'react';
export const CartContext = React.createContext();

export const CustomProvider = ({children}) =>{
    
    const [productsCart,setProductsCart]=useState([]);
    const isInCart = (id)=>{
        const repeatId = productsCart.some((el)=>el.id===id);
        return repeatId
    }
    const alistarProductos=(producto)=>{
        if(productsCart[0]){

            if(isInCart(producto.id)){
                const indexProduct = productsCart.findIndex((el)=>el.id===producto.id);
                productsCart[indexProduct].cantidad+=producto.cantidad
            }else{
                const newProduct=[...productsCart];
                newProduct.push(producto);
                setProductsCart(newProduct);
            }

            // for(let i=0; i<productsCart.length;i++){
            //     if(productsCart[i].id===producto.id){
            //         let cantidad = producto.cantidad;
            //         const newProduct=[...productsCart];
            //         newProduct[i].cantidad+=cantidad;
            //         setProductsCart(newProduct)
            //     }else{
            //         const newProduct=[...productsCart];
            //         newProduct.push(producto);
            //         setProductsCart(newProduct);
            //     }
            // }
        }else{
            const newProductsCart = productsCart;
            productsCart.push(producto);
            setProductsCart(newProductsCart);
        }  
    }
    const clearProduct = (id) =>{
        console.log("echo",id)
        let newProducst = productsCart.filter(item=>item.id!==id);
        setProductsCart(newProducst)
    }

    const clearAllProducts = ()=>{
        setProductsCart([])
    }

    return(
        <>
        <CartContext.Provider value={{productsCart,alistarProductos,clearProduct,clearAllProducts}}>
            {children}
        </CartContext.Provider>
        </>
    )
}