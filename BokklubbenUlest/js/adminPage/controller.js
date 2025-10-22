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






