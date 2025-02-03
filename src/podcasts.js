const podcastsDiv = document.createElement("div");
podcastsDiv.innerHTML = `
        <div class="podcasts-header"><b>Podcasts</b></div>
        <div class="podcasts">
            <div class="podcast">
                <div class="podcast-title">Jesse Michels</div>
                <div class="podcast-content">
                <img src='./files/images/jesse-michels.jpeg'>
                    The Jesse Michels Podcast is a thought-provoking show that explores unconventional ideas, emerging technologies, and deep dives into history, science, and culture. 
                </div>
                <div class="icons">
                    <a href="https://github.com/erikgrinn/odin-calculator" target="_blank" rel="noopener noreferrer"><img src="./icons/star-plus-outline.svg" heigh="25px" width="25px"></a>
                    <a href="https://erikgrinn.github.io/odin-calculator/" target="_blank" rel="noopener noreferrer"><img src="./icons/eye-plus-outline.svg" heigh="25px" width="25px"></a>
                    <a href="https://github.com/erikgrinn" target="_blank" rel="noopener noreferrer"><img src="./icons/share-variant-outline.svg" heigh="25px" width="25px"></a>
                </div>
            </div>
            <div class="podcast">
                <div class="podcast-title">Calculator-2</div>
                <div class="podcast-content">
                    Are you tired of doing every single calculation by hand?
                    Does your abacus display signs of extended wear and tear?
                    This calculator app is here to solve all of your calculation woes. 
                    Just don't perform the forbidden operation...
                </div>
                <div class="icons">
                    <a href="https://github.com/erikgrinn/odin-calculator" target="_blank" rel="noopener noreferrer"><img src="./icons/star-plus-outline.svg" heigh="25px" width="25px"></a>
                    <a href="https://erikgrinn.github.io/odin-calculator/" target="_blank" rel="noopener noreferrer"><img src="./icons/eye-plus-outline.svg" heigh="25px" width="25px"></a>
                    <a href="https://github.com/erikgrinn" target="_blank" rel="noopener noreferrer"><img src="./icons/share-variant-outline.svg" heigh="25px" width="25px"></a>
                </div>
            </div>
            <div class="podcast">
                <div class="podcast-title">Calculator-3</div>
                <div class="podcast-content">
                    Are you tired of doing every single calculation by hand?
                    Does your abacus display signs of extended wear and tear?
                    This calculator app is here to solve all of your calculation woes. 
                    Just don't perform the forbidden operation...
                </div>
                <div class="icons">
                    <a href="https://github.com/erikgrinn/odin-calculator" target="_blank" rel="noopener noreferrer"><img src="./icons/star-plus-outline.svg" heigh="25px" width="25px"></a>
                    <a href="https://erikgrinn.github.io/odin-calculator/" target="_blank" rel="noopener noreferrer"><img src="./icons/eye-plus-outline.svg" heigh="25px" width="25px"></a>
                    <a href="https://github.com/erikgrinn" target="_blank" rel="noopener noreferrer"><img src="./icons/share-variant-outline.svg" heigh="25px" width="25px"></a>
                </div>
            </div>
        </div>
`;
// podcastsDiv.innerHTML = `
// Jesse Michels
// <br>
// Joe Rogan
// <br>
// Julian Dorey
// <br>
// NewsNation
// <br>
// Wartime Stories`

export { podcastsDiv };
