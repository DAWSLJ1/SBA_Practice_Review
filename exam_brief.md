# Web Development Practical Exam
**Duration: 1 hour 45 minutes · Total marks: 100**


> **Git — read this first.**
> Your commit history is part of the assessment and cannot be fixed retroactively. Commit after each task with a descriptive message (e.g. "Add HTML structure", "Style featured item"). A single end-of-exam commit earns no marks for Task 7.

## Overview

Build a web page that displays a featured item and a grid of books. Follow the provided mockup — no visual design decisions are required from you.

The page has two sections:
- A **featured item** at the top — rendered from the sample data object, always visible, styled with flexbox
- A **card grid** below — populated from the course API using JavaScript

## The API

The API URL is `https://bit-pro.github.io/exam-data-x7k2q9/books.json`. Each item in the response has these fields:

`id` · `title` · `author` · `year` · `genre` · `description` · `cover_url`

```js
const response = await fetch('API_URL_HERE');
const data = await response.json();
```

## Setup

1. Read these instructions all the way through first
2. Accept the Classroom 50 assignment to get the repo
3. Read the `README.md` file carefully
4. Clone the repo to your H drive
5. Complete the 7 tasks by following the instructions below
6. You will make all your commits on the `main` branch

## Task 1 — HTML structure and featured item [20 marks]

### Page structure
In `index.html`:

- `<header>` containing an `<h1>` with the page title
- `<main>` wrapping both sections
- `<footer>` with your name and student ID
- `<link>` to external `style.css` in `<head>`
- `<script>` linking `script.js` just before `</body>`
- A descriptive `<title>` in `<head>`

Inside `<main>`, add the two empty containers your JavaScript will fill:

```html
<section id="featured"></section>
<div id="card-grid"></div>
```

### Featured item
At the top of `script.js` there is a `sampleData` object holding one book. In your JavaScript, build the featured item as a **template literal** string, reading each value off that object with **dot notation** (`sampleData.title`, `sampleData.author`, and so on). Put the finished string into `#featured` using `innerHTML`.

The HTML you produce must have this structure:

```html
<img src="..." alt="...">
<div class="featured-info">
  <h2>Title here</h2>
  <p class="meta">Author · Year · Genre</p>
  <p class="description">Description text here...</p>
  <button id="toggle-desc">Show more</button>
</div>
```

Write a real `alt` description for the image — describe what the cover shows; don't just write "image" or "cover".

> Because the button is created by your JavaScript, add your Task 3 event listener **after** the line that fills `#featured`.

## Task 2 — CSS: featured item [16 marks]

- `display: flex` on `#featured` so the image and text sit side by side
- `gap` between the image and the text block
- Cover image at a fixed width of 180px; it must not stretch
- `.description` hidden by default — add a class that reveals it when toggled (Task 3 handles the JS)
- Header and footer styled to match the mockup (font, colour, padding)
- A background colour for the page

Use these colours so your page matches the mockup:

| Where | Colour |
| --- | --- |
| Page background (`body`) | `#eef1f0` |
| Header and footer background | `#22302d` |
| Header and footer text | `#ffffff` |
| Featured panel and card background | `#ffffff` |
| Button background | `#3c7d6f` |
| Body text | `#1f2a28` |

> Tip: temporarily add the reveal class in the HTML to check it looks right, then remove it.

## Task 3 — JavaScript: show more / show less [12 marks]

In `script.js`, add an event listener to the button so that clicking it:
- Toggles a CSS class on `.description` to show or hide the full text
- Changes the button's `textContent` to "Show less" when visible, and back to "Show more" when hidden

Use `querySelector` to select elements. Update `textContent` — don't replace the button with `innerHTML`.

## Task 4 — JavaScript: fetch and render cards [22 marks]

Fetch all items from the API and render them into `#card-grid`:
- Use `async`/`await` to fetch and parse the JSON
- Loop over the items with `forEach` or `for...of`
- Build each card as a **template literal** string. Add each card onto a string variable with `+=` inside the loop, then assign that finished string to the grid's `innerHTML` **once, after** the loop has ended
- Each card must include: cover image (with `alt`), title, author, year, genre, and description — matching the mockup
- Put each card's description in a `<p>` with a class of `description`, the same as the featured item
- Each card must have a class of `card` (or you won't get marks for later tasks)
- Call your function on page load

> Assigning to `innerHTML` inside the loop rebuilds the whole grid on every pass, throwing away and recreating every card you have already built. Build the string first, then assign it once.

## Task 5 — CSS: card grid layout [14 marks]

### Grid container
- Make `#card-grid` a grid container
- Set its columns with the `repeat()` function so the cards sit in at least three equal columns
- Put a gap between the cards

### Card styling
- Make each `.card` a flex container that stacks its contents in a column
- Give each card a background colour, padding, and rounded corners
- Give the cover image a fixed width of 140px and let its height adjust automatically — the same way you sized the featured cover in Task 2

## Task 6 — Show descriptions checkbox [6 marks]

Add a checkbox that shows and hides the description on every card.

- **In your CSS**, hide the card descriptions by default, the same way you hid the featured description in Task 2. (If you wrote that rule for `.description` rather than `#featured .description`, it already covers the cards.)
- **In your HTML**, add an `<input type="checkbox">` with a matching `<label>`, placed above `#card-grid`
- **In your JavaScript**, listen for the checkbox's `change` event
- When it is ticked, show every card's description; when it is unticked, hide them again

You already know how to do this from Task 3 — it is the same class-toggling idea, applied to the cards.

> The cards do not exist until the fetch in Task 4 has finished, so select the card descriptions **inside** your event handler rather than at the top of the file.

## Task 7 — Git workflow [10 marks]

- At least one commit per task as you complete it
- Messages must describe the change — not "update", "fix", or "done"
- At least 5 commits total across the exam

> Commit working code often. A mid-task commit is better than no commit if you run out of time.

## Academic integrity

This is an individual exam. You must not communicate with other students or share code.

You **may** use: course notes, MDN Web Docs, CSS Tricks.

You **must not** use: AI code generation tools (GitHub Copilot, ChatGPT, etc.).

Examiners may ask follow-up questions about submitted code.
