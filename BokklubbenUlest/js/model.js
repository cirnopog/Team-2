const model = {
    app: {
        currentPage: "homePage",
        currentUser: null,
        savedUser: localStorage.getItem('currentUser'),
        votingActive: true,
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
            purchaseLink: "",
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
          "austronaut.png",
          "bird.png",
          "moose.png",
          "robot.png",
          "wizard.png"
        ],
        meetingdate: '',
        meetingAttendees: {
            coming: 0,
            notComing: 0,
        },
        booksInVoting: [
            {
                id: 1,
                img: "lake-of-darkness.webp",
                author: "Adam Roberts",
                title: "Lake of Darkness",
                purchaseLink: "https://www.norli.no/boker/skjonnlitteratur/fantasy-og-scifi/lake-of-darkness",
                votes: 0,
                
            },
            {
                id: 2,
                img: "dune.webp",
                author: "Frank Herbert",
                title: "Dune",
                purchaseLink: "https://www.norli.no/boker/boker-pa-andre-sprak/engelske-boker/dune",
                votes: 0,
                
            },

        ],
        winnerBook: null,
        //  {
        //     img: "",
        //     title: "",
        //     author: "",
        //     description: "",
        //     link: "",
        // },
        
        // evt egen for user info?
        users: [
            {
                name: "Geir",
                password: "Book_Worm88",
                avatar: "moose.png",
                addedBooks: [],
                favorites: [],
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
        bookList: [
            {
                id:1,
                img: "lake-of-darkness.webp",
                author: "Adam Roberts",
                title: "Lake of Darkness",
                releaseDate: "",
                ratings: [],
                description: "",
                addedByUser: "",
                purchaseLink: "https://www.norli.no/boker/skjonnlitteratur/fantasy-og-scifi/lake-of-darkness",
                isFavorite: false
                
            },
            {
                id:1,
                img: "dune.webp",
                author: "Frank Herbert",
                title: "Dune",
                releaseDate: "",
                ratings: [],
                description: "",
                addedByUser: "",
                purchaseLink: "https://www.norli.no/boker/boker-pa-andre-sprak/engelske-boker/dune",
                isFavorite: false
                
            },
        ],

        currentVote: [],
    }
}