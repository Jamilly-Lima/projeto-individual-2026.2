import styles from './Restaurante.module.css';

function Restaurante(props) {
    return (
        <div className={styles.card}>

            <h2>{props.restaurante.nome}</h2>

            <p>Tipo de culinária: {props.restaurante.tipoCulinaria}</p>

            <p>Endereço: {props.restaurante.endereco}</p>

            <p>Faixa de preço: {props.restaurante.faixaPreco}</p>

            <p>Avaliação: {props.restaurante.avaliacao}</p>

            <p>Telefone: {props.restaurante.telefone}</p>

        </div>
    );
}

export default Restaurante;