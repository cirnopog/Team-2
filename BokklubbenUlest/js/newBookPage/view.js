newBookPage()
function newBookPage(){
    document.getElementById("app").innerHTML =/*HTML*/`

    

    <form class="new-book">
        <h2>Opprett ny bok</h2>
        <div class="container"> 
            <div>
            <label for="bookTitle">Tittel</label>
            <input type="text" id="bookTitle">
            </div>

            <div>
            <label>Forfatter</label>
            <input type="text">
            </div>
            
            <div>
            <label>Cover bilde</label>
            <input type="text">
            </div>

            <div>
            <label>Kjøpslink</label>
            <input type="text">
            </div>

            <div class="description-field">
            <label>Beskrivelse</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div class="checkbox-field">
            <label>Legg til i avstemning</label>
            <input type="checkbox" name="" id="">
            </div>

            <button>Opprett bok</button>
        </div>
    </form>
    `;
}