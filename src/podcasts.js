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

    // // Create and append podcast links
    const podcastLinks = document.createElement('div');
    podcastLinks.setAttribute('class', 'podcast-links');
    this.links.forEach((link, index) => {
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', link);
        linkElement.setAttribute('target', '_blank');
        linkElement.setAttribute('rel', 'noopener noreferrer')
    
        // Set different innerHTML based on the index
        if (index === 0) {
            linkElement.innerHTML = `<img src="./files/images/link-icons/youtube.svg" height="25px" width="25px" alt="YouTube">`;
        } else if (index === 1) {
            linkElement.innerHTML = `<img src="./files/images/link-icons/spotify.svg" height="25px" width="25px" alt="Spotify">`;
        } else if (index === 2) {
            linkElement.innerHTML = `<img src="./files/images/link-icons/apple.svg" height="25px" width="25px" alt="Apple Podcast">`;
        }
        podcastLinks.appendChild(linkElement);
    })
    podcast.appendChild(podcastLinks);

    // finally, append podcast to podcasts
    podcasts.appendChild(podcast);
  }
}

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


// podcast-icons are probably too heavy / too many KB
const podcast1 = new Podcast(
  "Julian Dorey",
  "./files/images/podcast-icons/julian-dorey.jpg",
  "Julian Dorey's long-form podcast features many important figures discussing topics that make you wonder how you didn't know them before.",
  [
    "https://www.youtube.com/@JulianDorey",
    "https://open.spotify.com/show/5skaSpDzq94Kh16so3c0uz",
    "https://podcasts.apple.com/us/podcast/julian-dorey-podcast/id1531416289",
  ]
);

const podcast2 = new Podcast(
  "Jesse Michels",
  "./files/images/podcast-icons/jesse-michels.jpeg",
  "The Jesse Michels Podcast is a thought-provoking show that explores unconventional ideas, emerging technologies, and deep dives into history, science, and culture.",
  [
    "https://www.youtube.com/@Jessemichels",
    "https://open.spotify.com/show/1WqA0m5xTcp4n6qmCQfS2K",
    "https://podcasts.apple.com/us/podcast/american-alchemy/id1771917740",
  ]
);

const podcast3 = new Podcast(
    "Joe Rogan",
    "./files/images/podcast-icons/joe-rogan.jpg",
    "Joe Rogan interviews a wide range of guests, discussing topics like culture, science, politics, and personal experiences in an open and unfiltered format.",
    [
      "https://www.youtube.com/@joerogan",
      "https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk",
      "https://podcasts.apple.com/us/podcast/the-joe-rogan-experience/id360084272",
    ]
  );

export { podcastsDiv };
