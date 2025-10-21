// REGISTRATION

function registerNewUser() {
    let newUser = {
        name: model.viewState.userRegistrationPage.name,
        password: model.viewState.userRegistrationPage.password,
    }

    model.data.users.push(newUser);

    document.getElementById('userRegistrationForm').reset();
}








// USER LIST
//bare for å tenke hvordan en kan gjøre endringer i brukere
function editUser(usrNr){
    users[usrNr] == {name:"test", password:"test",avatar:"test",addedBooks: [""],favorites: [""]}
    createHeader()
    createUserList()
}
function deleteUser(usrNr){
    users.splice(usrNr,0)
    createHeader()
    createUserList()
}








// NEW MEETING










// VOTE START






