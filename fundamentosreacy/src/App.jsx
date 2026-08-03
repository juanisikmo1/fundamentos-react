import { useState } from "react";

import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormularioAcademico from "./components/FormularioAcademico";
import FormularioExperiencia from "./components/FormularioExperiencia";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const [paso, setPaso] = useState(1);

  return (
    <div className="contenedor">

      <div className="contenido">

        <Header />

        {paso === 1 && (
          <FormularioDatos
            siguiente={() => setPaso(2)}
          />
        )}
        {paso === 2 && (
          <FormularioAcademico
            anterior={()=> setPaso(1)}
            siguiente={() => setPaso(3)}
          />
        )}
        {paso === 3 && (
          <FormularioExperiencia
            anterior={()=> setPaso(2)}
            siguiente={() => setPaso(3)}
          />
        )}

        <Footer />

      </div>

    </div>
  );
}

export default App;