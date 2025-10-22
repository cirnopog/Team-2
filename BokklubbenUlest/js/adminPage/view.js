// REGISTRATION

userRegistrationPage();

function userRegistrationPage() {
    document.getElementById('app').innerHTML += /*HTML*/`
            <form id="userRegistrationForm" onsubmit="registerNewUser(event)">
                <h3>Registrer ny bruker</h3>
                <label for="name">Navn:</label>
                <input type="text" id="nameOfUser" name="name" oninput="model.viewState.userRegistrationPage.name = this.value" required>
                <label for="userPassword">Passord:</label>
                <p>Minimum 10 tegn og minst en stor bokstav, en liten bokstav, et symbol og et tall.</p>
                <input type="text" id="userPassword" name="password" oninput="model.viewState.userRegistrationPage.password = this.value" required minlength="10">
                <button class="registerUserButton" type="submit">Registrer</button>
                <p id="password-error" style="color: red;"></p>
            </form>
    `;
}







// USER LIST

function showUserList(){
    fullList = `<ol class="lists">`
    for(i in model.users){
        fullList+= /*HTML*/`<li>${model.users[i].name}<button onclick="showEditPage(${i})">edit</button> 
        <button onclick="deleteUser(${i})">delete</button></li>`
    }
    fullList+= `</ol>`
    document.getElementById('app').innerHTML += fullList

}









// NEW MEETING










// VOTE START






