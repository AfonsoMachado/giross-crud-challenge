<table align="center"><tr><td align="center" width="9999">
<a href="https://giross.com.br/" target="blank"><img src="https://giross.com.br/assets/images/logo2.png" width="150" alt="Nest Logo" /></a>

<h2>CRUD de usuários com autenticação JWT</h2>

<p align="center">
  <a href="#descrição-do-projeto">Descrição do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-variáveis-de-ambiente">Variáveis de Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-executando-o-projeto">Executando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#watch-testes-e2e">Testes E2E</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-documentação">Documentação</a>&nbsp;&nbsp;&nbsp;
</p>

</td></tr>
</table>

## Descrição do Projeto

Este projeto é uma API de cadastros de usuários, desenvolvido no processo seletivo de contratação da empresa [Giross](https://giross.com.br/), contendo todos os endpoints básicos de um CRUD, além de uma autenticação via JWT. Foi completamente construído usando o framework [NestJS](https://nestjs.com/) e seus módulos para auxílio no desenvolvimento.

Além da API, neste projeto está contida uma integração com um banco de dados MySQL usando TypeORM, documentação utilizado Swagger e testes E2E para validação do funcionamento da API.

## :computer: Tecnologias

Tecnologias utilizadas para o desenvolvimento da API:

- [Bcrypt](https://www.npmjs.com/package/bcrypt/)
- [Class Validator](https://github.com/typestack/class-validator#readme)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Node.js](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [Npm](https://www.npmjs.com/)
- [Passport](https://www.passportjs.org/)
- [passport-jwt](https://github.com/mikenicholson/passport-jwt)
- [Node MySQL 2](https://www.npmjs.com/package/mysql2)
- [SuperTest](https://www.npmjs.com/package/supertest/)
- [Swagger](https://swagger.io/)
- [TypeORM](https://typeorm.io/)
- [TypeScript](https://www.typescriptlang.org/)

## :bookmark: Variáveis de ambiente 

As variáveis de ambiente utilizadas no projeto estão especificadas no arquivo *.env.example*, para usá-las é nescessário realizar uma cópia desse arquivo, preencher cada variável e renomear o mesmo para *.env*. Quaisquer alterações devem ser feitas nesse arquivo antes de executar a API:

**Variáveis de ambiente presentes no .env do projeto**

```bash
# Porta de execução da API
PORT=3000

# Permissão para ativar documentação
APP_EXPOSE_DOCS=true
# Nome da API
APP_NAME=NestJS API
# Descrição da API
APP_DESCRIPTION="NestJS CRUD API with Authtentication"
# Versão da API
APP_VERSION=1.0
# Caminho para a documentação da API
APP_DOCS_PATH=docs

# Estratégia de autenticação JWT (Deve ser alterado)
JWT_SECRET=<YOUR_JWT_SECRET>
# Limite de expiração do token JWT
JWT_EXPIRESIN=1h

# Host do banco de dados MySQL
DB_HOST=<YOUR_DB_HOST>
# Port do banco de dados MySQL
DB_PORT=<YOUR_DB_PORT>
# Nome de usuário do banco de dados MySQL
DB_USERNAME=<YOUR_DB_USERNAME>
# Senha de usuário do banco de dados MySQL
DB_PASSWORD=<YOUR_DB_PASSWORD>
# Nome do banco de dados (Deve ser criado previamente para o correto funcionamento)
DB_NAME='giross_challenge'
# Nome do banco de dados de teste (Deve ser criado previamente para o correto funcionamento)
DB_TEST_NAME='giross_challenge_test'

# Usuário admin adicionado ao projeto automaticamente para uso das rotas autenticadas.
USER_ADMIN_EMAIL=admin@giross.com
USER_ADMIN_PASS=admingiross
```

## :fire: Executando o projeto

### Requisitos Necessários

- [Node.js](https://nodejs.org/en/) (Foi utilizada a versão 18.12.1 durante o desenvolvimento)
- [npm](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/)
- SGBD MySQL com os banco de dados de produção e testes pré criados, com o nome indicado nas variáveis de ambiente (Foi utilizado o [XAMPP](https://www.apachefriends.org/pt_br/index.html) durante o desenvolvimento)

**Instalação e execução**

```bash
# Instale todas as dependências necessárias:
$ npm install

# Para iniciar o servidor da API:
$ npm run start

# Caso queira iniciar o servidor da API em modo assistido:
$ npm run start:dev

# Após isso, o projeto pode ser inicializado e os endpoints estarão prontos para ser utilizados!
```

## :watch: Testes E2E

Essa API foi construída com o auxílio do [Jest](https://jestjs.io/) para a implementação de testes, com o objetivo de validar o funcionamento da aplicação.

**Comandos para executar testes**

```bash
# Para executar todos os testes e2e:
$ npm run test:e2e

# Para executar um teste específico do projeto:
$ npm run test:e2e "nome do arquivo"
```

## :books: Documentação

Para ter acesso a documentação do projeto, contendo todas as informações para utilizar os
endpoints da API, é necessário utilizar como no exemplo abaixo, lembrando que o servidor
da API necessita estar inicializado.

> Obs.: É possível alterar o padrão de rota "/docs" para algum desejado, para isso temos a variável de ambiente "APP_DOCS_PATH".

```bash
# Documentação swagger.
Ex.: http://localhost:3000/docs
```
---

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>
