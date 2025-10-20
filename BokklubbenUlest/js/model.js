const model = {
    app: {
        currentPage: "home",
        currentUser: null,
        isAdmin: false,
    },
    viewState: {
        // Kombinere login og registration?
        logIn: {
            name: "",
            password: "",
        },
        userRegistration: {
            name: "",
            password: "",
        },
        bookRegistration: {
            title: "",
            author: "",
            description: "",
            link: "",
            coverImg: "",
            addToVoting: false,
        },
        voteTime: {
            startDate: "",
            endDate: "",
        },
        meetingTime: {
            date:  "",
        },
        // Velg fra bibliotek i + Nytt forslag-knapp
        // viewState eller data?
        chooseBook: {
            chosenBook: "",
            search: "",
        },
        rating: 0,
        
        // Er favoritt en input, og skal den inn i viewState?
    },
    data: {
        meetingAttendees: {
            coming: 0,
            notComing: 0,
        },
        booksInVoting: [
            {
                img: "",
                title: "",
                votes: "",
            },
        ],
        winnerBook: {
            img: "",
            title: "",
            author: "",
            description: "",
            link: "",
        },
        // evt egen for user info?
        users: [
            {
                name: "",
                password: "",
                avatar: "",
                addedBooks: [""],
                favorites: [""],
            }
        ],
        bookInfo: {
            title: "",
            releaseDate: "",
            author: "",
            description: "",
            ratings: [

            ],
            coverImg: "",
            addedByUser: "",
            purchaseLink: "",
            isFavorite: false

        }
    }
}