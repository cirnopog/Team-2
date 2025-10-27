
// Viser bok-info-siden
function bookInfoPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="bookInfoHeading">Book information<h1>
        <div class="bookInfoContainer">
            <div class="leftColumn">
                <p>Title:</p>
                <p>${model.data.bookInfo.title}</p>
            </div>
            <div class="rightColumn">
                <p>Image:</p>
                <img>
            </div>
        </div>
    `;
}