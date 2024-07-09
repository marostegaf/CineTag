import Banner from "Components/Banner";
import "./Player.css";
import Titulo from "Components/Titulo/Titulo";
import { useParams } from "react-router-dom";
import PaginaDeErro from "Pages/PaginaDeErro";
import { useEffect, useState } from "react";

const Player = () => {
    const [ video, setVideo ] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if(!video) {
        return <PaginaDeErro />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className="container-player">
                <iframe
                    width="100%"
                    height="100%"
                    src={ video.link }
                    title={ video.titulo }
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                >
                </iframe>
            </section>
        </>
    )
}

export default Player;
