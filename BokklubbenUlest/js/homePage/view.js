loadData();
homePage();

function homePage() {
  document.getElementById("app").innerHTML = `

    ${drawMeetingBanner()}
    
    <div id="bookVoting">
    ${
      model.data.votingActive
        ? `
    <div class="container">
            <h2>Bok avstemning</h2>
            <h3 id="voteStatus"></h3>
        </div>
    `
        : ``
    }
        

        <div id="bookListContainer">
        </div>
      
    </div>
    `;
  // Koble knappene til funksjonene i controller
  if(model.data.meetingdate!=""){
    document
      .getElementById("btnComing")
      ?.addEventListener("click", accountIsComing);
    document
      .getElementById("btnNotComing")
      ?.addEventListener("click", accountIsNotComing);

  }
  if (model.data.votingActive) {
    renderBooksInVoting();
  }
  if (model.data.winnerBook !== null && !model.data.votingActive) {
    drawWinnerBook();
  }
  if (!model.data.votingActive) {
    noVotingView();
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
  const startDate = new Date(model.data.currentVote[0].startDate);
  const currentDate = new Date();
  if (currentDate - startDate < 0) {
    return;
  }
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
            ? `<img src="${book.img}" alt="${book.title}" onclick="selectBook(${book.id})" style="width:220px; ">`
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
                ${
                  model.app.currentUser?.isAdmin
                    ? `<button class="dlt-btn" onclick="deleteBook(model.data.booksInVoting, ${i},'voting')">
                x
                </button>`
                    : ``
                }
                
            </div>
        </div>
        `;
    console.log(book.img);
    bookList.appendChild(div);
  }
  bookList.innerHTML += /*HTML*/ `
        <button onclick="model.app.currentUser!=null ? showAddToVoting() : toggleLogIn()" class="add-book-btn">+</button>
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
                <p class="book-description">
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
function noVotingView() {
  document.getElementById("bookListContainer").innerHTML = `
    <div class="no-voting">
        <h2>Ingen aktiv bokavstemning</h2>
        <p>Mer info kommer snart</p>
    </div>
    `;
}

function showAddToVoting() {
  document.getElementById("addBookToVoting").classList.toggle("hidden");
}

// MEETING BANNER
//!! må endre 'meeting-attendees' senere !!
function drawMeetingBanner() {
  let attendeesHtml = `
    <div class="attendees-wrapper">
      <div class="attendees-col">
        <div class="attendees coming">
          <h4><i class="fa-solid fa-thumbs-up"></i> Disse kommer:</h4>
          <ul>
            ${model.data.meetingAttendees.comingList
              .map(
                (name) => `<li><i class="fa-solid fa-user"></i> ${name}</li>`
              )
              .join("")}
          </ul>
        </div>
      </div>

      <div class="attendees-col">
        <div class="attendees not-coming">
          <h4><i class="fa-solid fa-thumbs-down"></i> Disse kommer ikke:</h4>
          <ul>
            ${model.data.meetingAttendees.notComingList
              .map(
                (name) => `<li><i class="fa-regular fa-user"></i> ${name}</li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  let html = `
    <div id="meetingBanner">
      <h2>Neste møte er</h2>
      <div class="meeting-info-container">
        <p>${
          model.data.meetingdate
            ? model.data.meetingdate
            : `Mer info kommer snart!`
        }</p>
      </div>

      <div class="btn-container">
        <button id="btnComing">Kommer</button>
        <button id="btnNotComing">Kommer ikke</button>
      </div>

      ${attendeesHtml}
    </div>
  `;

  return html;
}
