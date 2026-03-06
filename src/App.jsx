import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produto" element={<Produtos />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
