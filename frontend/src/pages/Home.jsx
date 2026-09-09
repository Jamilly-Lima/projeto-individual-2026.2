import styles from './Home.module.css';

function Home(props) {
    return (
        <div className={styles.home}>
            <h1>Catálogo de Restaurantes</h1>

            <p>
                Cadastre restaurantes e veja quais possuem melhor avaliação.
            </p>

            <button onClick={() => props.setPagina('restaurantes')}>
                Explorar restaurantes
            </button>
        </div>
    );
}

export default Home;