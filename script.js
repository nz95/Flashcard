const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let card = document.getElementById('card-content'); // initialize a card as card-content

    if (showingTerm) { // if term should be showing, show term
        card.textContent = flashcards[currentIndex].term;
    } else { // else show definition
        card.textContent = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners
document.getElementById('flashcard').addEventListener('click', function() {
    showingTerm = !showingTerm; // clicking on card will toggle term and definition
    displayCard();
});

document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % flashcards.length; // looping back to start of the cards
    showingTerm = true; // make the term of next card show by default
    displayCard();
});

document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; // looping backwards, going back to beginning once end is reached
    showingTerm = true; // make the term of previous card show by default
    displayCard();
});

document.getElementById('add-card-btn').addEventListener('click', function() {
    let newTerm = document.getElementById('new-term').value; // initialize the term
    let newDefinition = document.getElementById('new-definition').value; // and the definition

    flashcards.push({ 
        term: newTerm, 
        definition: newDefinition 
    }); // push the term and definition into the flashcards array
    document.getElementById('new-term').value = ''; // clear the areas where you input terms and definitions
    document.getElementById('new-definition').value = ''; // clear the areas where you input terms and definitions
});

// This line will display the card when the page is refreshed
window.onload = displayCard;