# Projeto Individual 2026.2 — Catálogo de Restaurantes

Aplicação web desenvolvida para cadastro, consulta e gerenciamento de restaurantes.

O sistema permite que o usuário cadastre restaurantes informando seus principais dados, consulte os restaurantes cadastrados e visualize os estabelecimentos organizados de acordo com sua avaliação.

O projeto foi desenvolvido utilizando uma aplicação Front-end em React integrada a uma API REST desenvolvida em Java com Spring Boot, utilizando JdbcTemplate para acesso ao banco de dados H2.

## Objetivo

Desenvolver uma aplicação web capaz de realizar o cadastro e a consulta de restaurantes, permitindo organizar e visualizar suas informações de maneira simples.

A aplicação também possibilita identificar os restaurantes com melhores avaliações por meio da ordenação dos registros, além de permitir a exclusão de restaurantes cadastrados.

# Funcionalidades

O sistema possui as seguintes funcionalidades:

- Cadastro de restaurantes;
- Consulta dos restaurantes cadastrados;
- Exibição dos restaurantes em formato de cards;
- Ordenação dos restaurantes pela avaliação, da maior para a menor;
- Exclusão de restaurantes cadastrados;
- Validação dos campos obrigatórios;
- Validação da avaliação, que deve estar entre 0 e 5;
- Validação de avaliação não informada;
- Impedimento de cadastro de restaurantes com nome já existente;
- Impedimento de cadastro de restaurantes com telefone já existente;
- Exibição de mensagens de sucesso e erro;
- Formatação do telefone para exibição;
- Integração entre Front-end e Back-end por meio de requisições HTTP.

# Dados do restaurante

Cada restaurante possui os seguintes campos:

| Campo | Descrição |
|---|---|
| `id` | Identificador único do restaurante |
| `nome` | Nome do restaurante |
| `tipoCulinaria` | Tipo de culinária oferecida |
| `endereco` | Bairro/endereço do restaurante |
| `faixaPreco` | Faixa de preço do restaurante |
| `avaliacao` | Avaliação do restaurante, de 0 a 5 |
| `telefone` | Telefone do restaurante |

# Tecnologias utilizadas

## Front-end

- React
- JavaScript
- Vite
- CSS Modules
- HTML

## Back-end

- Java
- Spring Boot
- JdbcTemplate
- Maven

## Banco de dados

- H2 Database

## Testes da API

- Bruno

## Versionamento

- Git
- GitHub

# Arquitetura do projeto

O projeto é dividido em duas partes principais:

### Front-end

Responsável pela interface com o usuário, pelo cadastro das informações e pela apresentação dos restaurantes.

### Back-end

Responsável pela API REST, validação dos dados, comunicação com o banco de dados e execução das operações de cadastro, consulta e exclusão.

A comunicação entre as duas partes ocorre por meio de requisições HTTP.

# Estrutura do projeto

