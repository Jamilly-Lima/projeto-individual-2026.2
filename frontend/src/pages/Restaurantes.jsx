import { useState } from 'react';
import Restaurante from '../componentes/Restaurante';
import styles from './Restaurantes.module.css';

function Restaurantes() {

    const [restaurantes, setRestaurantes] = useState([]);
    const [nome, setNome] = useState('');
    const [tipoCulinaria, setTipoCulinaria] = useState('');
    const [endereco, setEndereco] = useState('');
    const [faixaPreco, setFaixaPreco] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    function formatarTelefone(valor) {

        valor = valor.replace(/\D/g, '');

        if (valor.length <= 11) {
            valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        }

        return valor;
    }

    function cadastrar() {

        if (nome === '' || tipoCulinaria === '' || endereco === '' || faixaPreco === '' || avaliacao === '' || telefone === '') {
            setMensagem('Preencha todos os campos antes de cadastrar.');
            return;
        }

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
                if (resposta.status === 409) {
                    setMensagem('Já existe um restaurante com esse nome ou telefone.');
                    return null;
                }

                if (!resposta.ok) {
                    throw new Error(`Erro ${resposta.status}`);
                }

                return resposta.json();
            })
            .then(dados => {
                if (dados !== null) {
                    setMensagem('Restaurante cadastrado com sucesso!');
                }
                console.log(dados);
            })
            .catch(erro => {
                console.log(erro);
                setMensagem('Não foi possível cadastrar o restaurante.');
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
                if (dados.length === 0) {
                setMensagem('Nenhum restaurante cadastrado ainda.');
            } else {
                setMensagem('');
            }
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    return (
        <div className={styles.pagina}>

            <h1>Restaurantes</h1>

            <p>Cadastre e consulte os restaurantes cadastrados.</p>

            <section className={styles.formulario}>

                <h2>Cadastrar Restaurante</h2>

                <div className={styles.campo}>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Nome do restaurante"
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                    />
                </div>

                <div className={styles.campo}>
                    <label>Tipo de culinária</label>
                    <input
                        type="text"
                        placeholder="Ex: Japonesa"
                        value={tipoCulinaria}
                        onChange={(evento) => setTipoCulinaria(evento.target.value)}
                    />
                </div>

                <div className={styles.campo}>
                    <label>Bairro</label>
                    <input
                        type="text"
                        placeholder="Ex: Bela Cintra"
                        value={endereco}
                        onChange={(evento) => setEndereco(evento.target.value)}
                    />
                </div>

                <div className={styles.campo}>
                    <label>Faixa de preço</label>
                    <input
                        type="text"
                        placeholder="Ex: 50,00"
                        value={faixaPreco}
                        onChange={(evento) => setFaixaPreco(evento.target.value)}
                    />
                </div>

                <div className={styles.campo}>
                <label>Avaliação</label>
                <input
                    type="number"
                    placeholder="Ex: 4.5"
                    min="0"
                    max="5"
                    step="0.1"
                    value={avaliacao}
                    onChange={(evento) => setAvaliacao(evento.target.value)}
                />
                </div>

                <div className={styles.campo}>
                    <label>Telefone</label>
                <input
                    type="text"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(evento) => setTelefone(formatarTelefone(evento.target.value))}
                    maxLength="15"
                />
                </div>

                <button
                    className={styles.botao}
                    onClick={cadastrar}
                >
                    Cadastrar Restaurante
                </button>

                {mensagem !== '' && (
                <p className={styles.mensagem}>{mensagem}</p>
                )}
            </section>

            <section className={styles.lista}>

                <h2>Restaurantes cadastrados</h2>

                <button
                    className={styles.botao}
                    onClick={listar}
                >
                    Listar Restaurantes
                </button>

                <div className={styles.cards}>

                    {restaurantes.map((restaurante) => (
                        <Restaurante
                            key={restaurante.id}
                            restaurante={restaurante}
                        />
                    ))}

                </div>

            </section>

        </div>
    );
}

export default Restaurantes;