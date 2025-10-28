loadData()
homePage()
function homePage(){
    document.getElementById("app").innerHTML =`

    ${drawMeetingBanner()}
    
    <div id="bookVoting">
        <div class="container">
            <h2>Bok avstemning</h2>
            <h3 id="voteStatus"></h3>
        </div>

        <div id="bookListContainer">
        </div>
      
    </div>
    `

   if(model.app.votingActive){
        renderBooksInVoting()
     }else{
        drawWinnerBook()
     }

    updateVoteStatus();
}

// Viser hvor mange dager det er igjen av avstemning
function updateVoteStatus() {
    const daysResult = voteDaysLeft();
    const statusElement = document.getElementById('voteStatus');

    if (statusElement) {
        statusElement.textContent = daysResult;
    }
}


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
        ${book.img ?
        `<img src="${book.img}" alt="${book.title}" onclick="selectBook(${i})" style="width:220px; ">`: ""}
        <div class="container">
            <h3>${book.title}</h3>
            <div class="btn-container">
                <button onclick="vote(${book.id},1)">
                    <i class="fa-solid fa-thumbs-up"></i>
                </button>
                <span id="votes${book.id}">${book.votes}</span>
                <button onclick="vote(${book.id},-1)">
                    <i class="fa-solid fa-thumbs-down"></i>
                </button>
                <button onclick="deleteBook(model.data.booksInVoting, ${i})">
                x
                </button>
            </div>
        </div>
        `;
        console.log(book.img)
        bookList.appendChild(div);
    }
    bookList.innerHTML += /*HTML*/`
        <button onclick="showAddToVoting()" class="add-book-btn">+</button>
        <div id="addBookToVoting" class="hidden">
            <h4>Legg til bok i avstemningen</h4>

            <div class="add-to-vote-container">
                <button onclick="newBookPage()">+ Ny bok</button>

                <div class="searchable-select">
                    <input
                        type="text"
                        id="bookSearch"
                        placeholder="Søk etter bok..."
                        oninput="filterBooks(this.value)"
                        onfocus="showBookDropdown()"
                        autocomplete="off"
                    >
                    <div id="bookDropdown" class="dropdown hidden"></div>
                    <button id="addSelectedBook" onclick="addSelectedBook()">+</button>
                </div>
            </div>
        </div>
    `;
}



function drawWinnerBook(){
    document.getElementById("bookListContainer").innerHTML=`
    <div>
    <img src="img/${model.data.drawWinnerBook.img}">
    </div>
    
    
    `;
}

function showAddToVoting(){
    document.getElementById("addBookToVoting").classList.toggle("hidden")
    

}




// MEETING BANNER
//!! må endre 'meeting-attendees' senere !!
function drawMeetingBanner(){
html=`
<div id="meetingBanner">
    <h2>Neste møte er</h2>

    <div class="meeting-info-container">
        <p>${
            model.data.meetingdate?
            `${model.data.meetingdate}`
            : 
            `Mer info kommer snart!`
        }</p>
    </div>
    <p class="meeting-attendees">
        <i class="fa-solid fa-thumbs-up"></i>
        Kommer: ${model.data.meetingAttendees.coming} 
        &nbsp;
        <i class="fa-solid fa-thumbs-down"></i>
        Kommer ikke: ${model.data.meetingAttendees.notComing} 
    </p>

    <div class="btn-container">
        <button>Kommer</button>
        <button>Kommer ikke</button>
    </div>
</div>
`
return html;
}


