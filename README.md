# projeto-individual-2026.2
Desenvolvimento de uma aplicação Front-end em React integrada à API REST baseado no tema Restaurante.

Sistema web desenvolvido para cadastro e consulta de restaurantes, permitindo visualizar informações dos estabelecimentos e suas avaliações.

## Objetivo

Desenvolver uma aplicação para cadastrar restaurantes e consultar os restaurantes cadastrados, organizando as informações de forma simples e permitindo identificar quais possuem melhor avaliação.

## Funcionalidades

O sistema possui as seguintes funcionalidades:

- Cadastrar um restaurante;
- Consultar/listar os restaurantes cadastrados;
- Exibir os restaurantes em formato de cards;
- Ordenar os restaurantes pela avaliação;
- Validar o preenchimento dos campos obrigatórios;
- Validar a avaliação, que deve estar entre 0 e 5;
- Impedir o cadastro de restaurantes com nome ou telefone já cadastrados;
- Informar ao usuário quando um restaurante for cadastrado com sucesso;
- Informar quando não houver restaurantes cadastrados.

## Informações do restaurante

Cada restaurante possui as seguintes informações:

- Nome;
- Tipo de culinária;
- Endereço;
- Faixa de preço;
- Avaliação;
- Telefone.

## Tecnologias utilizadas

### Front-end

- React
- JavaScript
- Vite
- CSS Modules

### Back-end

- Java
- Spring Boot
- JdbcTemplate

### Banco de dados

- H2 Database

## Estrutura do projeto

projeto-individual-2026.2/
│
├── backend/
│   └── restaurante/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/
│       │   │   │   └── br/
│       │   │   │       └── com/
│       │   │   │           └── restaurante/
│       │   │   │               ├── RestauranteApplication.java
│       │   │   │               ├── controller/
│       │   │   │               │   └── RestauranteController.java
│       │   │   │               └── model/
│       │   │   │                   └── Restaurante.java
│       │   │   │
│       │   │   └── resources/
│       │   │       ├── application.properties
│       │   │       └── schema.sql
│       │   │
│       │   └── test/
│       │
│       └── pom.xml
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Home.module.css
    │   │   ├── Restaurantes.jsx
    │   │   └── Restaurantes.module.css
    │   │
    │   ├── componentes/
    │   │   ├── Restaurante.jsx
    │   │   └── Restaurante.module.css
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js