// Task 1 sample data
console.log("test");
const sampleData = {
  id: 1,
  title: "The Lantern Orchard",
  author: "Mere Kingsley",
  year: 2019,
  genre: "Literary Fiction",
  description:
    "In a valley orchard lit each autumn by paper lanterns, three generations of the Tuhoro family gather to settle an inheritance that is less about land than about who gets to tell the family's story. Kingsley's slow-burning novel moves between the orchard's founding in the 1950s and its uncertain present, asking what we owe the people who planted trees they would never see fruit.",
  cover_url: "https://bit-pro.github.io/exam-data-x7k2q9/covers/1.svg",
};

// Tasks 1, 3, 4 and 6: your JavaScript goes here

async function getData() {
  const response = await fetch(
    "https://bit-pro.github.io/exam-data-x7k2q9/books.json",
  );
  const data = await response.json();
}

const featured = document.querySelector("#featured");

function DisplayFeatured() {
  const bookName = `<article class="card">
        <img src="${sampleData.cover_url}" alt="${sampleData.title}">
        <div class="featured-info">
    <h2>${sampleData.title} ${sampleData.id}</h2>
    <p class="meta">Author: ${sampleData.author} </p>
    <p class="year">Year: ${sampleData.year}</p>
        <p class="genre">Genre: ${sampleData.genre}</p>
        <p class="description">Description: ${sampleData.description}</p>

    </div>
    </article>`;
  featured.innerHTML = bookName;
}
DisplayFeatured();
function changeColor() {
  document.body.style.backgroundColor("#eef1f0");
  document.head.style.backgroundColor("#22302d");
}
const allDescriptions = document.querySelectorAll(".description");
const btn = document.querySelector("#description-toggle");
let hidden = false;
btn.addEventListener("click", () => {
    
    
  hidden = !hidden;
  console.log(allDescriptions);
  
  allDescriptions.forEach((description) => {
      
      description.classList.toggle("hidden");
      console.log(description.classList);
  });
  
  btn.textContent = hidden ? "Show descriptions" : "Hide descriptions";
});


/*
const btn = document.querySelector("#description-toggle")
const allDescriptions = document.querySelectorAll(".description")
let hidden = false;
btn.addEventListener("click", () => {
    hidden = !hidden;
    allDescriptions.forEach((description) => {
      description.classList.toggle("hidden");

      btn.textContent = hidden ? "Show descriptions" : "Hide descriptions";  
}
)}
)}
*/
//}