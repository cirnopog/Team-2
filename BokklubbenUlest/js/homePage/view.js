//Voting polls
var bookList = document.getElementsById("booklist");








function  vote(bookId, value){
    for (var i = 0; i < model.booksInVoting.length; i++){
        if (model.booksInVoting[i].id === bookId) {
            model.booksInVoting[i].votes += value;
            document.getElementById("votes"+ bookId).textContent = model.booksInVoting[i].votes;
            break;

            

        }
        
    }
}
/* 
Finn ut hvilke bok som skal endres med ID
Dette kan gjøres med parameter
Etter det velg denne boken fra listen
Pluss poeng med 1
*/
