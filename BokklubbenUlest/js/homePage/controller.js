// stemme funksjon
function vote(bookId, value) {
    var books = model.data.booksInVoting;
    // console.log(bookId)
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == bookId) {
            books[i].votes += value;
            break;
        }else{
            console.log("no match")
        }
        
    }
    renderBooksInVoting()
    
}
