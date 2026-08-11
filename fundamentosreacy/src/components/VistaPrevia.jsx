function VistaPrevia({
  datos = {},
  academico = {},
  experiencia = {},
  anterior
}) {
  const campo = (etiqueta, valor) => (
    <p>
      <strong>{etiqueta}:</strong> {valor || "No registrado"}
    </p>
  );

  return (
    <div className="formulario vista-previa">

      <h2>Vista Previa de la Hoja de Vida</h2>

      {/* Datos personales */}
      <div className="preview-seccion">
        <h3>Datos personales</h3>

        {campo("Nombre", datos.nombre)}
        {campo("Edad", datos.edad)}
        {campo("Ciudad", datos.ciudad)}
        {campo("Correo", datos.correo)}
        {campo("Programa", datos.programa)}
        {campo("Ficha", datos.ficha)}
        {campo("Jornada", datos.jornada)}
      </div>

      {/* Información académica */}
      <div className="preview-seccion">
        <h3>Información académica</h3>

        {campo("Nivel", academico.nivel)}
        {campo("Título", academico.titulo)}
        {campo("Cursos", academico.cursos)}
        {campo("Institución", academico.institucion)}
        {campo("Año de graduación", academico.graduacion)}
      </div>

      {/* Experiencia laboral */}
      <div className="preview-seccion">
        <h3>Experiencia laboral</h3>

        {campo("Empresa", experiencia.empresa)}
        {campo("Cargo", experiencia.cargo)}
        {campo("Tiempo de experiencia", experiencia.experiencia)}
        {campo("Funciones", experiencia.funciones)}
        {campo("Habilidades", experiencia.habilidades)}
      </div>

      <button
        type="button"
        onClick={anterior}
      >
        Anterior
      </button>

    </div>
  );
}

export default VistaPrevia;