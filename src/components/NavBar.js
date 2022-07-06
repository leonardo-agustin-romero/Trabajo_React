import React from 'react';
import Image from './CartWidget';


const NarBar = ()=>{

    return(
    <div>
        <header>
        <Image />
        <h1 className="header__h1"><b>APRENDIENDO REACT</b></h1>
        <nav className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="zapatilla.html">BAZAR</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="buzos.html">BIJUTERI</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="remeras.html">TECNOLOGIA</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="camperas.html">JUGUETES</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="pantalones.html">BELLEZA</a>
                </li>
            </ul>
        </nav>
        </header>
    </div>)
}

export default NarBar;