import starWars from '../../images/starwars-transp-cropped.png'
import trybetunes from '../../images/equalizer.png'
import trybewallet from '../../images/bolsaimagem.png'
import sqlimage from '../../images/sqlimage.jpeg'

export const reactProjects = [
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
    name: 'Store Manager',
    frontBackFull: 'BackEnd',
    image: sqlimage,
    abilities: 'NodeJS, MySql, Javascript',
    habilidades: 'Normalização de bases, mySQL: fundamentos e queries',
    description: 'Following RESTfull principles, this project uses CRUD endpoints to manage a Store database.',
    descricao: 'Seguindo princípios RESTfull e arquitetura MSC, esse projeto utiliza de endpoints CRUD para manipular o banco de dados',
    link: 'https://github.com/Leandro-Hespanhol/BackEnd-Store-Manager',
    projectLink: 'https://github.com/Leandro-Hespanhol/BackEnd-Store-Manager',
  },
]

export const linkedinLink = 'https://www.linkedin.com/in/leandro-hespanhol/'
export const githubLink = 'https://github.com/Leandro-Hespanhol'
