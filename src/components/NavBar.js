
const NarBar = ()=>{

    return(
    <div>
        <header>
            <img src="../fotos/logo.ico" alt="logo" className="header__logo"/>
        <h1 className="header__h1"><b>Che Que Rico</b></h1>
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