const bookmarks = document.querySelectorAll('[data-js="bookmarks"]');

bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', function() {
        bookmark.classList.toggle('aktiveBookmark');
    });
});

const buttonShowAnswer = document.querySelector('[data-js="buttonShowAnswer"]'); 

buttonShowAnswer.addEventListener("click", () => {
    const existingAnswer = document.querySelector(".answer");
    
    if (existingAnswer) {
        existingAnswer.remove();
        buttonShowAnswer.textContent = "Show Answer"; 

    } else {
        const answer = document.createElement('p');
        answer.textContent = "flex-direction";
        answer.classList.add("answer");
        
        buttonShowAnswer.insertAdjacentElement("afterend", answer);
        buttonShowAnswer.textContent = "Hide Answer"; 
    }
});










