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

function deleteBook(list, bookNum){
    let book=list[bookNum]
    for(i in model.data.booksInVoting){
        if(model.data.booksInVoting[i].title==book.title){
            model.data.booksInVoting.splice(i , 1)
        }
    }
    for(i in model.data.bookList){
        if(model.data.bookList[i].title==book.title){
            model.data.bookList.splice(i,1)
        }
    }
    list.splice(bookNum, 1);
    updateCurrentUser();
    saveData();
    generateYourProfile()
}
