
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
        var isInBooks = false
        for(i in model.app.currentUser.addedBooks){
            if(model.app.currentUser.addedBooks[i].title==currentBook.title){
                isInBooks=true
            }
        }
        if(!isInBooks){
            model.app.currentUser.addedBooks.push(currentBook)
        }
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

// Gi stjerne, rate bok
function rateBook(ratingValue) {
    if (!model.app.currentUser) {
        console.warn("User must be logged in to rate a book.");
        // Optionally, call a function to show the login UI here
        return;
    }

    // 1. Get all star elements
    const starContainer = document.querySelector('.star-rating');
    const allStars = starContainer.querySelectorAll('.fa-star'); // Use the shared class

    // 2. Loop through the stars
    for (let i = 0; i < allStars.length; i++) {
        const star = allStars[i];
        
        // The core comparison is here:
        if (i < ratingValue) {
            // If the zero-indexed position (i) is less than the one-indexed value (ratingValue),
            // it means this star is part of the rating.
            star.style.color = 'yellow';
        } else {
            // Otherwise, reset the color.
            star.style.color = '#4A3728'; 
        }
    }
    const currentBookRatings = model.data.bookInfo.ratings;
    const currentUserName = model.app.currentUser.name;

    const userRatingIndex = currentBookRatings.findIndex(
        rating => rating.userName === currentUserName
    );

    if (userRatingIndex !== -1) {
        currentBookRatings[userRatingIndex].value = ratingValue; 
    } else {
        currentBookRatings.push({
            userName: currentUserName,
            value: ratingValue
        });
    }

    console.log(model.data.bookInfo.ratings)


}