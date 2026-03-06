import { Link } from 'react-router-dom'
import "./Menu.css"

function Menu() {
    return(
        <nav id="menu">
            <Link id='txtMenu'  to={"/"}>Home</Link>
            <Link id='txtMenu'  to={"/produtos"}>Produtos</Link>
            <Link id='txtMenu'  to={"/empresa"}>Empresa</Link>
            <Link id='txtMenu'  to={"/contato"}>Contato</Link>
        </nav>
    )
}

export default Menu