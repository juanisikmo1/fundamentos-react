import React from "react";
function FormularioDatos({ datos, setDatos, siguiente }) {

  const [errores, setErrores] = React.useState({});

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

  const validar = () => {

    const nuevosErrores = {};

    if (!datos.nombre || !datos.nombre.trim()) {
      nuevosErrores.nombre = "Debe ingresar su nombre completo.";
    }

    if (datos.edad === "" || datos.edad === undefined) {
      nuevosErrores.edad = "Debe ingresar su edad.";
    } else if (Number(datos.edad) < 0 || Number(datos.edad) > 100) {
      nuevosErrores.edad = "La edad debe estar entre 0 y 100 años.";
    }

    if (!datos.ciudad || !datos.ciudad.trim()) {
      nuevosErrores.ciudad = "Debe ingresar su ciudad.";
    }

    if (!datos.programa || !datos.programa.trim()) {
      nuevosErrores.programa = "Debe ingresar el programa de formación.";
    }

    if (!datos.correo || !datos.correo.trim()) {
      nuevosErrores.correo = "Debe ingresar su correo electrónico.";
    } else if (datos.correo.length > 50) {
      nuevosErrores.correo =
        "El correo no puede superar los 50 caracteres.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)
    ) {
      nuevosErrores.correo =
        "Ingrese un correo electrónico válido.";
    }

    if (!datos.ficha || !datos.ficha.trim()) {
      nuevosErrores.ficha = "Debe ingresar el número de ficha.";
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

      <h2>Registro de Aprendices</h2>

      <form onSubmit={continuar}>

        <div className="grupo">
          <label>Fotografía</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const archivo = e.target.files?.[0];

              if (archivo) {
                const imagenURL =
                  URL.createObjectURL(archivo);

                actualizar("foto", imagenURL);
              }
            }}
          />
        </div>
        <div className="grupo">
          <label>Nombre Completo</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={datos.nombre || ""}
            onChange={(e) =>
              actualizar("nombre", e.target.value)
            }
          />

          {errores.nombre && (
            <span className="error">
              {errores.nombre}
            </span>
          )}
        </div>
        <div className="grupo">
          <label>Edad</label>

          <input
            type="number"
            min="0"
            max="100"
            placeholder="Ingrese su edad"
            value={datos.edad || ""}
            onChange={(e) =>
              actualizar("edad", e.target.value)
            }
          />

          {errores.edad && (
            <span className="error">
              {errores.edad}
            </span>
          )}
        </div>
        <div className="grupo">
          <label>Ciudad</label>

          <input
            type="text"
            placeholder="Ingrese su ciudad"
            value={datos.ciudad || ""}
            onChange={(e) =>
              actualizar("ciudad", e.target.value)
            }
          />

          {errores.ciudad && (
            <span className="error">
              {errores.ciudad}
            </span>
          )}
        </div>
        <div className="grupo">
          <label>Programa de formación</label>

          <input
            type="text"
            placeholder="Ejemplo: ADSO"
            value={datos.programa || ""}
            onChange={(e) =>
              actualizar("programa", e.target.value)
            }
          />

          {errores.programa && (
            <span className="error">
              {errores.programa}
            </span>
          )}
        </div>
        <div className="grupo">
          <label>Correo Electrónico</label>

          <input
            type="email"
            maxLength="50"
            placeholder="correo@sena.edu.co"
            value={datos.correo || ""}
            onChange={(e) =>
              actualizar("correo", e.target.value)
            }
          />

          <small>
            Máximo 50 caracteres
          </small>

          {errores.correo && (
            <span className="error">
              {errores.correo}
            </span>
          )}
        </div>
        <div className="grupo">
          <label>Número de Ficha</label>

          <input
            type="number"
            min="1"
            placeholder="Ingrese la ficha"
            value={datos.ficha || ""}
            onChange={(e) =>
              actualizar("ficha", e.target.value)
            }
          />

          {errores.ficha && (
            <span className="error">
              {errores.ficha}
            </span>
          )}
        </div>
        <div className="grupo">
          <label>Jornada</label>

          <select
            value={datos.jornada || ""}
            onChange={(e) =>
              actualizar("jornada", e.target.value)
            }
          >
            <option value="">
              Seleccione una jornada
            </option>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
            <option>Mixta</option>
          </select>

          {errores.jornada && (
            <span className="error">
              {errores.jornada}
            </span>
          )}
        </div>


        <button type="submit">
          Continuar Registro
        </button>

      </form>
    </div>
  );
}

export default FormularioDatos;