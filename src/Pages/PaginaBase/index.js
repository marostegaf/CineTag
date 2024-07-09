import Cabecalho from "Components/Cabecalho";
import Container from "Components/Container";
import Rodape from "Components/Rodape/Rodape";
import FavoritoProvider from "Context/Favoritos";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;