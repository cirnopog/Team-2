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
function showEditPage(usrNr){
    let popup = document.getElementById("popup")
    let editButton = document.getElementById("editButton")
    editButton.outerHTML=`<button type="submit" onclick="editUser(${usrNr})" id="editButton">Rediger</button>`
    popup.style.visibility="visible"
}
function removeEditPage(){
    let popup = document.getElementById("popup")
    popup.style.visibility="hidden"
}
function editUser(usrNr){
    let usr = model.data.users[usrNr]
    let newName = document.getElementById("newName")
    let newPassword = document.getElementById("newPassword")
    model.data.users[usrNr] = {name:newName.value, password:newPassword.value, avatar:usr.avatar, addedBooks:usr.addedBooks, favorites:usr.favorites}
    removeEditPage()
}
function deleteUser(usrNr){
    model.data.users.splice(usrNr,0)
}








// NEW MEETING










// VOTE START






