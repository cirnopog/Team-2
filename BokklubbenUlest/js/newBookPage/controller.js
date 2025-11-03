function addBook(){
    const newBook = {
        id: model.data.bookList.length,
        title: model.viewState.bookRegistrationPage.title,
        author: model.viewState.bookRegistrationPage.author,
        description: model.viewState.bookRegistrationPage.description,
        purchaseLink: model.viewState.bookRegistrationPage.purchaseLink,
        img: model.viewState.bookRegistrationPage.coverImg,
        usersWhoHaveVoted:[],
        ratings: [],
        votes: 0,
        isFavorite: false,
        addedByUser:model.app.currentUser.name
    }
    model.data.currentBookId++
    model.data.bookList.push(newBook);
    model.app.currentUser.addedBooks.push(newBook);
    if(model.viewState.bookRegistrationPage.addToVoting){
        model.data.booksInVoting.push(newBook);
    }
    updateCurrentUser();
    saveData(); 
}
