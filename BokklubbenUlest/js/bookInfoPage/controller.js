
// Når du klikker på en bok
function selectBook(id) {

    const selectedBook = model.data.bookList.find((book) => book.id==id)

    model.data.bookInfo = selectedBook;

    if (selectedBook) {
        model.data.bookInfo = selectedBook;
        bookInfoPage();
    } else {
        console.error("Bok-ID ikke funnet:", id);
    }
}

// Favoritt-bok
function addToFavorites() {
    checkLogIn();

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

        const heartIcon = document.getElementById('heart-icon');
        heartIcon.classList.remove('fa-solid'); 
        heartIcon.classList.add('fa-regular');

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
        const heartIcon = document.getElementById('heart-icon');
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
    }
    syncAndStore('favorite');
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
    const finalRatingValue = updateBookRatingInModel(ratingValue);

    const starContainer = document.querySelector('.star-rating');
    const allStars = starContainer.querySelectorAll('.fa-star');

    for (let i = 0; i < allStars.length; i++) {
        const star = allStars[i];
        
        if (i < finalRatingValue) {
            star.style.color = 'yellow';
        } else {
            star.style.color = '#4A3728'; 
        }
    }
}

// For å kunne un-rate
function updateBookRatingInModel(ratingValue) {
    checkLogIn();

    const currentBookRatings = model.data.bookInfo.ratings;
    const currentUserName = model.app.currentUser.name;

    const userRatingIndex = currentBookRatings.findIndex(
        rating => rating.userName === currentUserName
    );
    
    const currentUserRatingValue = userRatingIndex !== -1 
        ? currentBookRatings[userRatingIndex].value 
        : 0; 

    let newRatingValue = ratingValue;
    
    if (newRatingValue === currentUserRatingValue) {
        newRatingValue = 0;
    } 
    
    if (newRatingValue === 0 && userRatingIndex !== -1) {
        currentBookRatings.splice(userRatingIndex, 1);

    } else if (userRatingIndex !== -1) {
        currentBookRatings[userRatingIndex].value = newRatingValue;

    } else if (newRatingValue !== 0) {
        currentBookRatings.push({
            userName: currentUserName,
            value: newRatingValue
        });
    }
    syncAndStore('rating')
    updateCurrentUser();
    saveData();

    return newRatingValue;
}

// For å komme til bruker-profil fra bokinfo-siden
function linkToProfile() {
    checkLogIn();
    const username = model.data.bookInfo.addedByUser;
    const userObject = findUserByUsername(username); 

    if (userObject) {
        model.app.currentPage = 'userProfile';
        generateProfile(userObject);
    } else {
        console.error("Brukeren '" + username + "' som la til boken ble ikke funnet.");
    }
}

// Sjekker at bruker er innlogget
// Hvis ikke sier den fra i konsollen
// Hindrer krasj når man ikke er logget inn
function checkLogIn() {
    if (!model.app.currentUser) {
        console.warn("Du må være innlogget for å bruke funksjonen!");
        return;
    }
}

// Synkroniserer og lagrer forandringer
function syncAndStore(actionType) {
    if (actionType === 'favorite') {
        const currentBook = model.data.bookInfo;
        const bookTitle = currentBook.title;
        const masterBookIndex = model.data.bookList.findIndex(
        viewedBook => viewedBook.title === bookTitle
        );
    
        if (masterBookIndex !== -1) {
            model.data.bookList[masterBookIndex].isFavorite = currentBook.isFavorite;
        }
    } else if (actionType === 'rating') {
        const bookTitle = model.data.bookInfo.title;
        const masterBookIndex = model.data.bookList.findIndex(
        ratedBook => ratedBook.title === bookTitle
        );

        if (masterBookIndex !== -1) {
            model.data.bookList[masterBookIndex].ratings = model.data.bookInfo.ratings;
        }
    }
}

// Kalkulerer gjennomsnitts-vurdering av bok
function calculateAverageRating(ratings) {
    if (ratings.length === 0) {
        return 'Ikke vurdert';
    }

    const totalSum = ratings.reduce( (totalSum, ratingObject) => {
        return totalSum + ratingObject.value; 
    }, 0);

    const average = totalSum / ratings.length;
    const roundedAverage = average.toFixed(1); 
    
    return `${roundedAverage} av 5 stjerner!`;
}