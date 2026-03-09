import "./Produtos.css"
import produtos from "../data/produtos.json"
import Card from "../components/Card"

function Produtos() {
    return(
        <>
        <div id="div-produtos">
            <h1>Produtos</h1>
            <p>
                Na TechSolutions, desenvolvemos produtos tecnológicos voltados para melhorar a eficiência e a produtividade das empresas. 
                Oferecemos sistemas de gestão, ferramentas de automação de processos e soluções de software personalizadas, sempre com foco 
                em desempenho, segurança e facilidade de uso.
                Nossos produtos: 
            </p>
            <ul>
                <li>Sistema de Gestão Empresarial (ERP)</li>
                <li>Plataformas de Automação de Processos</li>
                <li>Ferramentas de Análise de Dados</li>
                <li>Software Personalizados</li>
            </ul>
        </div>

        <div className="container">
        <div className="grid">
        {produtos.map(produto => (
        <Card
        key={produto.id}
        titulo={produto.nome}
        texto={produto.descricao}
        imagem={produto.imagem}
        />
        ))}
        </div>
        </div>
            

            
        </>
    )
}

export default Produtos