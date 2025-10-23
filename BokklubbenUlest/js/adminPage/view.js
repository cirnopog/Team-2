// REGISTRATION

adminPage();

function adminPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="adminHeading">Administrasjon</h1>
        <div id="adminNavigation">
            <button type="button" onclick="userRegistrationPage()">Ny bruker</button>
            <button type="button" onclick="showUserList()">Brukerliste</button>
            <button type="button" onclick="votePage()">Opprett avstemning</button>
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
    for(i in model.data.users){
        let itemName = model.data.users[i].name
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
    <p id="registration-error"></p>
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

function votePage() {
    document.getElementById('adminStuff').innerHTML = /*HTML*/`
        <form id="votePageForm">
            <h3>Ny avstemning</h3>
            <label for="startDate">Startdato:</label>
            <input type="date" id="startDate" name="start" oninput="model.viewState.votePage.startDate = this.value" required>
            <label for="endDate">Sluttdato:</label>
            <input type="date" id="endDate" name="end" oninput="model.viewState.votePage.endDate = this.value" required>
            <button type="submit">Opprett</button>
            <p id="voteCreatedMessage"></p>
        </form>
    `;

    document.getElementById('votePageForm').addEventListener('submit', (event) => {
    
    event.preventDefault(); 
    
    startVote();
});
}




