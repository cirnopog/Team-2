// stemme funksjon
function vote(bookId, value) {
    var books = model.data.booksInVoting;
    for (var i = 0; i < books.length; i++) {
        if (books[i].id === bookId) {
            books[i].votes = Number(books[i].votes) + value;
            document.getElementById("votes" + bookId).textContent = books[i].votes;
            break;
        }
    }
}