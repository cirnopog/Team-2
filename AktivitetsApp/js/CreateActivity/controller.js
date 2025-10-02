function registerNewActivity() {

    // Lager array av tags, til bruk i nytt objekt
    const tagsString = document.getElementById('activityTags').value;
    const rawTagsArray = tagsString.split(',');
    // Tar bort whitespace fra hvert enkelt index i array
    const cleanedTagsArray = rawTagsArray
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

    // Nytt objekt
    let newActivityData = {
        // img: returnerer tomt hvis bilde ikke lastes opp, error unngås
        img: document.getElementById('activityImage').files[0] ? document.getElementById('activityImage').files[0].name : "",
        activityName: document.getElementById('activityName').value,
        rating: 0,
        duration: document.getElementById('activityDuration').value,
        difficulty: document.getElementById('activityDifficulty').value,
        description: document.getElementById('activityInfo').value,
        tags: [cleanedTagsArray],
    }

    // Pusher nytt objekt med aktiviteter til model.js
    model.data.activities.push(newActivityData);

    // Resetter skjema etter registrering
    document.getElementById('newActivityForm').reset();

    // Verifiseringer
    console.log("Ny aktivitet:", newActivityData);
    console.log("Model oppdatert! Aktiviteter totalt:", model.data.activities.length);
}