```text
projeto-individual-2026.2/
│
├── backend/
│   └── restaurante/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/
│       │   │   │   └── school/
│       │   │   │       └── sptech/
│       │   │   │           └── restaurante/
│       │   │   │               ├── RestauranteApplication.java
│       │   │   │               ├── Restaurante.java
│       │   │   │               └── RestauranteController.java
│       │   │   │
│       │   │   └── resources/
│       │   │       ├── application.properties
│       │   │       └── schema.sql
│       │   │
│       │   └── test/
│       │
│       └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.module.css
│   │   │   ├── Restaurantes.jsx
│   │   │   └── Restaurantes.module.css
│   │   │
│   │   ├── componentes/
│   │   │   ├── Restaurante.jsx
│   │   │   └── Restaurante.module.css
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

# Back-end

O Back-end foi desenvolvido em Java utilizando Spring Boot.

A aplicação disponibiliza uma API REST responsável pelas operações relacionadas aos restaurantes.

O acesso aos dados é realizado utilizando `JdbcTemplate`, permitindo executar comandos SQL diretamente no banco de dados H2.

# Banco de dados

O projeto utiliza o banco de dados H2.

O banco está configurado para funcionar em memória durante a execução da aplicação.

A tabela `restaurante` é criada automaticamente por meio do arquivo:

```text
backend/restaurante/src/main/resources/schema.sql
```

A estrutura da tabela é:

```sql
CREATE TABLE restaurante (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    tipoCulinaria VARCHAR(50) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    faixaPreco VARCHAR(10) NOT NULL,
    avaliacao DOUBLE NOT NULL,
    telefone VARCHAR(20) NOT NULL
);
```

# Como executar o projeto

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Java;
- Maven;
- Node.js;
- npm;
- Git.

## 1. Clonar o repositório

Clone o repositório do projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Depois, entre na pasta do projeto:

```bash
cd projeto-individual-2026.2
```

# Executando o Back-end

Entre na pasta do Back-end:

```bash
cd backend/restaurante
```

Execute a aplicação Spring Boot pela IDE ou utilizando o Maven.

A API será executada em:

```text
http://localhost:8080
```

O banco de dados H2 será iniciado juntamente com a aplicação.

A tabela `restaurante` será criada automaticamente a partir do arquivo `schema.sql`.

# Executando o Front-end

Abra outro terminal.

Entre na pasta do Front-end:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Depois execute o projeto:

```bash
npm run dev
```

O Vite disponibilizará a aplicação no endereço apresentado no terminal, normalmente:

```text
http://localhost:5173
```

# Integração Front-end e Back-end

O Front-end React se comunica com o Back-end por meio da API REST.

As requisições são realizadas utilizando a função `fetch()` do JavaScript.

A URL base utilizada pelo Front-end é:

```text
http://localhost:8080/restaurante
```

As operações disponíveis são:

| Método | Endpoint | Função |
|---|---|---|
| GET | `/restaurante` | Listar restaurantes |
| POST | `/restaurante` | Cadastrar restaurante |
| DELETE | `/restaurante/{id}` | Excluir restaurante |

O Back-end possui configuração de CORS para permitir a comunicação com o Front-end executado em outra origem.

# Contrato da API

## GET — Listar restaurantes

### Endpoint

```http
GET /restaurante
```

### Descrição

Retorna todos os restaurantes cadastrados no banco de dados.

Os restaurantes são ordenados pela avaliação em ordem decrescente, ou seja, os restaurantes com maior avaliação aparecem primeiro.

### Resposta de sucesso

**HTTP 200 OK**

Exemplo:

```json
[
    {
        "id": 1,
        "nome": "Restaurante Exemplo",
        "tipoCulinaria": "Japonesa",
        "endereco": "Bela Cintra",
        "faixaPreco": "50-70",
        "avaliacao": 4.8,
        "telefone": "11999999999"
    },
    {
        "id": 2,
        "nome": "Restaurante Italiano",
        "tipoCulinaria": "Italiana",
        "endereco": "Paulista",
        "faixaPreco": "70-100",
        "avaliacao": 4.5,
        "telefone": "11888888888"
    }
]
```

### Quando não existem restaurantes

A API retorna:

**HTTP 200 OK**

```json
[]
```

# POST — Cadastrar restaurante

### Endpoint

```http
POST /restaurante
```

### Descrição

Realiza o cadastro de um novo restaurante.

Os dados devem ser enviados no corpo da requisição no formato JSON.

### Corpo da requisição

```json
{
    "nome": "Restaurante Exemplo",
    "tipoCulinaria": "Japonesa",
    "endereco": "Bela Cintra",
    "faixaPreco": "50-70",
    "avaliacao": 4.8,
    "telefone": "11999999999"
}
```

O campo `id` não precisa ser informado no cadastro, pois é gerado automaticamente pelo banco de dados.

### Resposta de sucesso

**HTTP 201 Created**

Exemplo:

```json
{
    "id": 1,
    "nome": "Restaurante Exemplo",
    "tipoCulinaria": "Japonesa",
    "endereco": "Bela Cintra",
    "faixaPreco": "50-70",
    "avaliacao": 4.8,
    "telefone": "11999999999"
}
```

# Validações do cadastro

O Back-end realiza validações antes de salvar os dados no banco.

Os seguintes campos são obrigatórios:

- `nome`
- `tipoCulinaria`
- `endereco`
- `faixaPreco`
- `avaliacao`
- `telefone`

A avaliação deve atender às seguintes condições:

```text
0 <= avaliacao <= 5
```

Também não é permitido enviar a avaliação vazia ou não informada.

As validações são realizadas no Back-end para garantir que requisições inválidas sejam rejeitadas mesmo quando realizadas diretamente por ferramentas externas, como Bruno, Postman ou outras aplicações.

# POST — Dados inválidos

Quando algum campo obrigatório não é informado ou quando a avaliação está fora do intervalo permitido:

**HTTP 400 Bad Request**

Exemplo de requisição inválida:

```json
{
    "nome": "Restaurante Exemplo",
    "tipoCulinaria": "Japonesa",
    "endereco": "Bela Cintra",
    "faixaPreco": "50-70",
    "avaliacao": 6,
    "telefone": "11999999999"
}
```

Nesse caso, a API rejeita a requisição porque a avaliação é maior que 5.

# POST — Restaurante duplicado

O sistema impede o cadastro de um restaurante quando já existe outro registro com:

- o mesmo nome; ou
- o mesmo telefone.

A comparação do nome é realizada sem diferenciar letras maiúsculas e minúsculas.

Exemplo:

```text
Restaurante Exemplo
restaurante exemplo
RESTAURANTE EXEMPLO
```

São considerados o mesmo nome.

### Resposta

**HTTP 409 Conflict**

Quando ocorre duplicidade, o novo restaurante não é cadastrado.

# DELETE — Excluir restaurante

### Endpoint

```http
DELETE /restaurante/{id}
```

### Descrição

Exclui um restaurante utilizando seu identificador.

### Exemplo

```http
DELETE /restaurante/1
```

### Resposta de sucesso

**HTTP 204 No Content**

O restaurante é removido do banco de dados e a resposta não possui conteúdo.

# DELETE — Restaurante não encontrado

Caso o ID informado não corresponda a nenhum restaurante cadastrado:

**HTTP 404 Not Found**

Exemplo:

```http
DELETE /restaurante/999
```

Se o restaurante com ID `999` não existir, a API retorna `404`.

# Códigos HTTP utilizados

| Método | Endpoint | Situação | Código |
|---|---|---|---|
| GET | `/restaurante` | Listagem realizada | 200 OK |
| POST | `/restaurante` | Cadastro realizado | 201 Created |
| POST | `/restaurante` | Dados inválidos | 400 Bad Request |
| POST | `/restaurante` | Nome ou telefone duplicado | 409 Conflict |
| DELETE | `/restaurante/{id}` | Exclusão realizada | 204 No Content |
| DELETE | `/restaurante/{id}` | Restaurante não encontrado | 404 Not Found |

# Front-end

O Front-end foi desenvolvido utilizando React.

A aplicação possui uma tela inicial e uma tela destinada ao cadastro e consulta dos restaurantes.

## Tela inicial

A tela inicial apresenta o sistema e possui a opção:

```text
Explorar restaurantes
```

Ao selecionar essa opção, o usuário é direcionado para a tela de restaurantes.

A navegação entre as telas é controlada utilizando estado do React e passagem de propriedades (`props`).

# Cadastro de restaurante

A tela de restaurantes possui um formulário com os campos:

- Nome;
- Tipo de culinária;
- Bairro/endereço;
- Faixa de preço;
- Avaliação;
- Telefone.

Os valores preenchidos pelo usuário são controlados utilizando `useState`.

Antes de realizar a requisição, o Front-end verifica se todos os campos foram preenchidos e se a avaliação está entre 0 e 5.

Após as validações do Front-end, os dados são enviados para a API por meio de uma requisição `POST`.

# Consulta de restaurantes

A listagem é realizada por meio de uma requisição:

```http
GET http://localhost:8080/restaurante
```

Os dados retornados pela API são armazenados no estado do React e apresentados na tela.

Os restaurantes são exibidos individualmente por meio do componente:

```text
Restaurante.jsx
```

Dessa forma, os dados apresentados na tela são provenientes da API e não de uma lista fixa ou simulada no Front-end.

# Exclusão de restaurantes

Cada restaurante exibido possui a opção:

```text
Excluir
```

Ao selecionar essa opção, o Front-end realiza uma requisição:

```http
DELETE /restaurante/{id}
```

Após a exclusão realizada pela API, o restaurante é removido da lista apresentada na tela.

# Componentização

O projeto utiliza componentes React para organizar a aplicação.

Os principais componentes e páginas são:

### `App.jsx`

Responsável pela organização principal da aplicação e pelo controle da página que está sendo exibida.

### `Home.jsx`

Responsável pela tela inicial do sistema.

### `Restaurantes.jsx`

Responsável pelo formulário de cadastro, comunicação com a API e listagem dos restaurantes.

### `Restaurante.jsx`

Responsável pela exibição individual dos dados de cada restaurante.

# Estado no React

O projeto utiliza o hook `useState` para controlar informações que podem sofrer alterações durante a utilização da aplicação.

Entre os estados utilizados estão:

- Lista de restaurantes;
- Nome;
- Tipo de culinária;
- Endereço;
- Faixa de preço;
- Avaliação;
- Telefone;
- Mensagens exibidas ao usuário;
- Página atual.

# JSX

A interface da aplicação é construída utilizando JSX, permitindo combinar a estrutura da página com os dados e estados do React.

Os dados dos restaurantes retornados pela API são utilizados para gerar os cards de forma dinâmica.

# CSS Modules

Os estilos do projeto são organizados utilizando CSS Modules.

Os principais arquivos de estilo são:

```text
Home.module.css
Restaurantes.module.css
Restaurante.module.css
```

A utilização de CSS Modules permite manter os estilos organizados e associados aos seus respectivos componentes ou páginas.

# Tratamento de mensagens

O sistema apresenta mensagens ao usuário de acordo com o resultado das operações.

Exemplos:

```text
Restaurante cadastrado com sucesso!
```

```text
Preencha todos os campos antes de cadastrar.
```

```text
Já existe um restaurante com esse nome ou telefone.
```

```text
Os dados informados são inválidos.
```

```text
Restaurante excluído com sucesso!
```

```text
Não foi possível cadastrar o restaurante.
```

```text
Não foi possível excluir o restaurante.
```

Quando não existem restaurantes cadastrados, o sistema também informa:

```text
Nenhum restaurante cadastrado ainda.
```

# Formatação do telefone

O telefone é apresentado na interface utilizando uma máscara de formatação.

Exemplo:

```text
11999999999
```

É exibido como:

```text
(11) 99999-9999
```

Antes de ser enviado para a API, os caracteres de formatação são removidos, sendo enviado apenas o número.

# Testes da API

A API foi testada utilizando o Bruno.

Foram realizados testes para verificar:

- Cadastro de restaurante válido;
- Listagem dos restaurantes;
- Cadastro sem preenchimento dos campos obrigatórios;
- Cadastro com avaliação menor que 0;
- Cadastro com avaliação maior que 5;
- Cadastro sem informar a avaliação;
- Cadastro com nome duplicado;
- Cadastro com telefone duplicado;
- Exclusão de restaurante existente;
- Tentativa de exclusão de restaurante inexistente;
- Retorno dos códigos HTTP esperados.

Os testes também verificam as validações realizadas diretamente no Back-end, garantindo que dados inválidos não sejam persistidos no banco.

# Fluxo da aplicação

O funcionamento principal do sistema ocorre da seguinte maneira:

```text
Usuário
   ↓
