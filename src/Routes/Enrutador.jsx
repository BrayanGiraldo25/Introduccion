import { createBrowserRouter } from "react-router-dom"
import Bienvenida from "../Components/Bienvenida"
import Perfil from "../Components/Perfil"

export const Enrutador = createBrowserRouter([
{
    path: "/",
    element: <Bienvenida />
},
{
    path: "/Perfil",
    element: <Perfil />
}
])