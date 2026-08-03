import { useState } from "react";

function FormularioExperiencia({ siguiente, anterior }) {

    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [funciones, setFunciones] = useState("");
    const [habilidades, setHabilidades] = useState("");

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
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Cargo</label>

                    <input
                        type="text"
                        placeholder="Cargo desempeñado"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Tiempo de experiencia</label>

                    <input
                        type="text"
                        placeholder="Ej: 2 años"
                        value={tiempo}
                        onChange={(e) => setTiempo(e.target.value)}
                    />
                </div>

                <div className="grupo">
                    <label>Funciones desempeñadas</label>

                    <textarea
                        rows="5"
                        placeholder="Describa las funciones realizadas"
                        value={funciones}
                        onChange={(e) => setFunciones(e.target.value)}
                    ></textarea>
                </div>

                <div className="grupo">
                    <label>Habilidades Técnicas</label>

                    <textarea
                        rows="5"
                        placeholder="Ejemplo: Java, React, MySQL..."
                        value={habilidades}
                        onChange={(e) => setHabilidades(e.target.value)}
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