Front-end React
   ↓
Requisição HTTP
   ↓
API REST — Spring Boot
   ↓
Validação dos dados
   ↓
JdbcTemplate
   ↓
Banco de dados H2
   ↓
Resposta HTTP
   ↓
Front-end React
   ↓
Informação apresentada ao usuário
```
# Resumo dos endpoints

```text
GET
/restaurante
→ Lista os restaurantes cadastrados.

POST
/restaurante
→ Cadastra um novo restaurante.

DELETE
/restaurante/{id}
→ Exclui um restaurante pelo ID.
```

# Execução resumida

Para executar o projeto:

### Back-end

```bash
cd backend/restaurante
```

Executar a aplicação Spring Boot.

### Front-end

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Depois, acessar o endereço disponibilizado pelo Vite.

# Conclusão

O projeto consiste em uma aplicação web de catálogo de restaurantes, desenvolvida com React no Front-end e Java com Spring Boot no Back-end.

A aplicação possui cadastro, consulta e exclusão de restaurantes, utilizando uma API REST para comunicação entre as camadas.

Os dados são persistidos em um banco H2 por meio do JdbcTemplate, enquanto o Front-end utiliza estados, componentes, JSX e CSS Modules para construção da interface.

O projeto também conta com validações no Front-end e no Back-end, tratamento dos principais códigos HTTP e testes da API realizados com Bruno.