function generateOtherUserProfile(usr){
    const app = document.getElementById("app")
    app.innerHTML=`
    <div id="profileLeftSide">
    <img src="img/${usr.avatar}" id="profileAvatar" alt="${usr.avatar}" 50%" width="50%">
    </div>
    <h1 id="profileHeader">${usr.name}</h1>
    <div id="profileRightSide">
    ${allReadBooksOtherAccount(usr)}
    ${favoriteBooksOtherAccount(usr)}
    </div>
    `
}

function generateYourProfile(){
    app.innerHTML=`
    <div id="profileLeftSide">
    <img src="img/${model.app.currentUser.avatar}" id="profileAvatar" alt="${model.app.currentUser.avatar}" height="50%" width="50%" onclick="chooseAvatar()">
    <p id="undertext">Klikk på bildet for å endre avatar</p>
    </div>
    <div id="avatarPopup">
    <h1 id="popupHeader">Endre avatar</h1>
    ${createAvatarList()}
    </div>
    <div id="profileRightSide">
    <h1 id="profileHeader">${model.app.currentUser.name}</h1>
    ${allReadBooks()}
    ${favoriteBooks()}
    </div>
    <button onclick="logOut()" id="logoutButton">Logg ut</button>
    `
        console.log(model.app.currentUser)
}


function createAvatarList(){
    var allAvatars = ""
    for(i in model.data.avatars){
        allAvatars += `<img src="img/${model.data.avatars[i]}" class="avtImg" alt="${model.data.avatars[i]}" height="25%" width="25%" onclick="avatarChosen('${model.data.avatars[i]}')">`
    }
    return allAvatars

}

function favoriteBooks(){
    let favorites = `
    <h2>Favoritter</h2>
    <table id="favs">
    <thead>
    <tr>
    <th>Bok navn</th>
    </tr>
    </thead>`
    for(i in model.app.currentUser.favorites){
        if(model.app.currentUser.favorites[i].title!==undefined){
        favorites+=`<tbody>
        <tr>
        <th class="tablePart">${model.app.currentUser.favorites[i].title}</th>
        <th class="tablePart"><button class="removeButton" onclick="">Klikk for å fjerne</button></th>
        </tr>
        </tbody>`
        }
    }
    favorites+=`</table>`
    return favorites
}

function allReadBooks(){
    let readBooks = `
    <h2>Leste Bøker</h2>
    <table id="readbooks">
    <thead>
    <tr>
    <th>Bok navn</th>
    </tr>
    </thead>`
    for(i in model.app.currentUser.addedBooks){
        if(model.app.currentUser.addedBooks[i].title!==undefined){
        readBooks+=`<tbody>
        <tr>
        <th class="tablePart">${model.app.currentUser.addedBooks[i].title}</th>
        <th class="tablePart"><button class="removeButton" onclick="deleteBook(model.app.currentUser.addedBooks,${i})">Klikk for å fjerne</button></th>
        </tr>
        </tbody>`     
        }
    }
    readBooks+=`</table>`
    return readBooks
}


function favoriteBooksOtherAccount(usr){
    let favorites = `
    <div id="favoriteDiv">
    <h2>Favoritter</h2>
    <table id="favs">
    <thead>
    <tr>
    <th>Bok navn</th>
    </tr>
    </thead>`
    for(i in usr.favorites){
        if(model.app.currentUser.favorites[i].title!==undefined){
        favorites+=`<tbody>
        <tr>
        <th class="tablePart">${usr.favorites[i].title}</th>
        <th class="tablePart"><button class="removeButton" onclick="">Klikk for å fjerne</button></th>
        </tr>
        </tbody>`
        }
    }
    favorites+=`</table>
    </div>`
    return favorites
}

function allReadBooksOtherAccount(usr){
    let readBooks = `
    <div id="allReadDiv">
    <h2>Leste Bøker</h2>
    <table id="readbooks">
    <thead>
    <tr>
    <th>Bok navn</th>
    </tr>
    </thead>`
    for(i in usr.addedBooks){
        if(model.app.currentUser.addedBooks[i].title!==undefined){
        readBooks+=`<tbody>
        <tr>
        <th class="tablePart">${usr.addedBooks[i].title}</th>
        <th class="tablePart"><button class="removeButton" onclick="">Klikk for å fjerne</button></th>
        </tr>
        </tbody>`
        }
    }
    readBooks+=`</table>
    </div>`
    return readBooks
}

