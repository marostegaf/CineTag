import { useFavoritoContext } from "Context/Favoritos";
import "./Card.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

const Card = ( { id, titulo, capa } ) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className="container">
            <Link to={ `/videos/${id}` } className="link-video">
                <img src={ capa } alt={ titulo } className="capa"/>
                <h2>{ titulo }</h2>
            </Link>
            <img src={ icone } 
                alt="Favoritar Filme" 
                className="favoritar" 
                onClick={() => {
                    adicionarFavorito( {id, titulo, capa} )
                }}
            />
        </div>
    )
}

export default Card;
