function updateView(){
   document.getElementById("homePage").innerHTML+=/*HTML*/`
     <section id="popular-activities">
        <div>
            <h2>🔥Populære aktiviteter</h2>
            <img src="${model.data.popularActivities[0].img}" width="500px" alt="">
        </div>
        <div class="activity-container">
            <h3>${model.data.popularActivities[0].activityName}</h3>

            <div class="activity-stats">
                <p class="rating">
                    ${ratingStars(model.data.popularActivities[0].rating)}
                </p>
                <p class="difficulty">
                    Vanskelighet: 2/5
                </p>
                <p class="duration">
                    🕐2t 30min
                </p>
            </div>
            <div class="activity-description">
                <p>${model.data.popularActivities[0].description}</p>
            </div>
            <div class="tags">
                ${createTags(0)}
            </div>
        </div>
    </div>
    <button class="popular-btn-l"><i class="fa-solid fa-arrow-left"></i></button>
    <button class="popular-btn-r"><i class="fa-solid fa-arrow-right"></i></button>
    </section>
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