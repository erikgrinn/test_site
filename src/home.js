import { parseData } from "./plot.js";
const homeDiv = document.createElement("div");

homeDiv.innerHTML = `
<span style=font-size:24px><b>Welcome to REDACTED</b></span>
        <br>
        <br>
        This is a hobby project in response to the overwhelming amount of evidence and content available online relating to Non-human Intelligence (NHI). 
        However, information here can span beyond that topic, such as touching on ancient technologies.
        As I find myself keeping up with recent major developments and disclosures, I realized that a "guidebook", a way to navigate the massive landscape of discussions, could be of great use for me and for others.
        <br>
        <br>
        My aim is to provide an all-encompassing approach of listing content across the different media types:
        <ul>
            <li><strong>Podcasts:</strong> Likely the most common and far reaching medium.</li>
            <li><strong>Congressional Hearings:</strong> Recent hearings that have been monumental in the disclosure of major programs.</li>
            <li><strong>Close Encounters:</strong> The first, second, and <i>third</i> kind.</li>
            <li><strong>Books:</strong> Books that are commonly referenced.</li>
            <li><strong>Documentaries:</strong> Non-fiction films documenting knowledge we have so far.</li>
            <li><strong>Movies:</strong> Fictional films that might not be so fictional after all.</li>
            <li><strong>Games:</strong> Games that spark your imagination.</li>
        </ul>
        `;

function initializeHomeChart() {
  // Remove existing canvas if it exists
  const existingCanvas = document.getElementById("output");
  if (existingCanvas) {
    existingCanvas.remove();
  }

  // Create a new canvas element
  const canvasDiv = document.createElement("canvas");
  canvasDiv.setAttribute("id", "output");
  homeDiv.appendChild(canvasDiv);

  // Check if the subtitle element already exists
  let subDiv = document.getElementById("subtitle");
  if (!subDiv) {
    subDiv = document.createElement("div");
    subDiv.setAttribute("id", "subtitle");
  }

  subDiv.innerHTML = `
    Source: This dataset was scraped, geolocated, and time standardized from NUFORC data by Sigmond Axel <a href="https://github.com/planetsig/ufo-reports" target="_blank">here</a>
    `;
  homeDiv.appendChild(subDiv);

  parseData();
}

export { homeDiv, initializeHomeChart };
