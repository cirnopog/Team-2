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
// function handleImageUpload(e){
//     const file = e.target.files[0];
//     if (!file) return;

//         const reader = new FileReader();
//         reader.onload = function(e){
//             const img = new Image();
//             img.onload = function() {
//                 // Resize image to max 300px width
//                 const canvas = document.createElement('canvas');
//                 const maxWidth = 300;
//                 const scale = maxWidth / img.width;
//                 canvas.width = maxWidth;
//                 canvas.height = img.height * scale;
                
//                 const ctx = canvas.getContext('2d');
//                 ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                
//                 // Convert to compressed Base64
//                 const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
//                 model.viewState.bookRegistrationPage.coverImg = compressedBase64;
//             };
//             img.src = e.target.result;
            
//         };
//         reader.readAsDataURL(file);
//     }
