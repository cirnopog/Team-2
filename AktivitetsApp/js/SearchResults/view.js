function showSearchPage(searchList){
    let app = document.getElementById("app")
    let storedString = `<ol id="dropdown">`
    app.innerHTML=`
    <div id="header">Søk i listen</div>
    <div id="paragraph">Her er der du kan søke gjennom aktiviteter og brukere(kan kun søke i lowercase intil videre)</div>
    <button onclick="resetList()">Reset listen</button>
    </br>
    <input type="text" id="input" onchange="filter()"/>
    `
    for(i in searchList){
        storedString+=`<li class="part" onclick="colorChange(this)">${searchList[i].name}</li>`
    }
    storedString+=`</ol>`
    app.innerHTML+=storedString
}