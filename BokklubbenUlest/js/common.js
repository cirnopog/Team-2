function createHeader(){
let html = /*HTML*/`

    <h1>Bokklubben Ulest</h1>

    <div>
        <i onclick="toggleMenu()" class="fa-solid fa-bars"></i>
        <button onclick="toggleLogIn()">Logg inn</button>

        <div id="logIn" class="hidden">
            <i onclick="toggleLogIn()" class="fa-solid fa-xmark"></i>
            <h3>Logg inn</h3>

            <label for="nameInput">Navn</label>
            <input type="text" id="nameInput" oninput="model.viewState.logInPage.name = this.value">

            <label for="passwordInput">Passord</label>
            <input type="password" id="passwordInput" oninput="model.viewState.logInPage.password = this.value">
            <p id="loginErrorMessage" class="hidden">Feil brukernavn eller passord.</p>
            
            
            <button onclick="validateLogin()">Logg inn</button>
        </div>
        <div id="menu" class="hidden">
        
        <h3>Meny</h3>
            <i onclick="toggleMenu()" class="fa-solid fa-xmark"></i>
            <ul>
                
                <li onclick="model.app.currentPage='adminPage'">Admin</li>
                <li onclick="
                model.app.currentUser!== null?
                model.app.currentPage='userProfile'
                : toggleMenu()
                toggleLogIn()
                ">Profil</li>
                <li onclick="model.app.currentPage='adminPage'">Legg til bok</li>
                
            </ul>
        </div>

    </div>
`;
document.getElementById("mainHeader").innerHTML= html;
}
createHeader()

function toggleLogIn(){
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("logIn").classList.toggle("hidden");
}
function toggleMenu(){
    document.getElementById("logIn").classList.add("hidden");
    document.getElementById("menu").classList.toggle("hidden");
}
function validateLogin(){
    const user = model.data.users.find(
        user => user.name === model.viewState.logInPage.name && user.password === model.viewState.logInPage.password
    );
        console.log('this is user' + user)
    if(user){
        model.app.currentUser = user;
        createHeader()
        
    }else{
       document.getElementById("loginErrorMessage").classList.remove("hidden");
        
}
    
    }
// function headerBtnAndProfileSwitch(){
//     html = ``;
//     if(model.app.currentUser === null){
//         html = `<button onclick="validateLogin()">Logg inn</button>`
//         return html;
//     }else{
//         html  `<p onclick="model.app.currentPage='profilePage'">Profil</p>`;
//         return html;
//     }
// }