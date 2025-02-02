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

const divMapping = {
    homeBtn: homeDiv,
    podcastsBtn: podcastsDiv,
    // hearingsBtn: hearingsDiv,
    // encountersBtn: encountersDiv,
    // booksBtn: booksDiv,
    // documentariesBtn: documentariesDiv,
    // moviesBtn: moviesDiv,
    // gamesBtn: gamesDiv,
  };

// load home content by default
const homeBtn = document.getElementById('homeBtn')
contentDiv.appendChild(homeDiv)
homeBtn.classList.add('triangle-shadow')

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
        let buttonId = button.getAttribute('id')
        const divElement = divMapping[buttonId];
        if (divElement) {
          contentDiv.innerHTML = '';
          contentDiv.appendChild(divElement);
        }
    })
});

