
// Viser bok-info-siden
function bookInfoPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="bookInfoHeading">Om boken<h1>
        <div class="bookInfoContainer">
            <div class="left-column">
                <div class="left-header">
                    <div class="header-split-left">
                        <h6>${model.data.bookInfo.title}</h6>
                    </div>
                    <div class="header-split-right">
                        <p>Favoritt?</p>
                    </div>
                </div>

                <div class="left-main-area">
                    <p>Forfatter: ${model.data.bookInfo.author}</p>
                    <P>Utgivelsesår: ${model.data.bookInfo.releaseDate}</p>
                    <p>Vurdering: ${model.data.bookInfo.ratings}</p>
                    <p>Beskrivelse: ${model.data.bookInfo.description}</p>
                </div>

                <div class="left-footer">
                    <div class="footer-split-left">
                        <p>Lagt til av: ${model.data.users.name}</p>
                    </div>
                    <div class="footer-split-right">
                        <a href="">Kjøp boken!</a>
                    </div>
                </div>
            </div>
            <div class="right-content">
                <div class="right-main-area">
                <img src="${model.data.bookInfo.coverImg}" alt="Bokcover">
                </div>
                <div class="right-footer">
                <button id="giRating-button" type="submit">Gi rating</button>
                </div>
            </div>
        </div>
    `;
}

bookInfoPage()

/*

<div class="bookInfoContainer">
            <div class="leftColumn">
                <h6>${model.data.bookInfo.title}</h6>
                <p>Forfatter: ${model.data.bookInfo.author}</p>
                <P>Utgivelsesår: ${model.data.bookInfo.releaseDate}</p>
                <p>Vurdering: ${model.data.bookInfo.ratings}</p>
                <p>Beskrivelse: ${model.data.bookInfo.description}</p>
                <p>Lagt til av: ${model.data.users.name}</p>
                <a href="">Kjøp boken!</a>
            </div>
            <div class="rightColumn">
                <img src="${model.data.bookInfo.coverImg}" alt="Bokcover">
                <br>
                <button id="giRating-button" type="submit">Gi rating</button>
            </div>
        </div>

*/