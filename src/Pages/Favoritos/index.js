import Banner from "Components/Banner";
import "./Favoritos.css";
import Titulo from "Components/Titulo/Titulo";
import Card from "Components/Card";
import { useFavoritoContext } from "Context/Favoritos";

const Favoritos = () => {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className="container-favoritos">
                { favorito.map((fav) => {
                    return <Card {...fav} key={ fav.id } />
                })}
            </section>
        </>
    )
}

export default Favoritos;
