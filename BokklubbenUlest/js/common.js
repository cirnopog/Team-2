function createHeader(){
let html = /*HTML*/`
<header>
    <h1>Bokklubben Ulest</h1>

    <div>
        <i class="fa-solid fa-bars"></i>
        <button onclick="toggleLogIn()">Logg inn</button>

        <div id="logIn" class="hidden">
            <i onclick="toggleLogIn()" class="fa-solid fa-xmark"></i>
            <h3>Logg inn</h3>

            <label for="nameInput">Navn</label>
            <input type="text" id="nameInput">

            <label for="passwordInput">Passord</label>
            <input type="password" id="passwordInput">
            
            <button>Logg inn</button>
        </div>
        <div>
            <ul>
                <li>Admin</li>
                <li>Profil</li>
                <li>Legg til bok</li>
                
            </ul>
        </div>

    </div>
</header>
`;
document.body.insertAdjacentHTML("afterbegin", html);
}
createHeader()

function toggleLogIn(){
    document.getElementById("logIn").classList.toggle("hidden");
}
function toggleMenu(){

}