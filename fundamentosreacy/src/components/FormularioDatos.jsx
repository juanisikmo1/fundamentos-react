import { useState } from 'react'

function FormularioDatos({ siguiente }) {
  const actualizar = (campo, valor) => {
    setDatos((anterior) => ({ ...anterior, [campo]: valor }));
  };
  
//Funcion del boton continuar
  const continuar = (e) => {

    e.preventDefault()
    alert("Los datos fueron capturados correctamente");
    if (siguiente){
        siguiente();
    }
  };

  return (
    <div className="formulario">

        <h2>Registro de Aprendices</h2>

        <form onSubmit={continuar}>

            <div className="grupo">
                <label>Fotografía</label>
                <input type="file" accept="image/*"
                 onChange={(e) => setFoto(e.target.files[0])}/>
            </div>

            <div className="grupo">
                <label>Nombre Completo</label>
                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={datos.nombre || ""} onChange={(e) => actualizar("nombre", e.target.value)} required
                />
            </div>

            <div className="grupo">
                <label>Edad</label>
                <input
                    type="number"
                    placeholder="Ingrese su edad"
                    value={datos.edad || ""} onChange={(e) => actualizar("edad", e.target.value)} required
                />
            </div>

            <div className="grupo">
                <label>Ciudad</label>
                <input
                    type="text"
                    placeholder="Ingrese su ciudad"
                    value={datos.ciudad || ""} onChange={(e) => actualizar("ciudad", e.target.value)} required
                />
            </div>

            <div className="grupo">
                <label>Programa de Formación</label>
                <input
                    type="text"
                    placeholder="Ejemplo: ADSO"
                    value={datos.programa || ""} onChange={(e) => actualizar("programa", e.target.value)} required
                />
            </div>

            <div className="grupo">
                <label>Correo Electrónico</label>
                <input
                    type="email"
                    placeholder="correo@misena.edu.co"
                    value={datos.correo || ""} onChange={(e) => actualizar("correo", e.target.value)} required
                />
            </div>

            <div className="grupo">
                <label>Número de Ficha</label>
                <input
                    type="number"
                    placeholder="Ingrese la ficha"
                    value={datos.ficha || ""} onChange={(e) => actualizar("ficha", e.target.value)} required
                />
            </div>

            <div className="grupo">
                <label>Jornada</label>

                <select value={datos.jornada || "Mañana"} onChange={(e) => actualizar("jornada", e.target.value)}>
                    <option>Mañana</option>
                    <option>Tarde</option>
                    <option>Noche</option>
                    <option>Mixta</option>
                </select>

            </div>

            <button type="submit">
                Continuar registro
            </button>
        </form>
    </div>
  )
}

export default FormularioDatos