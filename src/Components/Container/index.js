import "./Container.css"

const Container = ( { children } ) => {
    return (
        <section className="container-global">
            { children }
        </section>
    )
}

export default Container;
