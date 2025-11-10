// REGISTRATION

// Viser admin-pagen med navigasjon
function adminPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 class="adminHeading">Administrasjon</h1>
        <div id="adminNavigation">
            <button type="button" onclick="userRegistrationPage()">Ny bruker</button>
            <button type="button" onclick="showUserList()">Brukerliste</button>
            <button type="button" onclick="votePage()">Opprett avstemning</button>
            <button type="button" onclick="newMeeting()">Avtal møte</button>
        </div>

        <div id="adminStuff"></div>
    `;
    userRegistrationPage();
}

// Viser page for registrering av ny bruker
function userRegistrationPage() {
    
    document.getElementById('adminStuff').innerHTML = /*HTML*/`
        <form id="userRegistrationForm" onsubmit="registerNewUser(event)">
            <h3>Registrer ny bruker</h3>
            <label for="nameOfUser">Navn:</label>
            <input type="text" id="nameOfUser" name="name" oninput="model.viewState.userRegistrationPage.name = this.value" required>
            <label for="userPassword">Passord:</label>
            <p>Minimum 10 tegn og minst en stor bokstav, en liten bokstav, et symbol og et tall.</p>
            <input type="password" id="userPassword" name="password" oninput="model.viewState.userRegistrationPage.password = this.value" required minlength="10">
            <button type="submit">Registrer</button>
            <p id="password-error"></p>
        </form>
    `;
}

// USER LIST
function showUserList(){
    let fullList = `
    <div id="centerArea">
    <table class="lists">
    
    <tr>
    <th>Brukere</th>
    </tr>`
    for(i in model.data.users){
        let itemName = model.data.users[i].name
        fullList+= /*HTML*/`
        <tbody>
            <tr>
                <td class="partOfList"><div class="username-text" onclick="goToUser('${itemName}')">${itemName}</div>

                <div class="btn-container">
                <button id="editButton" onclick="showEditPage(${i})">
                    <i class="fa-solid fa-pencil"></i>
                </button>
                ${model.data.users[i].isAdmin?
                ""
                :
                `
                <button id="deleteButton" onclick="deleteUser(${i})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                `
        }
                
                </div>
                </td>
                
            </tr>
        </tbody>`
    }
    fullList+= `</table>
    </div>`

    let adminStuff = document.getElementById('adminStuff')
    adminStuff.innerHTML = fullList
    adminStuff.innerHTML += `
    <div id="popup">
        <h2>Rediger bruker</h2>
        <label for="newName">Navn:</label>
        <input type="text" id="newName" name="newName">

        <label for="newPassword">Passord:</label>
        <input type="password" id="newPassword" name="newPassword">

        <div class="btn-container">
            <button type="submit" onclick="editUser()" id="completeEditButton">Rediger</button>
            <button id="stopEditingButton" onclick="removeEditPage()">Avbryt</button>
        </div>
        <p id="registration-error"></p>
    </div>`

}

function showEditPage(usrNr){
    let popup = document.getElementById("popup")
    let newName = document.getElementById("newName")
    let newPassword = document.getElementById("newPassword")
    let completeEditButton = document.getElementById("completeEditButton")
    newName.outerHTML=`<input type="text" id="newName" name="newName" oninput="model.viewState.profileEditing.name = this.value">`
    newPassword.outerHTML=`<input type="password" id="newPassword" name="newPassword" oninput="model.viewState.profileEditing.password = this.value">`
    completeEditButton.outerHTML=`<button type="submit" onclick="editUser(${usrNr})" id="completeEditButton">Rediger</button>`
    popup.style.visibility="visible"
}

// NEW MEETING

function newMeeting(){
    document.getElementById('adminStuff').innerHTML = /*HTML*/`
    <form id="meetingPageForm">
    <h3>Dato for nytt møte</h3>
    <input id="meetingInput" type="date" onchange="model.viewState.meetingPage.date = this.value" required value="${model.data.meetingdate}">
    <div class="btn-container">
        <button id="newMeeting-btn" onclick="setNewMeetingDate()">Opprett</button>
        <button id="cancelMeeting-btn" onclick="cancelMeeting()">Avslutt</button>
    </div>
    </form>
    `;
}

// VOTE START

// Fjerner bekreftelse ved ny input i avstemningsskjema
function clearConfirmationMessage() {
    document.getElementById('confirmationMsg').textContent = '';
}

// Viser page for å opprette avstemning
function votePage() {
    document.getElementById('adminStuff').innerHTML = /*HTML*/`
        <form id="votePageForm">
            <h3>Ny avstemning</h3>
            <label for="startDate">Startdato:</label>
            <input type="date" id="startDate" class="vote-date-input" name="start" oninput="model.viewState.votePage.startDate = this.value" required value="${model.viewState.votePage.startDate}">
            <label for="endDate">Sluttdato:</label>
            <input type="date" id="endDate" class="vote-date-input" name="end" oninput="model.viewState.votePage.endDate = this.value" required value="${model.viewState.votePage.endDate}">
            
            <div class="btn-container">
                <button type="submit">Opprett</button>
                
                <button type="button" id="resetButton" id="cancelMeeting-btn" onclick="cancelVote()">Avslutt</button>
            </div>
            <p id="confirmationMsg"></p>
            </form>
    `;

    document.getElementById('votePageForm').addEventListener('submit', (event) => {
    
        event.preventDefault(); 
        
        startVote();
    });

    const dateInputs = document.querySelectorAll('.vote-date-input');

    dateInputs.forEach( (inputElement) => {
        inputElement.addEventListener('input', clearConfirmationMessage);
    });
}




