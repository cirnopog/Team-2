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

function generateYourProfile(usr){
    let favorites = `<ul id="favs">`
    let readBooks = `<ul id="readbooks">`
    const app = document.getElementById("app")
    var allAvatars = ""
    for(i in usr.addedBooks){
        readBooks+=usr.addedBooks[i]
    }
    readBooks+=`</ul>`
    for(i in usr.favorites){
        favorites+=usr.favorites[i]
    }
    favorites+=`</ul>`
    for(i in model.data.avatars){
        allAvatars += `<img src="img/${model.data.avatars[i]}" alt="${model.data.avatars[i]}" height="25%" width="25%" onclick="avatarChosen('${model.data.avatars[i]}')">`
    }
    app.innerHTML=`
    <h1>${usr.name}</h1>
    <img src="img/${usr.avatar}" alt="${usr.avatar}" height="20%" width="20%" onclick="chooseAvatar()">
    <div id="avatarPopup">
    <h1>Endre avatar</h1>
    ${allAvatars}
    </div>
    ${readBooks}
    ${favorites}
    `
}

generateYourProfile(model.data.users[0])

function chooseAvatar(){
    const avatarPopup = document.getElementById("avatarPopup")
    avatarPopup.style.visibility="visible"
    
}

function avatarChosen(newAvatar){
    const avatarPopup = document.getElementById("avatarPopup")
    model.data.users[0].avatar=newAvatar
    avatarPopup.style.visibility="hidden"
    generateYourProfile(model.data.users[0])
}