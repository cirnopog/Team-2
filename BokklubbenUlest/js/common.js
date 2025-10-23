function createHeader(){
let html = /*HTML*/`

    <h1 onclick="homePage()">Bokklubben Ulest</h1>

    <div>
        <i onclick="toggleMenu()" class="fa-solid fa-bars"></i>
        ${model.app.currentUser !== null?
        `<img onclick="model.app.currentPage='userProfile'; generateYourProfile(model.app.currentUser)" src="img/${model.app.currentUser.avatar}" alt="Profile" class="avatar">`
        :
        `<button onclick="toggleLogIn()">Logg inn</button>`   
        }
        

        <div id="logIn" class="hidden">
            <i onclick="toggleLogIn()" class="fa-solid fa-xmark"></i>
            <h3>Logg inn</h3>

            <label for="nameInput">Navn</label>
            <input type="text" id="nameInput" oninput="model.viewState.logInPage.name = this.value">

            <label for="passwordInput">Passord</label>
            <input type="password" id="passwordInput" oninput="model.viewState.logInPage.password = this.value">
            <p id="loginErrorMessage" class="hidden">Feil brukernavn eller passord.</p>
            
            
            <button onclick="validateLogin()">Logg inn <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
        </div>
        <div id="menu" class="hidden">
        
        <h3>Meny</h3>
            <i onclick="toggleMenu()" class="fa-solid fa-xmark"></i>
            <ul>
                
                <li onclick="model.app.currentPage='adminPage'; adminPage();">Admin</li>
                <li onclick="
                model.app.currentUser !== null ?
                model.app.currentPage='userProfile'
                : toggleLogIn()">
                Profil</li>
                <li onclick="model.app.currentPage='adminPage'">Legg til bok</li>
                
            </ul>
        </div>

    </div>
`;
document.getElementById("mainHeader").innerHTML= html;
}
checkSavedLogin()
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
        user => user.name === model.viewState.logInPage.name &&
        user.password === model.viewState.logInPage.password
    );

    if(user){
        model.app.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        generateYourProfile()
        createHeader()
        
    }else{
       document.getElementById("loginErrorMessage").classList.remove("hidden");
        
    }
}
function checkSavedLogin(){
    if(model.app.savedUser){
        model.app.currentUser = JSON.parse(model.app.savedUser)
    }
}