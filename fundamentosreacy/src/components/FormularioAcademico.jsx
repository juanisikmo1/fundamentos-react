import { useState } from "react";

function FormularioAcademico({
  datos,
  setDatos,
  siguiente,
  anterior
}) {

  const [nuevoCurso, setNuevoCurso] = useState("");
  const [errores, setErrores] = useState({});

  const actualizar = (campo, valor) => {

    setDatos((anterior) => ({
      ...anterior,
      [campo]: valor
    }));

    if (errores[campo]) {
      setErrores((anterior) => ({
        ...anterior,
        [campo]: ""
      }));
    }
  };

  const agregarCurso = () => {

    if (!nuevoCurso.trim()) {
      alert("Debe escribir el nombre del curso.");
      return;
    }

    setDatos((anterior) => ({
      ...anterior,
      cursos: [
        ...(anterior.cursos || []),
        nuevoCurso.trim()
      ]
    }));

    setNuevoCurso("");
  };

  const eliminarCurso = (indice) => {
    setDatos((anterior) => ({
      ...anterior,
      cursos: anterior.cursos.filter(
        (_, i) => i !== indice
      )
    }));
  };


  const validar = () => {

    const nuevosErrores = {};

    if (!datos.titulo || !datos.titulo.trim()) {
      nuevosErrores.titulo =
        "Debe ingresar el título obtenido.";
    }

    if (!datos.institucion || !datos.institucion.trim()) {
      nuevosErrores.institucion =
        "Debe ingresar la institución educativa.";
    }

    if (!datos.graduacion) {
      nuevosErrores.graduacion =
        "Debe ingresar el año de graduación.";
    }

    if (!datos.cursos || datos.cursos.length === 0) {
      nuevosErrores.cursos =
        "Debe agregar al menos un curso.";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };


  const continuar = (e) => {
    e.preventDefault();

    if (validar()) {
      siguiente();
    }
  };

  return (
    <div className="formulario">

      <h2>Información Académica</h2>

      <form onSubmit={continuar}>

        <div className="grupo">

          <label>Nivel de Formación</label>

          <select
            value={datos.nivel || ""}
            onChange={(e) =>
              actualizar("nivel", e.target.value)
            }
          >
            <option value="">
              Seleccione un nivel
            </option>

            <option>Técnico</option>
            <option>Tecnólogo</option>
            <option>Profesional</option>
          </select>
        </div>

        <div className="grupo">
          <label>Título Obtenido</label>

          <input
            type="text"
            placeholder="Ingrese el título"
            value={datos.titulo || ""}
            onChange={(e) =>
              actualizar("titulo", e.target.value)
            }
          />
          {errores.titulo && (
            <span className="error">
              {errores.titulo}
            </span>
          )}
        </div>

        <div className="grupo cursos">

          <label>Cursos Realizados</label>

          <div className="agregar-curso">

            <input
              type="text"
              placeholder="Ejemplo: React"
              value={nuevoCurso}
              onChange={(e) =>
                setNuevoCurso(e.target.value)
              }
            />

            <button
              type="button"
              onClick={agregarCurso}
            >
              + Agregar
            </button>

          </div>

          <div className="lista-cursos">

            {(datos.cursos || []).map(
              (curso, indice) => (

                <div
                  className="curso-item"
                  key={indice}
                >

                  <span>
                    ✓ {curso}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      eliminarCurso(indice)
                    }
                  >
                    Eliminar
                  </button>

                </div>

              )
            )}

          </div>

          {errores.cursos && (
            <span className="error">
              {errores.cursos}
            </span>
          )}

        </div>

        <div className="grupo">
          <label>Institución Educativa</label>

          <input
            type="text"
            placeholder="Ingrese la institución"
            value={datos.institucion || ""}
            onChange={(e) =>
              actualizar(
                "institucion",
                e.target.value
              )
            }
          />

          {errores.institucion && (
            <span className="error">
              {errores.institucion}
            </span>
          )}

        </div>

        <div className="grupo">
          <label>Año de Graduación</label>

          <input
            type="number"
            min="1950"
            max="2026"
            placeholder="Ejemplo: 2026"
            value={datos.graduacion || ""}
            onChange={(e) =>
              actualizar(
                "graduacion",
                e.target.value
              )
            }
          />

          {errores.graduacion && (
            <span className="error">
              {errores.graduacion}
            </span>
          )}

        </div>


        <button
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>


        <button type="submit">
          Siguiente
        </button>

      </form>

    </div>
  );
}

export default FormularioAcademico;