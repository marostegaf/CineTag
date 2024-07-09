import { Link } from "react-router-dom";
import "./CabecalhoLink.css";

const CabecalhoLink = ( { url, children } ) => {
    return (
        <Link to={ url } className="link">
            { children }
        </Link>
    )
}

export default CabecalhoLink;
