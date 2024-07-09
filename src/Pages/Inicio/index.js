import Banner from "Components/Banner";
import Card from "Components/Card";
import Titulo from "Components/Titulo/Titulo";
import "./Inicio.css"
import { useEffect, useState } from "react";

const Inicio = () => {
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/videos")
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className="container-inicio">
                {videos.map((video) => {
                    return <Card key={video.id} {...video} />
                })}
            </section>
        </>
    )
}

export default Inicio;
