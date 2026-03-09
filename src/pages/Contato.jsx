import { useState } from "react"
import "./Contato.css"
import "../styles/style.css"

function Contato() {
    const[nome,setNome] = useState("")
    const[email,setEmail] = useState("")
    const[mensagem,setMensagem] = useState("")

    function enviarFormulario(e){
        e.preventDefault()
        alert("Mensagem enviada com sucesso!")
    }

    return(
        <>
        <div id="div-contato">
            <h1>Contato</h1>
            
            <ul>
                <li><img id="logo-zap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1280px-WhatsApp.svg.png" alt="" />(21)99999-8888</li>
                <li><img id="logo-email" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="" />TechSolutions@email.com</li>
                <li><img id="logo-insta" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" />@TechSolutions_insta</li>
                <li><img id="logo-pin" src="https://cdn-icons-png.flaticon.com/512/61/61942.png" alt="" />Rua Lorem ipsum, 0, sit dolor amet, Rio de Janeiro, RJ</li>
            </ul>

            <div className="div-form">
                <h2>Fale conosco ;)</h2>
                <form onSubmit={enviarFormulario} className="form">
                    <input
                    type="text"
                    placeholder="Nome"
                    onChange={(e)=>setNome(e.target.value)}
                    required
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                    <textarea
                    placeholder="Mensagem"
                    onChange={(e)=>setMensagem(e.target.value)}
                    required
                    />
                    <button type="submit">
                    Enviar
                    </button>
                </form>
            </div>
        </div>
        

        </>
    )
}

export default Contato