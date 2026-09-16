// Task 1 sample data
const sampleData = {
    id: 1,
    title: "The Lantern Orchard",
    author: "Mere Kingsley",
    year: 2019,
    genre: "Literary Fiction",
    description: "In a valley orchard lit each autumn by paper lanterns, three generations of the Tuhoro family gather to settle an inheritance that is less about land than about who gets to tell the family's story. Kingsley's slow-burning novel moves between the orchard's founding in the 1950s and its uncertain present, asking what we owe the people who planted trees they would never see fruit.",
    cover_url: "https://bit-pro.github.io/exam-data-x7k2q9/covers/1.svg"
};

// Task 1: Build and display featured item
const featured = document.querySelector("#featured");

const featuredHTML = `
    <img src="${sampleData.cover_url}" alt="Book cover showing The Lantern Orchard by Mere Kingsley">
    <div class="featured-info">
        <h2>${sampleData.title}</h2>
        <p class="meta">${sampleData.author} · ${sampleData.year} · ${sampleData.genre}</p>
        <p class="description">${sampleData.description}</p>
        <button id="toggle-desc">Show more</button>
    </div>
`;

featured.innerHTML = featuredHTML;

// Task 3: Show more / show less functionality
const toggleBtn = document.querySelector("#toggle-desc");
const featuredDesc = document.querySelector("#featured .description");

toggleBtn.addEventListener("click", () => {
    featuredDesc.classList.toggle("visible");
    
    if (featuredDesc.classList.contains("visible")) {
        toggleBtn.textContent = "Show less";
    } else {
        toggleBtn.textContent = "Show more";
    }
});

// Task 4: Fetch and render cards
async function fetchAndRenderBooks() {
    try {
        const response = await fetch('https://bit-pro.github.io/exam-data-x7k2q9/books.json');
        const data = await response.json();
        
        let cardsHTML = "";
        
        data.forEach(book => {
            cardsHTML += `
                <article class="card">
                    <img src="${book.cover_url}" alt="Book cover showing ${book.title} by ${book.author}">
                    <h3>${book.title}</h3>
                    <p class="author">${book.author}</p>
                    <p class="year">${book.year}</p>
                    <p class="genre">${book.genre}</p>
                    <p class="description">${book.description}</p>
                </article>
            `;
        });
        
        const cardGrid = document.querySelector("#card-grid");
        cardGrid.innerHTML = cardsHTML;
        
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

// Call function on page load
fetchAndRenderBooks();

// Task 6: Show descriptions checkbox
const checkbox = document.querySelector("#show-descriptions");

checkbox.addEventListener("change", () => {
    const cardGrid = document.querySelector("#card-grid");
    const allCardDescriptions = cardGrid.querySelectorAll(".card .description");
    
    allCardDescriptions.forEach(desc => {
        if (checkbox.checked) {
            desc.classList.add("visible");
        } else {
            desc.classList.remove("visible");
        }
    });
});
