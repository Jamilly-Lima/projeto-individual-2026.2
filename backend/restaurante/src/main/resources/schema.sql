CREATE TABLE restaurante (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    tipoCulinaria VARCHAR(50) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    faixaPreco VARCHAR(10) NOT NULL,
    avaliacao DOUBLE NOT NULL,
    telefone VARCHAR(20) NOT NULL
);