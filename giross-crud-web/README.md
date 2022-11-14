<table align="center"><tr><td align="center" width="9999">
<a href="https://giross.com.br/" target="blank"><img src="https://giross.com.br/assets/images/logo2.png" width="150" alt="Nest Logo" /></a>

<h2>CRUD de usuários com autenticação JWT</h2>

<p align="center">
  <a href="#descrição-do-projeto">Descrição do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#bookmark-variáveis-de-ambiente">Variáveis de Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-executando-o-projeto">Executando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

</td></tr>
</table>

## Descrição do Projeto

Este projeto é um frontend para gerenciamento de uma API de cadastros de usuários, desenvolvido no processo seletivo de contratação da empresa [Giross](https://giross.com.br/). Foi completamente construído usando o framework [Angular](https://angular.io/) e seus módulos para auxílio no desenvolvimento.

## :computer: Tecnologias

Tecnologias utilizadas para o desenvolvimento:

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [RxJS](https://rxjs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## :bookmark: Variáveis de ambiente 

As variáveis de ambiente para este projeto estão localizadas no arquivo /src/environments/environment.ts, e podem ser configuradas alterando o conteúdo deste arquivo.


```javascript
// Modo de desenvolvimento
production: false,

// URL da API
baseUrl: 'http://localhost:3000',
```

## :fire: Executando o projeto

### Requisitos Necessários

- [Node.js](https://nodejs.org/en/) (Foi utilizada a versão 18.12.1 durante o desenvolvimento)
- [npm](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/)

**Instalação e execução**

```bash
# Instale todas as dependências necessárias:
$ npm install

# Para iniciar o servidor de desenvolvimento do Angular:
$ npm run start

# Caso queira iniciar o servidor da API em modo assistido:
$ npm run start:dev
```

- Após isso, o projeto pode ser acessado a partir da URL http://localhost:4200

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>
