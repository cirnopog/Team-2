
// Viser bok-info-siden
function bookInfoPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="bookInfoHeading">Om boken<h1>
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
    `;
}

bookInfoPage()