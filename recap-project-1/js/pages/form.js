const buttonSubmit = document.querySelector('[data-js="button"]');
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const question = document.querySelector('[name="yourQuestion"]').value;
  const answer = document.querySelector('[name="yourAnswer"]').value;
  const tags = document.querySelector('[name="tag"]').value;

  const newCard = document.createElement("section");
  newCard.classList.add("section");

  newCard.innerHTML = `
        <i
          data-js="bookmarks"
          class="material-icons"
          id="booksmark2"
          style="font-size: 45px"
          >bookmark</i>
        <p id="question1">${question}</p>
        <button
          class="button-answer"
          data-js="buttonShowAnswer"
          aria-labelledby="question1"
        >
          Show Answer
        </button>
        <div class="answer-container"></div>
        <div class="hashtags">
          <span>${tags}</span>
          <span>${tags}</span>
          <span>${tags}</span>
        </div>
    `;

  localStorage.setItem("newCard", newCard);

  form.reset();
});
