// REGISTRATION

function userRegistrationPage() {
    document.getElementById('app').innerHTML += /*HTML*/`
        <div class="userRegFormDiv">
            <form id="userRegistrationForm">
                <label for="name">Navn:</label>
                <br>
                <input type="text" id="nameOfUser" name="name" oninput="model.viewState.userRegistrationPage.name = this.value" required>
                <br>
                <label for="userPassword">Passord:</label>
                <br>
                <input type="text" id="userPassword" name="password" oninput="model.viewState.userRegistrationPage.password = this.value" required minlength="10" placeholder="Minimum 10 tegn">
                <br>
                <button class="registerUserButton" type="submit" onclick="registerNewUser()">Registrer</button>
            </form>
        </div>
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






