let app = document.getElementById("app")
function showProfilePage(){
    app.innerHTML=`
    <div id="header">${model.data.profileInfo.name}</div>
    <div id="bio">${model.data.profileInfo.bio}</div>
    <ol id="actList">`
    for(i in model.data.profileInfo.topActivities){
        app.innerHTML+=`
        <li class="act">${model.data.profileInfo.topActivities[i]}</li>`
    }
    app.innerHTML+=`
    </ol>
    <img src=${model.data.profileInfo.img}>
    <ol id="followList">`
    for(i in model.data.profileInfo.following){
        app.innerHTML+=`
        <li class="act">${model.data.profileInfo.following[i]}</li>`
    }
    app.innerHTML+=`
    </ol>`

}