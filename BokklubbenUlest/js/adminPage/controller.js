// REGISTRATION

// Håndterer feilmelding for passord-input i brukerregistrering
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('userRegistrationForm');
    const errorElement = document.getElementById('password-error');

    if (form) {
        form.addEventListener('input', () => {
            errorElement.textContent = '';
            errorElement.style.color = 'red';
        });
    }
});

// Når du trykker på registrer-knappen for ny bruker
function registerNewUser(event) {
    event.preventDefault();

    const password = model.viewState.userRegistrationPage.password;
    const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{10,}$");
    const errorElement = document.getElementById('password-error');

    errorElement.textContent = '';

    if (!strongPasswordRegex.test(password)) {
        errorElement.textContent = "Passordet må inneholde min. 10 tegn og inkludere: en stor bokstav, en liten bokstav, et tall, og et symbol!";
        return;
    }

    let newUser = {
        name: model.viewState.userRegistrationPage.name,
        password: model.viewState.userRegistrationPage.password,
        avatar: "moose.png",
        addedBooks: [],
        favorites: [],
        isAdmin: false,
    }

    model.data.users.push(newUser);
    saveData();
    document.getElementById('userRegistrationForm').reset();

    errorElement.style.color = 'green';
    errorElement.textContent = 'Ny bruker er registrert!';
}

// USER LIST
// Bare for å tenke hvordan en kan gjøre endringer i brukere
function removeEditPage(){
    const popup = document.getElementById("popup")
    popup.style.visibility="hidden"
}
function editUser(usrNr){
    const error = document.getElementById("registration-error")
    const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{10,}$");
    let usr = model.data.users[usrNr]
    
    if(!strongPasswordRegex.test(model.viewState.profileEditing.password)){
        error.textContent="Passordet må inneholde min. 10 tegn og inkludere: en stor bokstav, en liten bokstav, et tall, og et symbol!"
        return
    }
    usr.name=model.viewState.profileEditing.name
    usr.password=model.viewState.profileEditing.password
    if(usr.isAdmin){
        model.app.currentUser.name=model.viewState.profileEditing.name;
        model.app.currentUser.password=model.viewState.profileEditing.password;
        updateCurrentUser();
    }
    saveData();
    showUserList()
    removeEditPage()
}
function deleteUser(usrNr){
    const usr = model.data.users[usrNr]
    for(i in model.data.meetingAttendees.comingList){
        if(model.data.meetingAttendees.comingList[i] == usr.name){
            model.data.meetingAttendees.comingList.splice(i,1)
            model.data.meetingAttendees.coming--
        }
    }
    for(i in model.data.meetingAttendees.notComingList){
        if(model.data.meetingAttendees.norComingList[i] == usr.name){
            model.data.meetingAttendees.notComingList.splice(i,1)
            model.data.meetingAttendees.notComing
        }
    }
    model.data.users.splice(usrNr,1)
    saveData()
    showUserList()
}

function goToUser(username) {
    const userObject = findUserByUsername(username); 

    if (userObject) {
        model.app.currentPage = 'userProfile';
        generateProfile(userObject);
    } else {
        console.error("Brukeren '" + username + "' ble ikke funnet.");
    }
}

// NEW MEETING

function setNewMeetingDate(){
    model.data.meetingdate = model.viewState.meetingPage.date
    for(i of model.data.users){
        i.decidedMeeting=true
        if(model.app.currentUser.name==i){
            model.app.currentUser=i
        }
    }
    model.data.meetingAttendees.coming=0
    model.data.meetingAttendees.notComing=0
    model.data.meetingAttendees.comingList=[]
    model.data.meetingAttendees.notComingList=[]
    updateCurrentUser()
    saveData()
    
}

function cancelMeeting(){
    model.data.meetingAttendees.coming=0
    model.data.meetingAttendees.notComing=0
    model.data.meetingAttendees.comingList=[]
    model.data.meetingAttendees.notComingList=[]
    model.data.meetingdate = ""
    updateCurrentUser()
    saveData()
}

// VOTE START
// Når du trykker på opprett-knapp i avstemning
function startVote() {
    model.data.winnerBook = null;
    
    let newVote = {
        startDate: model.viewState.votePage.startDate,
        endDate: model.viewState.votePage.endDate,
    }
    model.data.booksInVoting.splice(0,model.data.booksInVoting.length)
    model.data.currentVote.push(newVote);
    model.data.votingActive=true;
    document.getElementById('votePageForm').reset();

    for(i of model.data.bookList){
        i.usersWhoHaveVoted=[]
    }

    let confirmationMsg = document.getElementById('confirmationMsg');
    confirmationMsg.textContent = 'Ny avstemning er opprettet på forsiden!';
    confirmationMsg.style.color = 'green';

    voteDaysLeft();
    updateVoteStatus();
    saveData();
}


function cancelVote(){
    findWinner()
    model.data.currentVote=[]
    model.data.votingActive=false;
    let confirmationMsg = document.getElementById('confirmationMsg');
    confirmationMsg.textContent = 'Avstemningen er avsluttet!';
    confirmationMsg.style.color = 'red';
    updateVoteStatus();
    saveData();
}
