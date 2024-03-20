const accessKey = "HfFamCdgfHmuXibRnLAu_E9xqz4n6rGQUJ-EWZhBNRs"

const searchForm = document.getElementById('Search-form');
const searchBox = document.getElementById('Search-box');
const searchResult = document.getElementById('Search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = "";
let page = 1;

const searchImage = async () => {
    keyword = searchBox.value;
    const url = `
    https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}
    `;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

// searchImage()
