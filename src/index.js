import "./styles.css";
import { homeDiv, initializeHomeChart} from "./home.js";
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
initializeHomeChart();
homeBtn.classList.add('active', 'triangle-shadow')

const buttons = document.querySelectorAll('.nav-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      if (!button.classList.contains('active')) {
        button.classList.add('triangle-shadow');
      }
    });
  
    button.addEventListener('mouseleave', () => {
      if (!button.classList.contains('active')) {
        button.classList.remove('triangle-shadow');
      }
    });
  
    button.addEventListener('click', () => {
      // Remove 'active' and 'triangle-shadow' class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('triangle-shadow');
      });
  
      // Add 'active' and 'triangle-shadow' class to the clicked button
      button.classList.add('active');
      button.classList.add('triangle-shadow');
  
      // Get the corresponding div element from the mapping
      let buttonId = button.getAttribute('id');
      const catDiv = divMapping[buttonId][1];
      if (catDiv) {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(catDiv);
        if (buttonId ==='homeBtn') {
            initializeHomeChart();
        }
      }
    });
  });