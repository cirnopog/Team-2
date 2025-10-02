newActivityHtml()

function newActivityHtml() {
    document.getElementById('newActivity').innerHTML = /*HTML*/`
    <h3>Lag ny aktivitet</h3>
    <br>
    <label for="activityName">Navn på aktivitet:</label>
    <input id="activityName" type="text" name="activityName"/>
    <br>
    <label for="activityInfo">Beskrivelse:</label>
    <input id="activityInfo" type="text" name="activityInfo"/>
    <br>
    <label for="activityTags">Tag(s):</label>
    <input id="activityTags" type="text" name="activityTags"/>
    <br>
    <label for="activityDifficulty">Vanskelighetsgrad (1-5):</label>
    <input id="activityDifficulty" type="range" name="activityDifficulty" min="0" max="5">
    `;
}