function nextActivity (){
    model.data.displayedActivity++;
    if(model.data.displayedActivity>model.data.popularActivities.length-1){
        model.data.displayedActivity = 0;
    }
    updateView(model.data.displayedActivity)
}