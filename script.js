// Task 1 sample data
const sampleData = {
    id: 1,
    title: "The Lantern Orchard",
    author: "Mere Kingsley",
    year: 2019,
    genre: "Literary Fiction",
    description: "In a valley orchard lit each autumn by paper lanterns, three generations of the Tuhoro family gather to settle an inheritance that is less about land than about who gets to tell the family's story. Kingsley's slow-burning novel moves between the orchard's founding in the 1950s and its uncertain present, asking what we owe the people who planted trees they would never see fruit.",
    cover_url: "https://bit-pro.github.io/exam-data-x7k2q9/covers/1.svg"
}

const featured = document.querySelector("#featured");

const featuredBook = `
    <img src="${sampleData.cover_url}" alt="${sampleData.title}">
    
    <div class="featured-info">
        <h2>${sampleData.title}</h2>
        <p class ="meta">${sampleData.author} · ${sampleData.year} · ${sampleData.genre}</p>
        <p class="description">${sampleData.description}</p>
        <button id="toggle-desc">Show More</button>
    </div>
`;

    featured.innerHTML = featuredBook;

    const toggleButton = document.querySelector("#toggle-desc");
    const description = document.querySelector(".description");

    toggleButton.addEventListener("click", function (){
        description.classList.toggle("reveal");

        if (description.classList.contains("reveal")){
            toggleButton.textContent = "Show less";
        }
        else {
            toggleButton.textContent = "Show more";
        }
    });

    // Tasks 1, 3, 4 and 6: your JavaScript goes here
async function getData()
{
    const response = await fetch("https://bit-pro.github.io/exam-data-x7k2q9/books.json");
    const data = await response.json();

    let cards = "";
    
    data.forEach(book => {
        cards +=`
            <article class="card">
                <img src="${book.cover_url}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <p>${book.year}</p>
                <p>${book.genre}</p>
                <p class="description">${book.description}</p>

            </article>
        `;
    });

    document.querySelector("#card-grid").innerHTML = cards;
}

getData();

const descriptionCheckbox = document.querySelector("#show-descriptions");

descriptionCheckbox.addEventListener("change", function (){
    const descriptions = document.querySelectorAll("#card-grid .description");

    if(descriptionCheckbox.checked)
    {
        descriptions.forEach(description => {
            description.classList.add("reveal");
        });
    }
    else
    {
        descriptions.forEach(description => {
            description.classList.remove("reveal");
        });
    }
});
