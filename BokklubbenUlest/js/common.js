function createHeader(){
let html = /*HTML*/`

    <h1 onclick="homePage()">Bokklubben Ulest</h1>

    <div>
        <i onclick="toggleMenu()" class="fa-solid fa-bars"></i>
        ${model.app.currentUser !== null?
        `<img onclick="model.app.currentPage='userProfile'; generateProfile(model.app.currentUser)" src="img/${model.app.currentUser.avatar}" alt="Profile" class="avatar">`
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
                
                <li class="admin" onclick="model.app.currentUser?.isAdmin? adminPage() : adminErrorMessage()">
                Admin
                <p id="adminErrorMessage" class="hidden">Kun for admin</p>
                </li>
                <li onclick="
                model.app.currentUser !== null ?
                generateProfile(model.app.currentUser)
                : toggleLogIn()">
                Profil</li>
                <li onclick="model.app.currentUser!=null ? openBookCreationpage() : toggleLogIn()">Legg til bok</li>
                
            </ul>
        </div>

    </div>
`;
document.getElementById("mainHeader").innerHTML= html;
}
checkSavedLogin()
createHeader()


function openBookCreationpage(){
    console.log("test")
    model.app.currentPage='adminPage';
    newBookPage()
}
// TOGGLE POP-UPS
function toggleLogIn(){
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("logIn").classList.toggle("hidden");
}
function toggleMenu(){
    document.getElementById("logIn").classList.add("hidden");
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("adminErrorMessage").classList.add("hidden")
}


// LOGIN 
function validateLogin(){
    const user = model.data.users.find(
        user => user.name === model.viewState.logInPage.name &&
        user.password === model.viewState.logInPage.password
    );

    if(user){
        model.app.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateCurrentUser()
        generateProfile(model.app.currentUser)
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
// ADMIN ERROR MESSAGE
function adminErrorMessage(){
    const errorMessage = document.getElementById("adminErrorMessage");
    errorMessage.classList.remove("hidden");
}

// Finner ut hvor mange dager det er igjen av avstemning
// Brukes av updateVoteStatus() i /homePage/view.js
// og starteVote() i /adminPage/controller.js
function voteDaysLeft() {

    currentVote = model.data.currentVote;
    if (currentVote.length === 0) {
        if(model.data.winnerBook==null){
            return 'Ingen aktiv avstemning'
        }
        if(model.data.winnerBook.title==undefined){
            return 'Ingen aktiv avstemning';
        }
        drawWinnerBook()
        return 'Ingen aktiv avstemning';
    }
    let pollStartDate = new Date(currentVote[0].startDate)
    let pollEndDate = new Date(currentVote[0].endDate);
    let today = new Date();
    let differenceInMillisecondsEnd = pollEndDate - today;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    let daysLeftEnd = Math.floor(differenceInMillisecondsEnd / millisecondsPerDay);
    let differenceInMillisecondsStart = pollStartDate - today
    let daysLeftStart = Math.floor(differenceInMillisecondsStart/millisecondsPerDay)
    if(daysLeftEnd<=0||model.data.currentVote.length===0){
        findWinner()
        currentVote.splice(0,1)
        saveData()
        return voteDaysLeft()
    }
    if(daysLeftStart>0){
        return `
        ${daysLeftStart} dager til avstemning`
    }
    else{
        return `${daysLeftEnd} dager igjen`;
    }
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

function deleteBook(list, bookNum, str){
    let book=list[bookNum]
    if(str=="favorite"){
        for(i of model.data.bookList){
            if(i.name==book.name){
                i.isFavorite=false
            }
        }
        model.data.bookInfo.isFavorite=false
    }
    for(i in list){
        if(list[i].title==book.title){
            list.splice(i , 1)
        }
    }
    if(list===model.app.currentUser.addedBooks ||
        list===model.app.currentUser.favorites){
            generateProfile(model.app.currentUser);
        }else{
          homePage()  
        }
    updateCurrentUser();
    saveData();
}

// For å finne bruker-avatar til bokinfo-siden
function findUserByUsername(username) {
    return model.data.users.find(user => user.name === username);
}