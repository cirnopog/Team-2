let app = document.getElementById("app")
function showProfilePage(){
    storedHtml = `<li class="topOfList">${model.data.profileInfo.name} sine favoritaktivteter</li>`
    app.innerHTML=`
    <div id="header">${model.data.profileInfo.name}</div>
    <div id="bio">${model.data.profileInfo.bio}</div>`
    for(i in model.data.profileInfo.topActivities){
        storedHtml+=`
        <li class="act">${model.data.profileInfo.topActivities[i]}</li>`
    }
    app.innerHTML+=
    `<ul id="actList">
    ${storedHtml}
    </ul>
    <img src=${model.data.profileInfo.img} id="profilePic">`
    storedHtml=`<li class="topOfList">${model.data.profileInfo.name} følger disse personene</li>`
    for(i in model.data.profileInfo.following){
        storedHtml+=`
        <li class="fol">${model.data.profileInfo.following[i]}</li>`
    }
    app.innerHTML+=`
    </br>
    <ul id="followList">
    ${storedHtml}
    </ul>`

}
