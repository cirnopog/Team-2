function updateView(i = 0){
   document.getElementById("homePage").innerHTML=/*HTML*/`
     <section id="popular-activities">
        <div>
            <h2>🔥Populære aktiviteter</h2>
            <img src="${model.data.popularActivities[i].img}" width="600px" alt="">
        </div>
        <div class="activity-container">
            <h3>${model.data.popularActivities[i].activityName}</h3>

            <div class="activity-stats">
                <p class="rating">
                    ${ratingStars(model.data.popularActivities[i].rating)}
                </p>
                <p class="difficulty">
                    ${model.data.popularActivities[i].difficulty}
                </p>
                <p class="duration">
                    🕐${model.data.popularActivities[i].duration}
                </p>
            </div>
            <div class="activity-description">
                <p>${model.data.popularActivities[i].description}</p>
            </div>
            <div class="tags">
                ${createTags(i)}
            </div>
        </div>
    </div>
    <button onclick="nextActivity()" class="popular-btn-l"><i class="fa-solid fa-arrow-left"></i></button>
    <button onclick="nextActivity()" class="popular-btn-r"><i class="fa-solid fa-arrow-right"></i></button>

    </section>
    <button class="new-activity-btn"><a href="create-activity.html">+ Ny aktivitet</a></button>
   `;
}
updateView()

function ratingStars(rating){
   let star = "⭐"
   let starsCalc = star.repeat(Math.floor(rating/2))
   return starsCalc
}

 function createTags(i){
    html=``;
    for(tag of model.data.popularActivities[i].tags){
        html+=`<p>${tag}</p>`
    }
    return html;
 }