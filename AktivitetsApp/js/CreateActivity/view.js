// Tegner opp registrerings-skjema for ny aktivitet
newActivityHtml()

function newActivityHtml() {

    document.getElementById('newActivity').innerHTML = /*HTML*/`
    <h3>Lag ny aktivitet</h3>
    <br>
    <form id="newActivityForm">
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
        <select id="activityDifficulty" name="activityDifficulty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <br>
        <label for="activityDuration">Varighet (timer:min.):</label>
        <input type="time" id="activityDuration" name="activityDuration" value="00:00">
        <br>
        <label for="activityImage">Illustrerende bilde:</label>
        <input type="file" id="activityImage" name="activityImage" accept="image/*">
        <br>
        <label for="activityRegistration"></label>
        <input type="button" onclick="registerNewActivity()" value="Registrer">
    </form>
    `;
}