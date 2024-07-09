import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Cabecalho.css"
import CabecalhoLink from "Components/CabecalhoLink";

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <Link to="./">
                <img src={ logo } alt="Logo do CineTag"/>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;
