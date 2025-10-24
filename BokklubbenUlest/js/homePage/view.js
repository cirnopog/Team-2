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
     }

    updateVoteStatus();
}

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
    console.log(books)
    for (var i = 0; i < books.length; i++) {
        var book = books[i];

        
        if (book.votes === "") book.votes = 0;
        book.votes = Number(book.votes);

        var div = document.createElement("div");
        div.id = "book" + book.id;
        div.innerHTML = `
        ${book.img ?
        `<img src="img/${book.img}" alt="${book.title}" style="width:220px; ">`: ""}
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
            </div>
        </div>
        `;
        bookList.appendChild(div);
    }
}

function drawWinnerBook(){
    document.getElementById("bookListContainer").innerHTML=`
    
    
    
    `;
}






// MEETING BANNER
//!! må endre 'meeting-attendees' senere !!
function drawMeetingBanner(){
html=`
<div id="meetingBanner">
    <h2>Neste møte er</h2>

    <div class="meeting-info-container">
        <p>${
            model.viewState.meetingPage.date!==null?
            `${model.viewState.meetingPage.date}`
            : 
            `Mer info kommer snart!`
        }</p>
    </div>
    <p class="meeting-attendees">
        <i class="fa-solid fa-thumbs-up"></i>
        Kommer: 2 
        &nbsp;
        <i class="fa-solid fa-thumbs-down"></i>
        Kommer ikke: 0
    </p>

    <div class="btn-container">
        <button>Kommer</button>
        <button>Kommer ikke</button>
    </div>
</div>
`
return html;
}


