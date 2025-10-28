
// Når du klikker på en bok
function selectBook(index) {

    const bookIndex = Number(index);
    const selectedBook = model.data.bookList[bookIndex];

    model.data.bookInfo = selectedBook;

    if (selectedBook) {
        model.data.bookInfo = selectedBook;
        bookInfoPage();
    } else {
        console.error("Bok-indeks ikke funnet:", bookIndex);
    }
}

// Favoritt-bok
function addToFavourites() {
    document.getElementById('heart-icon').style.color = 'red';
}

// Kjøpe bok
function buyBook() {
    const newTab = window.open('about:blank', '_blank'); 
    const bookLink = model.data.bookInfo.purchaseLink; 
    if (newTab) {
        newTab.location.href = bookLink;
    }
}

// Gi stjerne
function giveStar(clickedStar) {
    clickedStar.style.color = 'yellow';
}