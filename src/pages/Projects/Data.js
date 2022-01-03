import starWars from '../../images/starwars-planets.png'
import trybetunes from '../../images/trybetunes.jpg'
import trybewallet from '../../images/trybewallet.jpg'

export const reactProjects = [
  {
    name: 'Star Wars Planet Search' ,
    image: starWars,
    habilities: 'React, Context API, Hooks.',
    description: 'On this project i worked on a several different filters, using onInputChange filtering, combining different categories and filtering onClick, adding filters over filters changing dropDown options. The effects of removing a filter and getting the object back to the previous state was the most challenging, take a look!',
    link: 'https://leandro-hespanhol.github.io/StarWars-Planet-Search/',
  },
  {
    name: 'TrybeWallet',
    image: trybewallet,
    habilities: 'React, Redux.',
    description: 'This project is about Redux, handling props on a Store, using reducers and actions to use and modify then, working with dispatches, mapDispatchToProps, mapStateToProps.',
    link: 'https://leandro-hespanhol.github.io/TrybeWallet/',
  },
  {
    name: 'TrybeTunes',
    image: trybetunes,
    habilities: 'React, props, routes',
    description: 'Fetching an API from itunes i was able to search and list preview musics. This project is all about understanding props. It taught me the basic concepts of React, routing with react-router-dom, exploring matchers, was really fun.',
    link: 'https://leandro-hespanhol.github.io/TrybeTunes/',
  },
]
