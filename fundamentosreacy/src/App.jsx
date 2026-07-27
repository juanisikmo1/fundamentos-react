import { useState } from 'react'
import foto from './assets/millos.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="tarjeta">
        <header>
          <h1>JUAN PABLO PAEZ ACEVEDO</h1>
          <p>Programa de formación: Análisis y Desarrollo de Software</p>
          <h2>HOJA DE VIDA APRENDIZ</h2>
        </header>

        <img src={foto} alt="Foto de perfil" className="foto" />

        <section>
          <h2>Información Personal</h2>
          <p><strong>Nombre:</strong> Juan Páez</p>
          <p><strong>Edad:</strong> 19 años</p>
          <p><strong>Ciudad:</strong> Bogotá</p>
          <p><strong>Correo:</strong> juanpablo1234.paez@gmail.com</p>
          <p><strong>Programa:</strong> Análisis y Desarrollo de Software</p>
        </section>

        <section>
          <h2>Cursos Realizados</h2>
          <ul>
            <li>Fundamentos de Programación</li>
            <li>HTML y CSS</li>
            <li>JavaScript Básico</li>
          </ul>
        </section>

        <section>
          <h2>Objetivo Profesional</h2>
          <p>
            Deseo aprender React porque es una de las tecnologías más utilizadas
            para el desarrollo de aplicaciones web modernas. Me gustaría
            utilizarlo en proyectos empresariales, plataformas educativas y
            aplicaciones que ofrezcan una excelente experiencia de usuario.
          </p>
        </section>

        <button>Conoce más sobre mí</button>
      </div>
    </div>
  )
}

export default App
