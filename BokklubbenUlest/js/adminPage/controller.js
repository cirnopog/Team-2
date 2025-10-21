// REGISTRATION

function registerNewUser() {
    const password = model.viewState.userRegistrationPage.password;

    const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$");

    if (!strongPasswordRegex.test(password)) {
        alert("Passordet må inneholde min. 10 tegn og inkludere: en stor bokstav, en liten bokstav, et tall, og et symbol.");
        return;
    }

    let newUser = {
        name: model.viewState.userRegistrationPage.name,
        password: model.viewState.userRegistrationPage.password,
    }

    model.data.users.push(newUser);

    document.getElementById('userRegistrationForm').reset();
}








// USER LIST
//bare for å tenke hvordan en kan gjøre endringer i brukere

function showEditPage(){
    
}
function editUser(usrNr){
    let usr = users[usrNr]
    users[usrNr] == {name:"test", password:"test",avatar:usr.avatar,addedBooks:usr.addedBooks,favorites:usr.favorites}
    createHeader()
    showUserList()
}
function deleteUser(usrNr){
    users.splice(usrNr,0)
    createHeader()
    showUserList()
}








// NEW MEETING










// VOTE START






