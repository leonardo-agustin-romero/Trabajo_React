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
                    <a className="header__nav__ul--li--a" href="zapatilla.html">ZAPATILLA</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="buzos.html">BUZOS</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="remeras.html">REMERAS</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="camperas.html">CAMPERAS</a>
                </li>
                <li className="header__nav__ul--li">
                    <a className="header__nav__ul--li--a" href="pantalones.html">PANTALONES</a>
                </li>
            </ul>
        </nav>
        </header>
    </div>)
}

export default NarBar;