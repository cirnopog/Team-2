const model = {
    app: {
        currentPage: "homePage",
        currentUser: null,
        savedUser: localStorage.getItem('currentUser')
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
            message: ""
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
            date:  null,
        },
        
        // Er favoritt en input, og skal den inn i viewState?
    },
    data: {
        avatars:[
          "moose.png"  
        ],
        meetingdate: '',
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
                name: "Geir",
                password: "Book_Worm88",
                avatar: "moose.png",
                addedBooks: [""],
                favorites: [""],
                isAdmin: true
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
        bookList: [],

        currentVote: [],
    }
}