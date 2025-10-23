function generateOtherUserProfile(){
    let favorites = `<ul id="favs">`
    let readBooks = `<ul id="readbooks">`
    for(i in model.data.users[0].addedBooks){
        readBooks+=model.data.users[0].addedBooks[i]
    }
    readBooks+=`</ul>`
    for(i in model.data.users[0].favorites){
        favorites+=model.data.users[0].favorites[i]
    }
    favorites+=`</ul>`
    const app = document.getElementById("app")
    app.innerHTML=`
    <h1>${model.data.users[0].name}</h1>
    <img src="img/${model.data.users[0].avatar}" alt="${model.data.users[0].avatar}" 20%" width="20%">
    ${readBooks}
    ${favorites}
    `
}

function generateYourProfile(){
    let favorites = `<ul id="favs">`
    let readBooks = `<ul id="readbooks">`
    for(i in model.data.users[0].addedBooks){
        readBooks+=model.data.users[0].addedBooks[i]
    }
    readBooks+=`</ul>`
    for(i in model.data.users[0].favorites){
        favorites+=model.data.users[0].favorites[i]
    }
    favorites+=`</ul>`
    const app = document.getElementById("app")
    app.innerHTML=`
    <h1>${model.data.users[0].name}</h1>
    <img src="img/${model.data.users[0].avatar}" alt="${model.data.users[0].avatar}" 20%" width="20%" onclick="chooseAvatar()">
    <div id="avatarPopup" onclick="avatarChosen()">
    <h1>Endre avatar</h1>
    </div>
    ${readBooks}
    ${favorites}
    `
}

function chooseAvatar(){
    const avatarPopup = document.getElementById("avatarPopup")
    avatarPopup.style.visibility="visible"
    
}

function avatarChosen(){
    const avatarPopup = document.getElementById("avatarPopup")
    avatarPopup.style.visibility="hidden"
}