function generateOtherUserProfile(usr){
    let favorites = `<ul id="favs">`
    let readBooks = `<ul id="readbooks">`
    for(i in usr.addedBooks){
        readBooks+=usr.addedBooks[i]
    }
    readBooks+=`</ul>`
    for(i in usr.favorites){
        favorites+=usr.favorites[i]
    }
    favorites+=`</ul>`
    const app = document.getElementById("app")
    app.innerHTML=`
    <h1>${usr.name}</h1>
    <img src="img/${usr.avatar}" alt="${usr.avatar}" 20%" width="20%">
    ${readBooks}
    ${favorites}
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
    `
}


function createAvatarList(){
    var allAvatars = ""
    for(i in model.data.avatars){
        allAvatars += `<img src="img/${model.data.avatars[i]}" alt="${model.data.avatars[i]}" height="25%" width="25%" onclick="avatarChosen('${model.data.avatars[i]}')">`
    }
    return allAvatars

}

function favoriteBooks(){
    let favorites = `<ul id="favs">`
    for(i in model.app.currentUser.favorites){
        favorites+=model.app.currentUser.favorites[i]
    }
    favorites+=`</ul>`
    return favorites
}

function allReadBooks(){
    let readBooks = `<ul id="readbooks">`
    const app = document.getElementById("app")
    for(i in model.app.currentUser.addedBooks){
        readBooks+=model.app.currentUser.addedBooks[i]
    }
    readBooks+=`</ul>`
    return readBooks
}