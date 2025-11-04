function findProfile(usrId){
    var user;
    for(i of model.data.users){
        if(i.name==usrId){
            user=i
            generateProfile(user)
        }
    }
  }

function chooseAvatar() {
  const avatarPopup = document.getElementById("avatarPopup");
  avatarPopup.style.visibility = "visible";
}

function avatarChosen(newAvatar) {
  const avatarPopup = document.getElementById("avatarPopup");
  model.app.currentUser.avatar = newAvatar;
  avatarPopup.style.visibility = "hidden";
  updateCurrentUser();
  generateProfile(model.app.currentUser);
  createHeader();
}

function logOut() {
  model.app.currentUser = null;
  localStorage.removeItem("currentUser");
  createHeader();
  homePage();
}
