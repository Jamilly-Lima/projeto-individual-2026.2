function Restaurante({restaurante}) {

    return (
        <div>
            <h2>{restaurante.nome}</h2>

            <p>Tipo de culinária: {restaurante.tipoCulinaria}</p>
            <p>Endereço: {restaurante.endereco}</p>
            <p>Faixa de preço: {restaurante.faixaPreco}</p>
            <p>Avaliação: {restaurante.avaliacao}</p>
            <p>Telefone: {restaurante.telefone}</p>
        </div>
    )
}

export default Restaurante;