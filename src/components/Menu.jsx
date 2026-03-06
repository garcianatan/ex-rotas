import { Link } from 'react-router-dom'

function Menu() {
    return(
        <nav style={{background: "#333", padding: "10px"}}>
            <Link style={{color: "#fff", marginRight: "20px"}} to={"/"}>Home</Link>
            <Link style={{color: "#fff", marginRight: "20px"}} to={"/produtos"}>Produtos</Link>
            <Link style={{color: "#fff", marginRight: "20px"}} to={"/empresa"}>Empresa</Link>
            <Link style={{color: "#fff", marginRight: "20px"}} to={"/contato"}>Contato</Link>
        </nav>
    )
}

export default Menu