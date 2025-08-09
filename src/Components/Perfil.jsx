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
          {vista[0] ? "Brayan Estiben Giraldo" : "Mi Nombre:"}
        </div>
        <div className="Recuadro" onClick={() => toggleRecuadro(1)}>{vista[1] ? "La Programacion, los Videojuegos y el Deporte" : "Mis Hobbies:"}</div>
        <div className="Recuadro" onClick={() => toggleRecuadro(2)}>{vista[2] ? "Tengo 19 años, naci en enero y soy de Colombia" : "Datos sobre mi"}</div>
      </div>
    </div>
  );
}

export default perfil;
