import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ptbr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: {
            title: `Welcome! <br></br> I'm Leandro Hespanhol`,
            description: `Its a new career for me and I must say, its being such a joy! <br></br>
            Please take a look and I hope you find what you seek!`,
            typewritter1: "Technology Student",
            typewritter2: "Full-Stack Software Developer",
            typewritter3: "Lawyer and Jurist"
          },
          frontEndProjects: {
            project: {}
          },
          about: {
            title: 'What about me?',
            description: '<p>At first I would like to present myself doing two things I love: Riding my bike and be with my friends. I also love coding but lets not get too personal right away 😉</p><p>Studying usually is something that comes to me with ease. Probably because learning is such a rewarding experience to me. I like to say that <strong>Curiosity guides me.</strong> </p> <p>I am a graduaded lawyer, but from the beggining of my career my technology skills made myself be seen by my bosses. After one year and a half working on a big law office I was invited to join the technology team. I worked on a suport post which gave me and incredible vision about artificial inteligence and made myself make the changing career decision!</p><p>And then I found Trybe. I never thought I could learn programing so fast! Its been so little time and im ready to code on: ',
            description2: '<p>And not just that! To know how to learn is one of the main skills im improving on my study. Because of that, learning a different language would not be a problem!</p>'
          },
          contact: {
            title: `Let's work togheter!!`,
            subtitle: 'Here are the places you can find me'
          }
        }
      },
      ptbr: {
        translation: {
          home: {
            title: `Bem vind@! <br></br> Sou o Leandro Hespanhol`,
            description: `É uma nova carreira pra mim e preciso dizer, tem sido maravilhoso! <br></br>
            Fique à vontade e espero que encontre o que procura!`,
            typewritter1: "Estudante de Tecnologia",
            typewritter2: "Desenvolvedor de Software Full-Stack",
            typewritter3: "Advogado e Jurista"
          },
          frontEndProjects: {
            project: {}
          },
          about: {
            title: 'Um pouco mais sobre mim!',
            description: '<p>Em primeiro lugar, apresento-me fazendo duas coisas que amo: estar com amigos e pedalar! Também amo codar mas não vamos pegar tanta intimidade tão rápido certo? 😉</p><p>Sempre tive facilidade com estudos. Acredito que seja assim porque aprender é sempre uma experiência bastante recompensadora. Gosto de dizer que a <strong>curiosidade é guia!</strong> </p> <p>Sou gradudado em Direito, mas desde o início da minha carreira me destaquei pelos meus conhecimentos tecnológicos. Depois de um ano e meio trabalhando em um escritório de advocacia fui convidado para integrar a diretoria de tecnologia. Trabalhei na função de suporte ao sistema que me deu uma visão incrível sobre desenvolvimento web, banco de dados, inteligência artificial... fazendo com que eu decidisse definitivamente pela mudança de carreira!</p><p>Foi então que encontrei a Trybe. Nunca pensei que fosse possível aprender a programar tão rápido! Em poucos meses e eu já estou pronto para trabalhar com: ',
            description2: '<p>Não apenas isso! Aprender a aprender é uma das abilidades principais que tenho aprendido. Por conta disso, aprender uma nova linguagem não é nenhum problema!</p>'
          },
          contact: {
            title: `Vamos trabalhar juntos!!`,
            subtitle: 'Veja os lugares em que pode me encontrar'
          }
        }
      }
    }
  });

export default i18n;