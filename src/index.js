import "./styles.css";
import { homeDiv} from "./home.js";
// import { menuDiv } from "./menu.js"
// import { aboutDiv } from "./about.js";


const contentDiv = document.getElementById('content')

const homeBtn = document.getElementById('homeBtn');
const podcastsBtn = document.getElementById('podcastsBtn');
const hearingsBtn = document.getElementById('hearingsBtn');
const encountersBtn = document.getElementById('encountersBtn');
const booksBtn = document.getElementById('booksBtn');
const documentariesBtn = document.getElementById('documentariesBtn');
const moviesBtn = document.getElementById('moviesBtn');
const gamesBtn = document.getElementById('gamesBtn');

// load home content by default
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
    // add attribute of string of button name + 'Div' ?
    button.addEventListener('click', () => {
        let buttonId = button.getAttribute('id')
        let divName = buttonId.slice(0, -3) + 'Div'
        contentDiv.innerHTML = ''
        contentDiv.appendChild(divName)
    })
  }
});

