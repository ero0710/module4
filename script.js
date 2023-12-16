const accessKey = '-KD4d81hPzmencEB7rwNrK6wl2YyAL_pFcCQwFHyktY';

const form       = document.querySelector("form");
const inputEL          = document.getElementById("search-input");
const searchResults        = document.querySelector(".search-results");
const showMore         = document.getElementById("show-more-button");

form.addEventListener("submit",(event:SubmitEvent)=>{
    event.preventDefault()
    searchImages()
})

let inputData = '';
let page = 1;


async function searchImages() {
    inputData = inputEL.value;
    const url = `https://unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url)
    const data = await response.json()
    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((results) => {
        const.imageWrapper = document.createElement('div');
        imageWrapper.classlist.add('search-result');
        const image = document.createElement('img')
        image.src = result.urls.small();
        image.alt - result.alt_description;
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html;
        imageLink.target = "_black";
        imageLink.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageWrapper);
    })
}