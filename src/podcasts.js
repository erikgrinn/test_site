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
  constructor(title, podcastIcon, description, links) {
    this.title = title;
    this.podcastIcon = podcastIcon;
    this.description = description;
    this.links = links;

    // create podcast container
    const podcast = document.createElement("div");
    podcast.setAttribute("class", "podcast");

    // create and append podcast title
    const podcastTitle = document.createElement("div");
    podcastTitle.setAttribute("class", "podcast-title");
    podcastTitle.textContent = this.title;
    podcast.appendChild(podcastTitle);

    // create content container for image and description
    const podcastContent = document.createElement("div");
    podcastContent.setAttribute("class", "podcast-content");

        // create and append image to podcast-content container
        const podcastIconImg = document.createElement("img");
        podcastIconImg.setAttribute("src", this.podcastIcon);
        podcastIconImg.setAttribute("alt", `${this.host} icon`);
        podcastContent.appendChild(podcastIconImg);

        // create and append image to podcast-content container
        const podcastDescription = document.createElement("div");
        podcastDescription.setAttribute("class", "podcast-description");
        podcastDescription.textContent = this.description;
        podcastContent.appendChild(podcastDescription);

    // append podcast-content to podcast
    podcast.appendChild(podcastContent);

    // create icon container for links


    // // Create and append podcast links
    // const podcastLinks = document.createElement('div');
    // podcastLinks.setAttribute('class', 'podcast-links');
    // this.links.forEach(link => {
    //     const linkElement = document.createElement('a');
    //     linkElement.setAttribute('href', link);
    //     linkElement.setAttribute('target', '_blank');
    //     linkElement.textContent = link;
    //     podcastLinks.appendChild(linkElement);
    // });
    // podcast.appendChild(podcastLinks);

    // finally, append podcast to podcasts
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
//                 <div class="podcast-links">
//                     <a href="https://www.youtube.com/Jessemichels" target="_blank" rel="noopener noreferrer"><img src="./files/images/icons/youtube.svg" heigh="25px" width="25px"></a>
//                     <a href="https://open.spotify.com/show/1WqA0m5xTcp4n6qmCQfS2K" target="_blank" rel="noopener noreferrer"><img src="./files/images/icons/spotify.svg" heigh="25px" width="25px"></a>
//                     <a href="https://podcasts.apple.com/my/podcast/american-alchemy/id1771917740" target="_blank" rel="noopener noreferrer"><img src="./files/images/icons/apple.svg" heigh="25px" width="25px"></a>
//                 </div>
//             </div>
//         </div>
// `;

export { podcastsDiv };
