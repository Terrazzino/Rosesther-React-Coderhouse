import React from 'react';
import '../../assets/css/NavBar.css'

const NavBar = (props)=>{
    return(
        <>
            <p className="link-nav">{props.name}</p>
        </>
    );
}

export default NavBar;