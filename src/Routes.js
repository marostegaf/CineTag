import Favoritos from "Pages/Favoritos";
import Inicio from "Pages/Inicio";
import PaginaBase from "Pages/PaginaBase";
import PaginaDeErro from "Pages/PaginaDeErro";
import Player from "Pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PaginaBase /> } >
                    <Route index element={ <Inicio /> } />
                    <Route path="favoritos" element={ <Favoritos /> } />
                    <Route path="videos/:id" element={ <Player /> } />
                    <Route path="*" element={ <PaginaDeErro /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;