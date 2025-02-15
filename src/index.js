// note: switching quickly from podcasts to home back to podcasts results in getContext error (processing time)

import "./styles.css";
import { homeDiv, initializeHomeChart} from "./home.js";
import { podcastsDiv } from './podcasts.js';
import { notesDiv } from './notes.js'

const contentDiv = document.getElementById('content')

const homeBtn = document.getElementById('homeBtn');
const podcastsBtn = document.getElementById('podcastsBtn')
const notesBtn = document.getElementById('notesBtn');

const divMapping = {
    'homeBtn': [homeBtn, homeDiv],
    'podcastsBtn': [podcastsBtn, podcastsDiv],
    'notesBtn': [notesBtn, notesDiv]
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