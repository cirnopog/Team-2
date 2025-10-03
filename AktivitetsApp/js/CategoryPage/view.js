categoriesView()

function categoriesView() {
    document.getElementById('categoriesHtml').innerHTML = /*HTML*/`
    <div id="heading-1">
        <h3>Kategorier</h3>
    </div>
    <div id="submenu">
        <p><< Back | Filter: [None] | Sort: [Rating] |</p>
    </div>
    <div id="container">
        <p id="subheading">Liste over kategorier:</p>
        <br>
        <p>Her skal du kunne trykke på kategorier. Deretter vil tilhørende aktiviteter vises her. Da vil 'Liste over kategorier' endres til 'Liste over aktiviteter'. For å komme tilbake til kategorier bruker man kategorier-boksens meny. Der skal du også kunne filtrere og sortere hva du ser.</p>
    </div>
    `;
}