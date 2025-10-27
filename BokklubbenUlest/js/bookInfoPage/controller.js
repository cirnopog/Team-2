
// Når du klikker på en bok
function selectBook(bookId) {
    console.log("Klikket bok-ID:", bookId);

    const selectedBook = model.data.booksInVoting.find(book => Number(book.id) === Number(bookId));

    console.log("Funnet bok-objekt:", selectedBook);

    model.data.bookInfo = selectedBook;

    if (selectedBook) {
        model.data.bookInfo = selectedBook;
        bookInfoPage();
    } else {
        console.error("Bok-ID ikke funnet:", bookId);
    }

}