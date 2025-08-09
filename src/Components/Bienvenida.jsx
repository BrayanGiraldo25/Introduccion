import "./Bienvenida.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function bienvenida() {
  let redireccion = useNavigate();

  const irAlPerfil = () => {
    redireccion("/Perfil");
  };

  let Alerta = () => {
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "Bienvenido a mi presentacion!",
      html: "Espero la disfrute mucho",
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(() => {
      irAlPerfil();
    });
  };


  return (
    <div className="Bienvenida">
      <h1 className="Titulo">Bienvenido a mi Portafolio</h1>
      <button onClick={Alerta} className="Presentacion">
        Conocer mas sobre mi
      </button>
    </div>
  );
}

export default bienvenida;
