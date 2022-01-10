import starWars from '../../images/starwars-transp-cropped.png'
import trybetunes from '../../images/equalizer.png'
import trybewallet from '../../images/bolsaimagem.png'

export const reactProjects = [
  {
    name: 'Star Wars Planet Search' ,
    image: starWars,
    abilities: 'React, Context API, Hooks.',
    description: 'On this project a static API is fetched and saved on local state. On the browser the user can filter the results on a several different ways. Please take a look!',
    link: 'https://github.com/Leandro-Hespanhol/StarWars-Planet-Search',
    projectLink: 'https://leandro-hespanhol.github.io/StarWars-Planet-Search/',
  },
  {
    name: 'Exchange Rates',
    image: trybewallet,
    abilities: 'React, Redux.',
    description: 'This project is about exchange rates from 15 different currencies to Brazilian currency. Learned alot about a witchcraft called Redux. While concentrating the props on a Store, i could use reducers and actions handle those props, all of it working with dispatches, mapDispatchToProps, mapStateToProps.',
    link: 'https://github.com/Leandro-Hespanhol/TrybeWallet',
    projectLink: 'https://leandro-hespanhol.github.io/TrybeWallet/',
  },
  {
    name: 'Songs Preview App',
    image: trybetunes,
    abilities: 'React, props, routes',
    description: 'Fetching an API from itunes i was able to search and list preview songs. This project is all about understanding props. It taught me the basic concepts of React, routing with react-router-dom, exploring matchers, was really fun.',
    link: 'https://github.com/Leandro-Hespanhol/TrybeTunes',
    projectLink: 'https://leandro-hespanhol.github.io/TrybeTunes/',
  },
]
