import "./Home.css"
import CarouselHome from "../components/Carousel"
import Card from "../components/Card"
import "../styles/style.css"

function Home() {
    return(
        <>
            <div id="div">
                <h1>Home</h1>
            
                <p>
                Na TechSolutions, acreditamos que a tecnologia é a principal força capaz de transformar ideias em resultados 
                concretos. Nosso objetivo é oferecer soluções inovadoras, eficientes e confiáveis que ajudem empresas e pessoas
                a alcançar novos patamares de produtividade e crescimento.
                </p>
            </div>

            <div className="container">

            <CarouselHome/>
            <h2>Informações</h2>
            <div className="grid">
                <Card titulo="Serviço 1" texto="Descrição do serviço" imagem="https://picsum.photos/200?1"/>
                <Card titulo="Serviço 2" texto="Descrição do serviço" imagem="https://picsum.photos/200?2"/>
                <Card titulo="Serviço 3" texto="Descrição do serviço" imagem="https://picsum.photos/200?3"/>
                <Card titulo="Serviço 4" texto="Descrição do serviço" imagem="https://picsum.photos/200?4"/>
                <Card titulo="Serviço 5" texto="Descrição do serviço" imagem="https://picsum.photos/200?5"/>
                <Card titulo="Serviço 6" texto="Descrição do serviço" imagem="https://picsum.photos/200?6"/>
                <Card titulo="Serviço 7" texto="Descrição do serviço" imagem="https://picsum.photos/200?7"/>
                <Card titulo="Serviço 8" texto="Descrição do serviço" imagem="https://picsum.photos/200?8"/>
                <Card titulo="Serviço 9" texto="Descrição do serviço" imagem="https://picsum.photos/200?9"/>
                <Card titulo="Serviço 10" texto="Descrição do serviço" imagem="https://picsum.photos/200?10"/>
                <Card titulo="Serviço 11" texto="Descrição do serviço" imagem="https://picsum.photos/200?11"/>
                <Card titulo="Serviço 12" texto="Descrição do serviço" imagem="https://picsum.photos/200?12"/>
            </div>
            </div>
    
        </>
    )
}

export default Home