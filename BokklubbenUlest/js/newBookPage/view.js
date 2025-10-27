newBookPage()
function newBookPage(){
    document.getElementById("app").innerHTML =/*HTML*/`

    

    <form class="new-book">
        <h2>Opprett ny bok</h2>
        <div class="container"> 
            <div>
            <label for="bookTitle">Tittel</label>
            <input 
                type="text" 
                oninput="model.viewState.bookRegistrationPage.title = this.value"
                >
            </div>

            <div>
            <label>Forfatter</label>
            <input  
                type="text"
                oninput= "model.viewState.bookRegistrationPage.author = this.value"
            >
            </div>
            
            <div>
            <label>Kjøpslink</label>
            <input  
                type="text"
                oninput= "model.viewState.bookRegistrationPage.purchaseLink = this.value">
            </div>

            <div>
            <label>Cover bilde</label>
            <input 
                type="file"
                accept="image/*"
                onchange="handleImageUpload(event)"
            >
            </div>

            <div class="description-field">
            <label>Beskrivelse</label>
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                oninput="model.viewState.bookRegistrationPage.description = this.value"
            ></textarea>
            </div>

            <div class="checkbox-field">
            <label>Legg til i avstemning</label>
            <input 
                type="checkbox" 
                value="true" 
                onchange="model.viewState.newBook.addToVoting = this.checked"
            >
            </div>

            <button onclick="addBook()">Opprett bok</button>
        </div>
    </form>
    `;
}