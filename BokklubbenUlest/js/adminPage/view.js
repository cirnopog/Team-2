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
    let fullList = `<ol class="lists">`
    for(i in model.data.users){
        fullList+= /*HTML*/`<li>${model.data.users[i].name}<button onclick="showEditPage(${i})">edit</button> 
        <button onclick="deleteUser(${i})">delete</button></li>`
    }
    fullList+= `</ol>`
    document.getElementById('app').innerHTML += fullList
    document.getElementById('app').innerHTML += `<div id="popup">
    <h1>Edit bruker</h1>
    <label for="newName">Navn</label>
    <input type="text" id="newName" name="newName">
    <label for="newPassword">Passord</label>
    <input type="text" id="newPassword" name="newPassword">
    <button type="submit" onclick="editUser()" id="editButton">Rediger</button>
    </div>`

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






