import "./styles.css";
import { homeDiv} from "./home.js";
import { podcastsDiv } from './podcasts.js';
// import { hearingsDiv } from './hearings.js';
// import { encountersDiv } from './encounters.js';
// import { booksDiv } from './books.js';
// import { documentariesDiv } from './documentaries.js';
// import { moviesDiv } from './movies.js';
// import { gamesDiv } from './games.js';

const contentDiv = document.getElementById('content')

const homeBtn = document.getElementById('homeBtn');
const podcastsBtn = document.getElementById('podcastsBtn')
const hearingsBtn = document.getElementById('hearingsBtn');
const encountersBtn = document.getElementById('encountersBtn');
const booksBtn = document.getElementById('booksBtn');
const documentariesBtn = document.getElementById('documentariesBtn');
const moviesBtn = document.getElementById('moviesBtn');
const gamesBtn = document.getElementById('gamesBtn');

const divMapping = {
    'homeBtn': [homeBtn, homeDiv],
    'podcastsBtn': [podcastsBtn, podcastsDiv],
    // 'hearingsBtn': [hearingsBtn, hearingsDiv],
    // 'encountersBtn': [encountersBtn, encountersDiv],
    // 'booksBtn': [booksBtn, booksDiv],
    // 'documentariesBtn': [documentariesBtn, documentariesDiv],
    // 'moviesBtn': [moviesBtn, moviesDiv],
    // 'gamesBtn': [gamesBtn, gamesDiv]
  };

// load home content by default
contentDiv.appendChild(homeDiv)

const buttons = document.querySelectorAll('.nav-button');

buttons.forEach(button => {
  if (!button.classList.contains('triangle-shadow')) {
    button.addEventListener('mouseenter', () => {
        button.classList.add('triangle-shadow');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('triangle-shadow');
    });
  }
    button.addEventListener('click', () => {
        buttons.forEach(button => {
            if (button.classList.contains('triangle-shadow')) {
              button.classList.remove('triangle-shadow')
            }
          })
        let buttonId = button.getAttribute('id')
        const catBtn = divMapping[buttonId][0]
        console.log(catBtn)
        catBtn.classList.add('triangle-shadow')
        const catDiv = divMapping[buttonId][1];
        if (catDiv) {
          contentDiv.innerHTML = '';
          contentDiv.appendChild(catDiv);
        }
    })
});

