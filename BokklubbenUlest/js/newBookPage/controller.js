function addBook(){
    const newBook = {
        id: model.data.bookList.length,
        title: model.viewState.bookRegistrationPage.title,
        author: model.viewState.bookRegistrationPage.author,
        description: model.viewState.bookRegistrationPage.description,
        purchaseLink: model.viewState.bookRegistrationPage.purchaseLink,
        img: model.viewState.bookRegistrationPage.coverImg,
        votes: 0,
    }
    model.data.bookList.push(newBook);
    model.app.currentUser.addedBooks.push(newBook);
    if(model.viewState.bookRegistrationPage.addToVoting){
        model.data.booksInVoting.push(newBook);
    }
    updateCurrentUser();
    saveData();
}
function handleImageUpload(e){
    const file = e.target.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            model.viewState.bookRegistrationPage.coverImg = e.target.result;
            console.log('image saved to model');
        };
        reader.readAsDataURL(file);
    }
}   