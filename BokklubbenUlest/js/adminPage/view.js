// REGISTRATION

adminPage();

function adminPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="adminHeading">Administrasjon</h1>
        <div id="adminNavigation">
            <button type="button" onclick="userRegistrationPage()">Ny bruker</button>
            <button type="button" onclick="showUserList()">Brukerliste</button>
            <button type="button" onclick="">Opprett avstemning</button>
            <button type="button" onclick="newMeeting()">Avtal møte</button>
        </div>
    `;
    userRegistrationPage();
}

function userRegistrationPage() {
    document.getElementById('adminStuff').innerHTML = /*HTML*/`
        <form id="userRegistrationForm" onsubmit="registerNewUser(event)">
            <h3>Registrer ny bruker</h3>
            <label for="nameOfUser">Navn:</label>
            <input type="text" id="nameOfUser" name="name" oninput="model.viewState.userRegistrationPage.name = this.value" required>
            <label for="userPassword">Passord:</label>
            <p>Minimum 10 tegn og minst en stor bokstav, en liten bokstav, et symbol og et tall.</p>
            <input type="text" id="userPassword" name="password" oninput="model.viewState.userRegistrationPage.password = this.value" required minlength="10">
            <button type="submit">Registrer</button>
            <p id="password-error"></p>
        </form>
    `;
}







// USER LIST
function showUserList(){
    let fullList = `<ol class="lists">`
    let longestWord = 0
    console.log(longestWord)
    for(i in model.data.users){
        let itemName = model.data.users[i].name
        console.log(itemName)
        fullList+= /*HTML*/`<li>${itemName}<button id="editButton" onclick="showEditPage(${i})">Endre</button> 
        <button id="deleteButton" onclick="deleteUser(${i})">Slett</button></li>`
    }
    fullList+= `</ol>`
    document.getElementById('adminStuff').innerHTML = fullList
    document.getElementById('adminStuff').innerHTML += `<div id="popup">
    <h1>Rediger bruker</h1>
    <label for="newName">Navn</label>
    <input type="text" id="newName" name="newName" oninput="model.vie>
    <label for="newPassword">Passord</label>
    <input type="password" id="newPassword" name="newPassword">
    <button type="submit" onclick="editUser()" id="completeEditButton">Rediger</button>
    </div>`

}
function showEditPage(usrNr){
    let popup = document.getElementById("popup")
    let newName = document.getElementById("newName")
    let newPassword = document.getElementById("newPassword")
    let completeEditButton = document.getElementById("completeEditButton")
    newName.outerHTML=`<input type="text" id="newName" name="newName" oninput="model.data.users[${usrNr}].name = this.value">`
    newPassword.outerHTML=`<input type="password" id="newPassword" name="newPassword" oninput="model.data.users[${usrNr}].password = this.value">`
    completeEditButton.outerHTML=`<button type="submit" onclick="editUser(${usrNr})" id="completeEditButton">Rediger</button>`
    popup.style.visibility="visible"
}








// NEW MEETING




function newMeeting(){
    let html = /*HTML*/`
    <h4>Dato for nytt møte</h4>
    <input onchange="model.viewstate.meetingPage.date = this.value">
    <button onclick="setNewMeetingDate()">Start</button>
    `
    return html;
}





// VOTE START






