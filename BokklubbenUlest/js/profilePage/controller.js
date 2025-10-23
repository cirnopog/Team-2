function findProfile(usrId){
    var user;
    for(i in model.data.users){
        if(model.data.users[i].name==usrId){
            user=model.data.users[i]
        }
    }
    generateOtherUserProfile(user)
}