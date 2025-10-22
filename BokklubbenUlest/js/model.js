const model = {
    app: {
        currentPage: "homePage",
        currentUser: null,
        isAdmin: false,
    },
    viewState: {
        homePage: {
            chooseBook: {
                chosenBook: "",
                search: "",
            },
        },
        logInPage: {
            name: "",
            password: "",
        },
        userRegistrationPage: {
            name: "",
            password: "",
        },
        bookRegistrationPage: {
            title: "",
            author: "",
            description: "",
            link: "",
            coverImg: "",
            addToVoting: false,
        },
        votePage: {
            startDate: "",
            endDate: "",
        },
        meetingPage: {
            date:  "",
        },
        
        // Er favoritt en input, og skal den inn i viewState?
    },
    data: {
        meetingAttendees: {
            coming: 0,
            notComing: 0,
        },
        booksInVoting: [
            {
                id:"",
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
                favorites: [""]
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

        },
        bookList: []
    }
}