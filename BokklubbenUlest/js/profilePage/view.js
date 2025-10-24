function generateOtherUserProfile(usr){
    const app = document.getElementById("app")
    app.innerHTML=`
    <h1>${usr.name}</h1>
    <img src="img/${usr.avatar}" alt="${usr.avatar}" 20%" width="20%">
    ${allReadBooksOtherAccount(usr)}
    ${favoriteBooksOtherAccount(usr)}
    `
}

function generateYourProfile(){
    app.innerHTML=`
    <h1>${model.app.currentUser.name}</h1>
    <img src="img/${model.app.currentUser.avatar}" alt="${model.app.currentUser.avatar}" height="20%" width="20%" onclick="chooseAvatar()">
    <div id="avatarPopup">
    <h1>Endre avatar</h1>
    ${createAvatarList()}
    </div>
    ${allReadBooks()}
    ${favoriteBooks()}
    <button onclick="logout()" id="logoutButton">Logg ut</button>
    `
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
        favorites+=`<tbody id="tablePart">
        <tr>
        <th>${model.app.currentUser.favorites[i]}</th>
        </tr>
        </tbody>`
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
        readBooks+=`<tbody class="tablePart">
        <tr>
        <th>${model.app.currentUser.addedBooks[i]}</th>
        </tr>
        </tbody>`
    }
    readBooks+=`</table>`
    return readBooks
}


function favoriteBooksOtherAccount(usr){
    let favorites = `
    <h2>Favoritter</h2>
    <table id="favs">
    <thead>
    <tr>
    <th>Bok navn</th>
    </tr>
    </thead>`
    for(i in usr.favorites){
        favorites+=`<tbody id="tablePart">
        <tr>
        <th>${usr.favorites[i]}</th>
        </tr>
        </tbody>`
    }
    favorites+=`</table>`
    return favorites
}

function allReadBooksOtherAccount(usr){
    let readBooks = `
    <h2>Leste Bøker</h2>
    <table id="readbooks">
    <thead>
    <tr>
    <th>Bok navn</th>
    </tr>
    </thead>`
    for(i in usr.addedBooks){
        readBooks+=`<tbody class="tablePart">
        <tr>
        <th>${usr.addedBooks[i]}</th>
        </tr>
        </tbody>`
    }
    readBooks+=`</table>`
    return readBooks
}