import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contato from "./pages/Contato"
import Empresa from "./pages/Empresa"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
