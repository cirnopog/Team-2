// stemme funksjon

function vote(bookId, value) {
  var books = model.data.booksInVoting;
  var book = books.find(b => b.id == bookId);
  const hasVoted = book.usersWhoHaveVoted?.some(
    user => user.name === model.app.currentUser.name
  );

  if(!book){
    console.log("book not found")
  }
  if(model.app.currentUser===null){
    return;
  }
  if (hasVoted) {
    console.log("User already voted");
    return;
  }
 if (!book.usersWhoHaveVoted){
    book.usersWhoHaveVoted = []
 }
  book.usersWhoHaveVoted.push(model.app.currentUser);
  book.votes += value;

  saveData();
  renderBooksInVoting();
}
// MEETING BANNER ATTENDEES

function accountIsComing() {
  const name = model.app.currentUser.name;

  const notComingIndex =
    model.data.meetingAttendees.notComingList.indexOf(name);
  if (notComingIndex !== -1) {
    model.data.meetingAttendees.notComingList.splice(notComingIndex, 1);
    model.data.meetingAttendees.notComing -= 1;
  }

  if (!model.data.meetingAttendees.comingList.includes(name)) {
    model.data.meetingAttendees.comingList.push(name);
    model.data.meetingAttendees.coming += 1;
  }

  updateCurrentUser();
  saveData();
  homePage();
}

function accountIsNotComing() {
  const name = model.app.currentUser.name;

  const comingIndex = model.data.meetingAttendees.comingList.indexOf(name);
  if (comingIndex !== -1) {
    model.data.meetingAttendees.comingList.splice(comingIndex, 1);
    model.data.meetingAttendees.coming -= 1;
  }

  if (!model.data.meetingAttendees.notComingList.includes(name)) {
    model.data.meetingAttendees.notComingList.push(name);
    model.data.meetingAttendees.notComing += 1;
  }

  updateCurrentUser();
  saveData();
  homePage();
}

// SELECT BOOK FOR VOTING
function filterBooks(searchInput) {
  const dropdown = document.getElementById("bookDropdown");
  const filtered = model.data.bookList.filter(
    (book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      book.author &&
      !model.data.booksInVoting.includes(book)
  );

  dropdown.innerHTML = filtered
    .map(
      (book) => `
        <div class="dropdown-item" onclick="selectBookVoting(${book.id})">
            <p>
                <strong>${book.title}</strong>,
                <small>${book.author}</small>
            </p>
        </div>
        `
    )
    .join("");
  dropdown.classList.remove("hidden");
}

function showBookDropdown() {
  filterBooks("");
}

function selectBookVoting(bookId) {
  const book = model.data.bookList.find((b) => b.id === bookId);
  model.viewState.homePage.chooseBook.chosenBook = book;
  document.getElementById("bookSearch").value = book.title;
  document.getElementById("bookDropdown").classList.add("hidden");
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".searchable-select")) {
    document.getElementById("bookDropdown")?.classList.add("hidden");
  }
});

function addSelectedBook() {
  const chosenBook = model.viewState.homePage.chooseBook.chosenBook;
  chosenBook.votes = 0;
  console.log(chosenBook);
  if (chosenBook) {
    model.data.booksInVoting.push(chosenBook);
    saveData();
    renderBooksInVoting();
  }
}

// WINNER BOOK
function findWinner() {
  var highscore = 0;
  if (model.data.booksInVoting.length === 0) {
    model.data.winnerBook = null;
  }

  for (let i = 0; i < model.data.booksInVoting.length; i++) {
    if (model.data.booksInVoting[i].votes > highscore) {
      highscore = model.data.booksInVoting[i].votes;
      model.data.winnerBook = model.data.booksInVoting[i];
    }
  }
  saveData();
}
