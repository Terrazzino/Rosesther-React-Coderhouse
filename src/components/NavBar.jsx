import React from 'react';
import '../assets/css/NavBar.css'

const NavBar = (props)=>{
    return(
        <>
            <a href="#" className="link-nav">{props.name}</a>
        </>
    );
}

export default NavBar;