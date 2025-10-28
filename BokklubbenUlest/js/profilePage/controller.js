function findProfile(usrId){
    var user;
    for(i in model.data.users){
        if(model.data.users[i].name==usrId){
            user=model.data.users[i]
        }
    }
    generateOtherUserProfile(user)
}

function chooseAvatar(){
    const avatarPopup = document.getElementById("avatarPopup")
    avatarPopup.style.visibility="visible"
    
}

function avatarChosen(newAvatar){
    const avatarPopup = document.getElementById("avatarPopup")
    model.app.currentUser.avatar=newAvatar
    avatarPopup.style.visibility="hidden"
    updateCurrentUser()
    generateYourProfile()
    createHeader()
    
}

function logOut(){
    model.app.currentUser = null;
    localStorage.removeItem('currentUser');
    createHeader();
    homePage();
}

function deleteBook(list, book){
    list.splice(book, 1);
    updateCurrentUser();
    saveData();
    if(list===model.app.currentUser.addedBooks ||
        list===model.app.currentUser.favorites){
            generateYourProfile();
        }else{
          homePage()  
        }
    

}
