const podcastsDiv = document.createElement("div");

const podcastsHeader = document.createElement("div");
podcastsHeader.setAttribute("class", "podcasts-header");
podcastsHeader.style.fontWeight = "bold";
podcastsHeader.textContent = "Podcasts";
podcastsDiv.appendChild(podcastsHeader);

const podcasts = document.createElement("div");
podcasts.setAttribute("class", "podcasts");
podcastsDiv.appendChild(podcasts)

class Podcast {
  constructor(host, podcastIcon, description, links) {
    this.host = host;
    this.podcastIcon = podcastIcon;
    this.description = description;
    this.links = links;

    const podcast = document.createElement("div");
    podcast.setAttribute("class", "podcast");

    const podcastTitle = document.createElement("div");
    podcastTitle.setAttribute("class", "podcast-title");
    podcastTitle.textContent = this.host;
    podcast.appendChild(podcastTitle);

    // content div container for image and description
    const podcastContent = document.createElement("div");
    podcastContent.setAttribute("class", "podcast-content");

    // image
    const podcastIconImg = document.createElement("img");
    podcastIconImg.setAttribute("src", this.podcastIcon);
    podcastIconImg.setAttribute("alt", `${this.host} icon`);
    podcastContent.appendChild(podcastIconImg);

    // description
    const podcastDescription = document.createElement("div");
    podcastDescription.setAttribute("class", "podcast-description");
    podcastDescription.textContent = this.description;
    podcastContent.appendChild(podcastDescription);

    // append contentDiv to podcastDiv
    podcast.appendChild(podcastContent);

    podcasts.appendChild(podcast);
  }
}

const podcast1 = new Podcast(
  "Jesse Michels",
  "./files/images/podcast-icons/jesse-michels.jpeg",
  "The Jesse Michels Podcast is a thought-provoking show that explores unconventional ideas, emerging technologies, and deep dives into history, science, and culture.",
  [
    "https://www.youtube.com/Jessemichels",
    "https://open.spotify.com/show/1WqA0m5xTcp4n6qmCQfS2K",
    "https://podcasts.apple.com/my/podcast/american-alchemy/id1771917740",
  ]
);

const podcast2 = new Podcast(
  "Jesse Michels",
  "./files/images/podcast-icons/jesse-michels.jpeg",
  "The Jesse Michels Podcast is a thought-provoking show that explores unconventional ideas, emerging technologies, and deep dives into history, science, and culture.",
  [
    "https://www.youtube.com/Jessemichels",
    "https://open.spotify.com/show/1WqA0m5xTcp4n6qmCQfS2K",
    "https://podcasts.apple.com/my/podcast/american-alchemy/id1771917740",
  ]
);

const podcast3 = new Podcast(
    "Jesse Michels",
    "./files/images/podcast-icons/jesse-michels.jpeg",
    "The Jesse Michels Podcast is a thought-provoking show that explores unconventional ideas, emerging technologies, and deep dives into history, science, and culture.",
    [
      "https://www.youtube.com/Jessemichels",
      "https://open.spotify.com/show/1WqA0m5xTcp4n6qmCQfS2K",
      "https://podcasts.apple.com/my/podcast/american-alchemy/id1771917740",
    ]
  );


// podcastsDiv.innerHTML = `
//         <div class="podcasts-header"><b>Podcasts</b></div>
//         <div class="podcasts">
//             <div class="podcast">
//                 <div class="podcast-title">Jesse Michels</div>
//                 <div class="podcast-content">
//                 <img src='./files/images/podcast-icons/jesse-michels.jpeg'>
//                     The Jesse Michels Podcast is a thought-provoking show that explores unconventional ideas, emerging technologies, and deep dives into history, science, and culture.
//                 </div>
//                 <div class="icons">
//                     <a href="https://www.youtube.com/Jessemichels" target="_blank" rel="noopener noreferrer"><img src="./files/images/icons/youtube.svg" heigh="25px" width="25px"></a>
//                     <a href="https://open.spotify.com/show/1WqA0m5xTcp4n6qmCQfS2K" target="_blank" rel="noopener noreferrer"><img src="./files/images/icons/spotify.svg" heigh="25px" width="25px"></a>
//                     <a href="https://podcasts.apple.com/my/podcast/american-alchemy/id1771917740" target="_blank" rel="noopener noreferrer"><img src="./files/images/icons/apple.svg" heigh="25px" width="25px"></a>
//                 </div>
//             </div>
//         </div>
// `;

export { podcastsDiv };
