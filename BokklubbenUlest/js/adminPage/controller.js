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
function showEditPage(usrNr){
    let popup = document.getElementById("popup")
    let completeEditButton = document.getElementById("completeEditButton")
    completeEditButton.outerHTML=`<button type="submit" onclick="editUser(${usrNr})" id="completeEditButton">Rediger</button>`
    popup.style.visibility="visible"
}
function removeEditPage(){
    let popup = document.getElementById("popup")
    popup.style.visibility="hidden"
}
function editUser(usrNr){
    let usr = model.data.users[usrNr]
    let newName = document.getElementById("newName").value
    let newPassword = document.getElementById("newPassword").value
    if(newName==""){
        newName=usr.name
    }
    if(newPassword==""){
        newPassword=usr.password
    }
    model.data.users[usrNr] = {name:newName, password:newPassword, avatar:usr.avatar, addedBooks:usr.addedBooks, favorites:usr.favorites}
    showUserList()
    removeEditPage()
}
function deleteUser(usrNr){
    model.data.users.splice(usrNr,1)
    console.log(model.data.users)
    showUserList()
}








// NEW MEETING

function setNewMeetingDate(){

    model.data.meetingdate = model.data.viewState.meetingPage.date

}








// VOTE START






