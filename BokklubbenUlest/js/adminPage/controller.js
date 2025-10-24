// REGISTRATION

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
    }

    model.data.users.push(newUser);

    document.getElementById('userRegistrationForm').reset();

    errorElement.style.color = 'green';
    errorElement.textContent = 'Ny bruker er registrert!';
}








// USER LIST
//bare for å tenke hvordan en kan gjøre endringer i brukere
function removeEditPage(){
    const popup = document.getElementById("popup")
    popup.style.visibility="hidden"
}
function editUser(usrNr){
    const error = document.getElementById("registration-error")
    const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{10,}$");
    let usr = model.data.users[usrNr]
    if(!strongPasswordRegex.test(usr.password)){
        error.textContent="Passordet må inneholde min. 10 tegn og inkludere: en stor bokstav, en liten bokstav, et tall, og et symbol!"
        return
    }
    showUserList()
    removeEditPage()
}
function deleteUser(usrNr){
    model.data.users.splice(usrNr,1)
    showUserList()
}








// NEW MEETING

function setNewMeetingDate(){

    model.data.meetingdate = model.data.viewState.meetingPage.date

}








// VOTE START

function startVote() {

    let newVote = {
        startDate: model.viewState.votePage.startDate,
        endDate: model.viewState.votePage.endDate,
    }

    model.data.currentVote.push(newVote);

    document.getElementById('votePageForm').reset();

    document.getElementById('voteCreatedMessage').textContent = 'Ny avstemning er opprettet på forsiden!';

    voteDaysLeft();
}

function voteDaysLeft() {

    currentVote = model.data.currentVote;

    if (currentVote.length === 0) {
        return 'X dager igjen';
    }
    
    let pollEndDate = new Date(currentVote[0].endDate);
    let today = new Date();
    let differenceInMilliseconds = pollEndDate - today;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    let daysLeft = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    return daysLeft;
}