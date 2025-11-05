
// Viser bok-info-siden
function bookInfoPage() {
    const currentUserRatingValue = getUserRating();

    // Added by user stuff
    const addedByUser = model.data.bookInfo.addedByUser;
    const addedUserObject = findUserByUsername(addedByUser);

    const addedUserAvatar = addedUserObject ? addedUserObject.avatar : 'default-avatar.png';


    console.log(addedUserObject)

    const foundBook = model.app.currentUser.favorites.find((book) => book.title == model.data.bookInfo.title)
    if(foundBook!= null){
        console.log(foundBook)
        model.data.bookInfo.isFavorite=true
    }
    else{
        model.data.bookInfo.isFavorite=false
    }
    // Bokinfo-sidens html
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="bookInfoHeading">Om boken<h1>
        <div class="bookInfoContainer">
            <div class="left-column">
                <div class="left-header">
                    <div class="header-split-left">
                        <h4>${model.data.bookInfo.title}</h4>
                    </div>
                    <div class="header-split-right">
                        <i id="heart-icon" class="fa-heart ${model.data.bookInfo.isFavorite ? 'fa-solid' : 'fa-regular'}" onclick="addToFavorites()"></i>
                    </div>
                </div>
                <div class="left-main-area">
                    <p>Forfatter: ${model.data.bookInfo.author}</p>
                    <p>Samlet vurdering: ${calculateAverageRating(model.data.bookInfo.ratings)}</p>
                    <p>Beskrivelse:</p>
                    <p class="book-description-field">${model.data.bookInfo.description}</p>
                </div>
                <div class="left-footer">
                    <div class="footer-split-left">
                        <div class="user-profile-link" onclick="linkToProfile()">
                            <p>Lagt til av:</p>
                            <img src="img/${addedUserAvatar}" alt="${addedByUser}'s avatar" class="avatar-small">
                            <p>${addedByUser}</p>
                        </div>
                    </div>
                    <div class="footer-split-right">
                        <button id="buyBook-button" onclick="buyBook()">Kjøp bok</button>
                    </div>
                </div>
            </div>
            <div class="right-content">
                <div class="right-main-area">
                    <img class="bookCover" src="${model.data.bookInfo.img}" alt="Bokcover" width="300px">
                </div>
                <div class="right-footer">
                    <div class="star-rating">
                        <p id="bookRating">Gi rating:</p>
                        ${createStarHtml(currentUserRatingValue)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// For å vise bruker-rating
function getUserRating() {
    const currentUserName = model.app.currentUser ? model.app.currentUser.name : null;

    if (!currentUserName) {
        return 0;
    }

    const userRatingObject = model.data.bookInfo.ratings.find(
        rating => rating.userName === currentUserName
    );

    const currentUserRatingValue = userRatingObject ? userRatingObject.value : 0; 
    
    return currentUserRatingValue;
}

// Lager stjernene i ratingen
function createStarHtml(ratingValue) {
    let html = '';
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
        const iconStyle = i <= ratingValue ? 'fa-solid' : 'fa-regular'; 
        const colorClass = i <= ratingValue ? 'active-star' : ''; 

        html += /*HTML*/`
            <i class="fa-star ${iconStyle} ${colorClass}" 
                onclick="rateBook(${i})">
            </i>
        `;
    }
    return html;
}