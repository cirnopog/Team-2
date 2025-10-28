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

// SELECT BOOK FOR VOTING
function filterBooks(searchInput){
    const dropdown = document.getElementById('bookDropdown');
    const filtered = model.data.bookList.filter(book =>
        book.title.toLowerCase().includes(searchInput.toLowerCase()) &&
        book.author);
    
       

    dropdown.innerHTML=filtered.map(book => `
        <div class="dropdown-item" onclick="selectBookVoting(${book.id})">
            <p>
                <strong>${book.title}</strong>,
                <small>${book.author}</small>
            </p>
        </div>
        `).join('');
        dropdown.classList.remove('hidden');
    }

    function showBookDropdown(){
        filterBooks('');
    }

    function selectBookVoting(bookId){
        const book = model.data.bookList.find(b => b.id === bookId);
        model.viewState.homePage.chooseBook.chosenBook = book;
        document.getElementById('bookSearch').value = book.title;
        document.getElementById('bookDropdown').classList.add('hidden');
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.searchable-select')) {
            document.getElementById('bookDropdown')?.classList.add('hidden');
        }
        

    });

    function addSelectedBook(){
        const chosenBook = model.viewState.homePage.chooseBook.chosenBook;
        if(chosenBook){
            model.data.booksInVoting.push(chosenBook);
            renderBooksInVoting();
        }
    }