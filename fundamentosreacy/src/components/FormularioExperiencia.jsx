import { useState } from "react";

function FormularioExperiencia({ siguiente, anterior }) {
    const actualizar = (campo, valor) => {
        setDatos((anterior) => ({ ...anterior, [campo]: valor }));
    };

    const continuar = (e) => {

        e.preventDefault();

        alert("Experiencia laboral guardada.");

        if (siguiente) {
            siguiente();
        }

    };

    return (

        <div className="formulario">

            <h2>Experiencia Laboral</h2>

            <form onSubmit={continuar}>

                <div className="grupo">
                    <label>Empresa</label>

                    <input
                        type="text"
                        placeholder="Nombre de la empresa"
                        alue={datos.empresa || ""} onChange={(e) => actualizar("empresa", e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Cargo</label>

                    <input
                        type="text"
                        placeholder="Cargo desempeñado"
                        value={datos.cargo || ""} onChange={(e) => actualizar("cargo", e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Tiempo de experiencia</label>

                    <input
                        type="text"
                        placeholder="Ej: 2 años"
                        value={datos.experiencia || ""} onChange={(e) => actualizar("experiencia", e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Funciones desempeñadas</label>

                    <textarea
                        rows="5"
                        placeholder="Describa las funciones realizadas"
                        value={datos.funciones || ""} onChange={(e) => actualizar("funciones", e.target.value)}
                    ></textarea>
                </div>

                <div className="grupo">
                    <label>Habilidades Técnicas</label>

                    <textarea
                        rows="5"
                        placeholder="Ejemplo: Java, React, MySQL..."
                        value={datos.habilidades || ""} onChange={(e) => actualizar("habilidades", e.target.value)}
                    ></textarea>
                </div>

                <button
                    type="button"
                    onClick={anterior}
                >
                    Anterior
                </button>

                <button type="submit">
                    Vista previa
                </button>

            </form>

        </div>

    );

}

export default FormularioExperiencia;