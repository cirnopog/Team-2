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
                generateYourProfile(model.app.currentUser)
                : toggleLogIn()">
                Profil</li>
                <li onclick="model.app.currentPage='adminPage'; newBookPage()">Legg til bok</li>
                
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
        updateCurrentUser()
        generateYourProfile()
        createHeader()
        
    }else{
       document.getElementById("loginErrorMessage").classList.remove("hidden");
        
    }
    
}
function updateCurrentUser(){
    if(model.app.currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(model.app.currentUser));

        const userIndex = model.data.users.findIndex(u => u.name === model.app.currentUser.name);
        if(userIndex !== -1) {
            model.data.users[userIndex] = model.app.currentUser;
        }
    }
}
function checkSavedLogin(){
    if(model.app.savedUser){
        model.app.currentUser = JSON.parse(model.app.savedUser)
    }
}

// Finner ut hvor mange dager det er igjen av avstemning
// Brukes av updateVoteStatus() i /homePage/view.js
// og starteVote() i /adminPage/controller.js
function voteDaysLeft() {

    currentVote = model.data.currentVote;

    if (currentVote.length === 0) {
        return 'Ingen aktiv avstemning';
    }
    
    let pollEndDate = new Date(currentVote[0].endDate);
    let today = new Date();
    let differenceInMilliseconds = pollEndDate - today;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    let daysLeft = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    return `${daysLeft} dager igjen`;
}


// lagrer endringer i modellen som huskes på page load
// husk å kall saveData alle steder hvor modellen endres! 
function saveData(){
    localStorage.setItem('appData', JSON.stringify(model.data));

}
function loadData(){
    const savedData = localStorage.getItem('appData');
    if(savedData){
        model.data = JSON.parse(savedData);
    }
}

function deleteBook(list, bookNum){
    let book=list[bookNum]
    for(i in model.data.booksInVoting){
        if(model.data.booksInVoting[i].title==book.title){
            model.data.booksInVoting.splice(i , 1)
        }
    }
    for(i in model.data.bookList){
        if(model.data.bookList[i].title==book.title){
            model.data.bookList.splice(i,1)
        }
    }
    list.splice(bookNum, 1);
    updateCurrentUser();
    saveData();
    if(list===model.app.currentUser.addedBooks ||
        list===model.app.currentUser.favorites){
            generateYourProfile();
        }else{
          homePage()  
        }
}
