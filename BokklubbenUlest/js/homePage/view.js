loadData();
homePage();

function homePage() {
  document.getElementById("app").innerHTML = `

    ${drawMeetingBanner()}
    
    <div id="bookVoting">
        <div class="container">
            <h2>Bok avstemning</h2>
            <h3 id="voteStatus"></h3>
        </div>

        <div id="bookListContainer">
        </div>
      
    </div>
    `;
  // Koble knappene til funksjonene i controller
  document
    .getElementById("btnComing")
    ?.addEventListener("click", accountIsComing);
  document
    .getElementById("btnNotComing")
    ?.addEventListener("click", accountIsNotComing);

  if (model.app.votingActive) {
    renderBooksInVoting();
  }
  if(model.data.winnerBook !==null) {
    drawWinnerBook();
  }

  updateVoteStatus();
}

// Viser hvor mange dager det er igjen av avstemning
function updateVoteStatus() {
  const daysResult = voteDaysLeft();
  const statusElement = document.getElementById("voteStatus");

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
        ${
          book.img
            ? `<img src="${book.img}" alt="${book.title}" onclick="selectBook(${i})" style="width:220px; ">`
            : ""
        }
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
                <button class="dlt-btn" onclick="deleteBook(model.data.booksInVoting, ${i})">
                x
                </button>
            </div>
        </div>
        `;
    console.log(book.img);
    bookList.appendChild(div);
  }
  bookList.innerHTML += /*HTML*/ `
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


function drawWinnerBook() {
  document.getElementById("bookListContainer").innerHTML = `
    <div id="winnerBook">
        <h3>${model.data.winnerBook.title} vant bok valget!</h3> 

        <div class="winner-container">
            <div class="img-and-btn">
                <img src="${model.data.winnerBook.img}" width="200">
                <button onclick="window.location.href='${
                  model.data.winnerBook.purchaseLink
                }';">Kjøp boken</button>
            </div>

            <div class="winner-info">
                <p>Forfatter: ${model.data.winnerBook.author}</p>
                <p>Stemmer: ${model.data.winnerBook.votes}</p>
                <p>
                ${
                  model.data.winnerBook.description
                    ? model.data.winnerBook.description
                    : "Ingen beskrivelse"
                }
                </p>
            </div>
        </div>
    </div>
    `;
}

function showAddToVoting() {
  document.getElementById("addBookToVoting").classList.toggle("hidden");
}

// MEETING BANNER
//!! må endre 'meeting-attendees' senere !!
function drawMeetingBanner() {
  let moreHtml = "";
  if (model.app.currentUser && model.app.currentUser.decidedMeeting) {
    moreHtml = `
<div class="btn-container">
    <button id="btnComing">Kommer</button>
    <button id="btnNotComing">Kommer ikke</button>
</div>
`;
  }
  let comingNames = "";
  if (model.data.meetingAttendees.comingList.length > 0) {
    comingNames = `
<div class="attendees-list">
    <h4>Disse kommer:</h4>
    <ul>
    ${model.data.meetingAttendees.comingList
      .map((name) => `<li>${name}</li>`)
      .join("")}
    </ul>
</div>
`;
  }

  let notComingNames = "";
  if (model.data.meetingAttendees.notComingList.length > 0) {
    notComingNames = `
<div class="attendees-list">
    <h4>Disse kommer ikke:</h4>
    <ul>
    ${model.data.meetingAttendees.notComingList
      .map((name) => `<li>${name}</li>`)
      .join("")}
    </ul>
    </div>

    `;
  }

  let html = `
<div id="meetingBanner">
    <h2>Neste møte er</h2>

    <div class="meeting-info-container">
        <p>${
          model.data.meetingdate
            ? `${model.data.meetingdate}`
            : `Mer info kommer snart!`
        }</p>
    </div>
    <p class="meeting-attendees">
        <i class="fa-solid fa-thumbs-up"></i>
        Kommer: ${model.data.meetingAttendees.coming} 
        &nbsp;
        <i class="fa-solid fa-thumbs-down"></i>
        Kommer ikke: ${model.data.meetingAttendees.notComing} 
    </p>
    ${moreHtml}
    ${comingNames}
    ${notComingNames}
    </div>
`;
  return html;
}
