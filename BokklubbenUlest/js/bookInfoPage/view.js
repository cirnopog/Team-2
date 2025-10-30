
// Viser bok-info-siden
function bookInfoPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="bookInfoHeading">Om boken<h1>
        <div class="bookInfoContainer">
            <div class="left-column">
                <div class="left-header">
                    <div class="header-split-left">
                        <h4>${model.data.bookInfo.title}</h4>
                    </div>
                    <div class="header-split-right">
                        <i id="heart-icon" class="fa-solid fa-heart" style="color: ${model.data.bookInfo.isFavorite ? 'red' : '#4A3728'};" onclick="addToFavorites()"></i>
                    </div>
                </div>
                <div class="left-main-area">
                    <p>Forfatter: ${model.data.bookInfo.author}</p>
                    <P>Utgivelsesår: ${model.data.bookInfo.releaseDate}</p>
                    <p>Vurdering: ${model.data.bookInfo.ratings}</p>
                    <p>Beskrivelse:</p>
                    <p class="book-description-field">${model.data.bookInfo.description}</p>
                </div>
                <div class="left-footer">
                    <div class="footer-split-left">
                        <p>Lagt til av: ${model.data.bookInfo.addedByUser}</p>
                    </div>
                    <div class="footer-split-right">
                        <button id="buyBook-button" onclick="buyBook()">Kjøp bok</button>
                    </div>
                </div>
            </div>
            <div class="right-content">
                <div class="right-main-area">
                    <img src="${model.data.bookInfo.img}" alt="Bokcover">
                </div>
                <div class="right-footer">
                    <div class="star-rating">
                        <p id="bookRating">Gi rating:</p>
                        <i class="fa-solid fa-star fa-sm" style="color: #4A3728;" onclick="rateBook(1)"></i>
                        <i class="fa-solid fa-star fa-sm" style="color: #4A3728;" onclick="rateBook(2)"></i>
                        <i class="fa-solid fa-star fa-sm" style="color: #4A3728;" onclick="rateBook(3)"></i>
                        <i class="fa-solid fa-star fa-sm" style="color: #4A3728;" onclick="rateBook(4)"></i>
                        <i class="fa-solid fa-star fa-sm" style="color: #4A3728;" onclick="rateBook(5)"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
}