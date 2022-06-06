import leaderboard from '../../images/leaderboard.png'
import starWars from '../../images/starwars-transp-cropped.png'
import trybetunes from '../../images/equalizer.png'
import trybewallet from '../../images/bolsaimagem.png'
import sqlimage from '../../images/sqlimage.jpeg'
import blogApi from '../../images/capa-artigo-api-.jpg'
import dd from '../../images/dd.png'

export const reactProjects = [
  {
    name: 'Football LeaderBoard' ,
    frontBackFull: 'FullStack',
    image: leaderboard,
    abilities: 'NodeJS, Sequelize, OOP, MSC, API-Rest, Mocha-chai',
    habilidades: 'NodeJS, Sequelize, OOP, MSC, API-Rest, Mocha-chai',
    description: 'Creating endpoints and processing information from a database, this project is a fullstack application that creates three different leaderboards from a football competition',
    descricao: 'Construindo endpoints e processando dados do banco de dados, esse projeto é uma aplicação fullstack criada para construir um placar de uma competição de futebol',
    link: 'https://github.com/Leandro-Hespanhol/Football-score-board',
    projectLink: 'https://github.com/Leandro-Hespanhol/Football-score-board',
  },
  {
    name: 'Star Wars Planet Search' ,
    frontBackFull: 'FrontEnd',
    image: starWars,
    abilities: 'React, Context API, Hooks.',
    habilidades: 'React, Context API, Hooks.',
    description: 'On this project a static API is fetched and saved on local state. On the browser the user can filter the results on a several interesting ways. Please take a look!',
    descricao: 'Neste projeto requisitei uma API estática que foi salva em um estado loca. No browser o usuário pode filtrar os resultados de diversas formas interessantes. Quer dar uma conferida?',
    link: 'https://github.com/Leandro-Hespanhol/StarWars-Planet-Search',
    projectLink: 'https://leandro-hespanhol.github.io/StarWars-Planet-Search/',
  },
  {
    name: 'Exchange Rates',
    frontBackFull: 'FrontEnd',
    image: trybewallet,
    abilities: 'React, Redux.',
    habilidades: 'React, Redux.',
    description: 'While concentrating the props on a Store, I had to use reducers and actions handle those props, all of it working with dispatches, mapDispatchToProps, mapStateToProps.',
    descricao: 'Concentrando as props em uma Store, eu usei reducers e actions para manipular essas props, tudo isso trabalhando com dispatches, mapDispatchToProps, mapStateToProps.',
    link: 'https://github.com/Leandro-Hespanhol/TrybeWallet',
    projectLink: 'https://leandro-hespanhol.github.io/TrybeWallet/',
  },
  {
    name: 'Songs Preview App',
    frontBackFull: 'FrontEnd',
    image: trybetunes,
    abilities: 'React, props, routes',
    habilidades: 'React, props, routes',
    description: 'Fetching an API from iTunes I was able to search and list preview songs. This project taught me the basics concepts of React, routing with react-router-dom, exploring matchers, was really fun!',
    descricao: 'Requisitando uma API do iTunes eu pude buscar uma lista de prévias de músicas. Com esse projeto compreendi os conceitos de props em React, roteamento (incluindo matchers), foi bem divertido!',
    link: 'https://github.com/Leandro-Hespanhol/TrybeTunes',
    projectLink: 'https://leandro-hespanhol.github.io/TrybeTunes/',
  },
  {
    name: 'Store Manager API',
    frontBackFull: 'BackEnd',
    image: sqlimage,
    abilities: 'NodeJS, MySql, Javascript',
    habilidades: '',
    description: 'Following RESTfull principles, this project uses CRUD endpoints to manage a Store database with 98% test coverage.',
    descricao: 'Seguindo princípios RESTfull e arquitetura MSC, esse projeto utiliza de endpoints CRUD para manipular o banco de dados',
    link: 'https://github.com/Leandro-Hespanhol/BackEnd-Store-Manager',
    projectLink: 'https://github.com/Leandro-Hespanhol/BackEnd-Store-Manager',
  },
  {
    name: 'Blogs API',
    frontBackFull: 'BackEnd',
    image: blogApi,
    abilities: 'Sequelize, ORM, NodeJS, Javascript, JsonWebToken',
    habilidades: '',
    description: 'Following RESTfull principles, this API creates and manages the DataBase using sequelize. I also used JsonWebToken to validade the acess token.',
    descricao: 'Seguindo princípios RESTfull e arquitetura MSC, esse projeto cria e utiliza o banco de dados com sequelize. Eu também usei o JsonWebToken para validar o token de acesso',
    link: 'https://github.com/Leandro-Hespanhol/Blogs-API-Backend',
    projectLink: 'https://github.com/Leandro-Hespanhol/Blogs-API-Backend',
  },
  {
    name: 'Trybers & Dragons',
    frontBackFull: 'BackEnd',
    image: dd,
    abilities: 'TypeScript, Javascript, POO',
    habilidades: '',
    description: 'Inspired on the dungeouns and dragons universe, this project uses typescript and OOP to create javascript classes, interfaces and types of Races, Archetypes and monsters.',
    descricao: '',
    link: 'https://github.com/Leandro-Hespanhol/trybers-and-dragons',
    projectLink: 'https://github.com/Leandro-Hespanhol/trybers-and-dragons',
  },
]

export const linkedinLink = 'https://www.linkedin.com/in/leandro-hespanhol/'
export const githubLink = 'https://github.com/Leandro-Hespanhol'
