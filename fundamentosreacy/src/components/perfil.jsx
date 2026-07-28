import foto from '../assets/millos.png'
function Perfil()
{
return(
    <div className="tarjeta">
      <header>
        <h1>JUAN PABLO</h1>
        <h1>PAEZ ACEVEDO</h1>
        <p>Programa de formación: Análisis y Desarrollo de Software</p>
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
    </div>
);

}

export default Perfil