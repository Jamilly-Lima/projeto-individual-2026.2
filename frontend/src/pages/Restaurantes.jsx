import {useState} from 'react';
import Restaurante from '../componentes/Restaurante';

function Restaurantes() {

    const [restaurantes, setRestaurantes] = useState([]);
    const [nome, setNome] = useState('');
    const [tipoCulinaria, setTipoCulinaria] = useState('');
    const [endereco, setEndereco] = useState('');
    const [faixaPreco, setFaixaPreco] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [telefone, setTelefone] = useState('');
    
    function cadastrar() {

    fetch('http://localhost:8080/restaurante', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            tipoCulinaria: tipoCulinaria,
            endereco: endereco,
            faixaPreco: faixaPreco,
            avaliacao: avaliacao,
            telefone: telefone
        })
    })
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error(`Erro ${resposta.status}`);
            }

            return resposta.json();
        })
        .then(dados => {
            console.log(dados);
        })
        .catch(erro => {
            console.log(erro);
        });
    }

    function listar() {

        fetch('http://localhost:8080/restaurante')
            .then(resposta => {

                if (!resposta.ok) {
                    throw new Error(`Erro ${resposta.status}`);
                }

                return resposta.json();
            })
            .then(dados => {
                setRestaurantes(dados);
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    return (
        <div>
            <h1>Restaurantes</h1>
            <h2>Cadastrar Restaurante</h2>

        <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        />

        <input
            type="text"
            placeholder="Tipo de culinária"
            value={tipoCulinaria}
            onChange={(evento) => setTipoCulinaria(evento.target.value)}
        />

        <input
            type="text"
            placeholder="Endereço"
            value={endereco}
            onChange={(evento) => setEndereco(evento.target.value)}
        />

        <input
            type="text"
            placeholder="Faixa de preço"
            value={faixaPreco}
            onChange={(evento) => setFaixaPreco(evento.target.value)}
        />

        <input
            type="number"
            placeholder="Avaliação"
            value={avaliacao}
            onChange={(evento) => setAvaliacao(evento.target.value)}
        />

        <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
        />

        <button onClick={cadastrar}>
            Cadastrar Novo Restaurante
        </button>

            <button onClick={listar}>
                Listar Restaurantes
            </button>

                {restaurantes.map((restaurante) => (
                <Restaurante
                    key={restaurante.id}
                    restaurante={restaurante}
                />
            ))}
        </div>
    );
}

export default Restaurantes;