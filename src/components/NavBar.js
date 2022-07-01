import React from 'react';
import Image from './CartWidget';



const NarBar = ()=>{

    return(
    <div>
        <header>
        <Image  />
        <h1 className="header__h1"><b>APRENDIENDO REACT</b></h1>
        <nav className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="index.html">HOME</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="imagenes.html">IMAGENES</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="nosotros.html">NOSOTROS</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="producto.html">PRODUCTOS</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="contacto.html">CONTACTO</a>
                </li>
            </ul>
        </nav>
        </header>
    </div>)
}

export default NarBar;