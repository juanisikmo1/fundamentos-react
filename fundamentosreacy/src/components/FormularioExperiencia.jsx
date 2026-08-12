import { useState } from "react";

function FormularioExperiencia({ datos, setDatos, anterior, siguiente }) {

  const [nuevaExperiencia, setNuevaExperiencia] = useState({
    empresa: "",
    cargo: "",
    tiempo: "",
    funciones: "",
    habilidades: ""
  });

  const actualizar = (campo, valor) => {
    setNuevaExperiencia((anterior) => ({
      ...anterior,
      [campo]: valor
    }));
  };

  const agregarExperiencia = () => {

    if (
      !nuevaExperiencia.empresa.trim() ||
      !nuevaExperiencia.cargo.trim()
    ) {
      alert("Ingrese al menos la empresa y el cargo");
      return;
    }

    setDatos((anterior) => [
      ...anterior,
      nuevaExperiencia
    ]);

    setNuevaExperiencia({
      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: "",
      habilidades: ""
    });
  };

  const eliminarExperiencia = (indice) => {
    setDatos((anterior) =>
      anterior.filter((_, i) => i !== indice)
    );
  };

  const continuar = (e) => {
    e.preventDefault();

    if (datos.length === 0) {
      alert("Debe agregar al menos una experiencia laboral");
      return;
    }

    siguiente();
  };

  return (
    <div className="formulario">

      <h2>Experiencia Laboral</h2>

      <form onSubmit={continuar}>

        <div className="grupo">
          <label>Empresa</label>

          <input
            type="text"
            placeholder="Ingrese la empresa"
            value={nuevaExperiencia.empresa}
            onChange={(e) =>
              actualizar("empresa", e.target.value)
            }
          />
        </div>

        <div className="grupo">
          <label>Cargo</label>

          <input
            type="text"
            placeholder="Ingrese el cargo"
            value={nuevaExperiencia.cargo}
            onChange={(e) =>
              actualizar("cargo", e.target.value)
            }
          />
        </div>

        <div className="grupo">
          <label>Tiempo de Experiencia</label>

          <input
            type="text"
            placeholder="Ejemplo: 1 año"
            value={nuevaExperiencia.tiempo}
            onChange={(e) =>
              actualizar("tiempo", e.target.value)
            }
          />
        </div>

        <div className="grupo">
          <label>Funciones Desempeñadas</label>

          <input
            type="text"
            placeholder="Escriba las funciones"
            value={nuevaExperiencia.funciones}
            onChange={(e) =>
              actualizar("funciones", e.target.value)
            }
          />
        </div>

        <div className="grupo">
          <label>Habilidades Técnicas</label>

          <input
            type="text"
            placeholder="Ejemplo: React, JavaScript, HTML..."
            value={nuevaExperiencia.habilidades}
            onChange={(e) =>
              actualizar("habilidades", e.target.value)
            }
          />
        </div>

        <button
          type="button"
          onClick={agregarExperiencia}
        >
          + Agregar Experiencia
        </button>

        <div className="lista-experiencias">

          <h3>Experiencias agregadas</h3>

          {datos.length === 0 ? (
            <p>No hay experiencias registradas.</p>
          ) : (
            datos.map((experiencia, indice) => (

              <div
                className="experiencia-item"
                key={indice}
              >

                <h4>
                  {experiencia.empresa}
                </h4>

                <p>
                  <strong>Cargo:</strong>{" "}
                  {experiencia.cargo}
                </p>

                <p>
                  <strong>Tiempo:</strong>{" "}
                  {experiencia.tiempo}
                </p>

                <p>
                  <strong>Funciones:</strong>{" "}
                  {experiencia.funciones}
                </p>

                <p>
                  <strong>Habilidades:</strong>{" "}
                  {experiencia.habilidades}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    eliminarExperiencia(indice)
                  }
                >
                  Eliminar
                </button>

              </div>

            ))
          )}

        </div>

        <div className="botones">

          <button
            type="button"
            onClick={anterior}
          >
            Anterior
          </button>

          <button type="submit">
            Vista Previa
          </button>

        </div>

      </form>

    </div>
  );
}

export default FormularioExperiencia;