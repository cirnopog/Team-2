
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
function addToFavorites() {
    const currentBook = model.data.bookInfo;
    const bookTitle = currentBook.title;

    if (currentBook.isFavorite === true) {
        currentBook.isFavorite = false;
        const favoriteIndex = model.app.currentUser.favorites.findIndex(
            favoriteBook => favoriteBook.title === bookTitle
        );
        
        if (favoriteIndex !== -1) {
            model.app.currentUser.favorites.splice(favoriteIndex, 1);
        }

        document.getElementById('heart-icon').style.color = '#4A3728';

    } else {
        currentBook.isFavorite = true;
        model.app.currentUser.favorites.push(currentBook);
        document.getElementById('heart-icon').style.color = 'red';
    }

    // Synkronisere og lagre forandringer
    const masterBookIndex = model.data.bookList.findIndex(
        viewedBook => viewedBook.title === bookTitle
    );
    
    if (masterBookIndex !== -1) {
        model.data.bookList[masterBookIndex].isFavorite = currentBook.isFavorite;
    }

    updateCurrentUser();
    saveData();
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