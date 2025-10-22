// Bøker i avstemning
function renderBooksInVoting() {
    var bookList = document.getElementById("bookListContainer"); 
    if (!bookList) return; 
    bookList.innerHTML = ""; 

    var books = model.data.booksInVoting;

    for (var i = 0; i < books.length; i++) {
        var book = books[i];

        
        if (book.votes === "") book.votes = 0;
        book.votes = Number(book.votes);

        var div = document.createElement("div");
        div.id = "book" + book.id;
        div.innerHTML = `
            <div style="margin-bottom:10px;">
                ${book.img ? `<img src="${book.img}" alt="${book.title}" style="width:50px; height:70px;">` : ""}
                <strong>${book.title}</strong>
                <button onclick="vote(${book.id},1)">👍</button>
                <span id="votes${book.id}">${book.votes}</span>
                <button onclick="vote(${book.id},-1)">👎</button>
            </div>
        `;
        bookList.appendChild(div);
    }
}

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


// renderBooksInVoting();
