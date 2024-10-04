const bookmarks = document.querySelectorAll('[data-js="bookmarks"]');

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", function () {
    bookmark.classList.toggle("aktiveBookmark");
  });
});

const buttons = document.querySelectorAll('[data-js="buttonShowAnswer"]');

const answer = {
  question1: "The property that flips the axes in Flexbox is 'flex-direction'.",
  question2: "Lorem ipsum is a placeholder text commonly used.",
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const questionId = button.getAttribute("aria-labelledby");
    const answerContainer = button.nextElementSibling;
    if (answerContainer.innerHTML !== "") {
      answerContainer.innerHTML = "";
      button.textContent = "Show Answer";
    } else {
      const answerText = answer[questionId];
      const answerElement = document.createElement("p");
      answerElement.textContent = answerText;
      answerElement.classList.add("answer");
      answerContainer.appendChild(answerElement);
      button.textContent = "Hide Answer";
    }
  });
});

/* 

1. Eine neues formPage dazu packen wo die Karten generiert werden 
2. einen botton und ein formular der botteon soll ein neue karte genereirenn 
und diese an die homepage anheften 
3. die fragen die antworten und hashtags müssen dynamisch sein ggf. mit $
4. 

*/
