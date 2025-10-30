// generateYourProfile()

function generateOtherUserProfile(usr){
    const app = document.getElementById("app")
    app.innerHTML=`
    <div id="profileLeftSide">
    <img src="img/${usr.avatar}" id="profileAvatar" alt="${usr.avatar}" 50%" width="50%">
    </div>

    <h2 id="profileHeader">${usr.name}</h2>
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
    <button onclick="logOut()" id="logoutButton">Logg ut</button>
    </div>

    <div id="avatarPopup">
    <h2 id="popupHeader">Endre avatar</h2>
    ${createAvatarList()}
    </div>

    <div id="profileRightSide">
    <h2 id="profileHeader">${model.app.currentUser.name}</h2>
    ${allReadBooks()}
    ${favoriteBooks()}
    </div>
    
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
function allReadBooks(){
    let readBooks = `
    <table id="readbooks" class="profile-table">
    <thead>
        <tr>
            <th>Leste Bøker</th>
        </tr>
    </thead>
    `
    for(i in model.app.currentUser.addedBooks){
        if(model.app.currentUser.addedBooks[i].title!==undefined){
        readBooks+=`<tbody>
        <tr>
            <td class="tablePart">
                ${model.app.currentUser.addedBooks[i].title}
                <button class="removeButton" onclick="deleteBook(model.app.currentUser.addedBooks,${i})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </td>
            
        </tr>
        </tbody>`     
        }
    }
    if(model.app.currentUser.addedBooks.length === 0){
        readBooks+=`
        <tr>
            <td>Ingen bøker lagt til</td>
        </tr>
        `;
    }
    readBooks+=`</table>
                `
    return readBooks
}
function favoriteBooks(){
    let favorites = `
    <table id="favs" class="profile-table">
    <thead>
        <tr>
            <th>Favoritter</th>
        </tr>
    </thead>
    `
    for(i in model.app.currentUser.favorites){
        if(model.app.currentUser.favorites[i].title!==undefined){
        favorites+=`<tbody>
        <tr>
        <td class="tablePart">
            ${model.app.currentUser.favorites[i].title} 
            <button class="removeButton" onclick="deleteBook(model.app.currentUser.favorites,${i})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </td>
         
        </tr>
        </tbody>`
        }
    }
    if(model.app.currentUser.favorites.length === 0){
        favorites+=`
        <tr>
        <td>Ingen favoritter enda</td>
        </tr>
        `;
    }
    favorites+=`</table>`
    return favorites
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
        </tr>
        </tbody>`
        }
    }
    readBooks+=`</table>
    </div>`
    return readBooks
}

