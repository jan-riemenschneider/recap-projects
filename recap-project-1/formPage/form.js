const buttonSubmit = document.querySelector('[data-js="button"]');
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const question = document.querySelector('[name="yourQuestion"]').value;
    const answer = document.querySelector('[name="yourAnswer"]').value;
    const tags = document.querySelector('[name="text"]').value;

    const newCard = document.createElement('section'); 
    newCard.classList.add('section'); 

    newCard.innerHTML = `
        <i data-js="bookmarks" class="material-icons" id="booksmark1" style="font-size: 45px;">bookmark</i>
        <p id="question1">${question}</p>
        <button data-js="buttonShowAnswer" class="button-answer" aria-labelledby="question1">Show Answer</button>
        <div class="hashtags" aria-label="Ähnliche Themen"> 
            <span>${tags}</span>
            <span>${tags}</span>
            <span>${tags}</span>
        </div>
    `;

    buttonSubmit.after(newCard);

    form.reset();
});

