import "./Banner.css";

const Banner = ( { imagem }) => {
    return (
        <div 
            className="capa" 
            style={ {backgroundImage: `url("/imagens/banner-${ imagem }.png")`} }
        >

        </div>
    )
}

export default Banner;
