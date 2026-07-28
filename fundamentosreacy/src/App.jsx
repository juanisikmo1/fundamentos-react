import { useState } from 'react'
import foto from './assets/millos.png'
import Titulo from "./components/header"
import Dbasicos from "./components/perfil"
import Cursos from "./components/cursos"
import Footer from "./components/footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo />

      <div className="contenedor">
        <div className="perfil">
          <Dbasicos />
        </div>

        <div className="cursos">
          <Cursos />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
