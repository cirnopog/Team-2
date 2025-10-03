function activityView(i = 0){
    document.getElementById("activityPage").innerHTML = /*HTML*/`
    <div class="activity-info">
    <h2>${model.data.activities[i].name}</h2>

    <div class="activity-stats">
        <p class="rating">
            ${ratingStars(model.data.activities[i].rating)}
        </p>

        <p class="difficulty">
            Vanskelighet: ${model.data.activities[i].difficulty}
        </p>
        <p class="duration">
            🕐${model.data.popularActivities[i].duration}        
        </p>
    </div>
    <div class="description">
        ${model.data.activities[i].description}
    </div>
    
    </div>
    
    <div>
        <img src="${model.data.activities[i].img}" width="700" alt=""></img>
        <div class="tags">
                ${createTags(i)}
              <i class="fa-regular fa-heart"></i>
        </div>
        
        
    </div>
    
    `;
    
}
activityView() 
{/* <i class="fa-solid fa-heart"></i>   */}