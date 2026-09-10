import styles from './Restaurante.module.css';

function Restaurante(props) {

    function formatarTelefone(telefone) {

        telefone = telefone.replace(/\D/g, '');

        if (telefone.length === 11) {
            return telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        }

        if (telefone.length === 10) {
            return telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        }

        return telefone;
    }

    return (
        <div className={styles.card}>

            <h2>{props.restaurante.nome}</h2>

            <p>Tipo de culinária: {props.restaurante.tipoCulinaria}</p>

            <p>Endereço: {props.restaurante.endereco}</p>

            <p>Faixa de preço: {props.restaurante.faixaPreco}</p>

            <p>Avaliação: {props.restaurante.avaliacao}</p>

            <p>Telefone: {formatarTelefone(props.restaurante.telefone)}</p>

            <p className={styles.botaoExcluir} onClick={() => props.excluir(props.restaurante.id)}>
            Excluir
            </p>

        </div>
    );
}

export default Restaurante;