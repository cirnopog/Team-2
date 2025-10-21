//Voting polls


function  booksInVoting(){
    for (var i = 0; i < books.length; i++){
        if (books[i].id === bookId){books[i].votes += 1;}
        
    }
}
/* 
Finn ut hvilke bok som skal endres med ID
Dette kan gjøres med parameter
Etter det velg denne boken fra listen
Pluss poeng med 1
*/
