import "./Perfil.css";
import { useState } from "react";

function perfil() {
  const [vista, setVista] = useState([false, false, false]);

  const toggleRecuadro = (index) => {
    const copia = [...vista];
    copia[index] = !copia[index]; 
    setVista(copia);
  };

  return (
    <div className="Perfil">
      <p className="Titulo">Mi Persona</p>
      <div className="Imagen"></div>
      <p className="Subtitulo">Datos Personales</p>
      <div className="Datos">
        <div className="Recuadro" onClick={() => toggleRecuadro(0)}>
          {vista[0] ? "Mi nombre es Brayan Estiben Giraldo Garcia, Soy de Colombia y tengo 19 años de edad" : "Mis Datos:"}
        </div>
        <div className="Recuadro" onClick={() => toggleRecuadro(1)}>{vista[1] ? "Programacion especializado en Frontend, pero tengo experiencia en Backend y Bases de datos con gran manejo del Ingles" : "Mis cualidades:"}</div>
        <div className="Recuadro" onClick={() => toggleRecuadro(2)}>{vista[2] ? "Estudie la tecnica de Desarrollo de Software en el CESDE de Bello hasta Junio del 2025" : "Estudios:"}</div>
      </div>
    </div>
  );
}

export default perfil;
