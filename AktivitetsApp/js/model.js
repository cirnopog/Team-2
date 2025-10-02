const model = {
    app: {
        currentPage: "home",
        currentUser: null,
    },

    viewState: {
        homePage: {
            search: "",
        },
        logInPage: {
            name: "",
            password: "",
            search: ""
        },
        registrationPage: {
            name: "",
            password: "",
            search: "",
        },
        activityPage:{
            feedback: "",
            starfeedback: "",
            search: ""
        },
        categoryPage: {
            selectedCategory: "",
            search: ""
        },
        searchResultPage: {
            search: ""
        },
        activityCreator:{
                img: "",
                activityName: "",
                rating: "",
                duration: "",
                difficulty: "",
                description: "",
                tags: [],
                search: ""
        }
    },

    data: {
        activities: [
            {
                img: "",
                activityName: "",
                rating: "",
                duration: "",
                difficulty: "",
                description: "",
                tags: [],
            },
             {
                img: "",
                activityName: "",
                rating: "",
                duration: "",
                difficulty: "",
                description: "",
                tags: [],
            }
    ],
        popularActivities: [
                {img: "img/mountain-climbing.jpg",
                activityName: "",
                rating: "",
                duration: "",
                difficulty: "",
                description: "",
                tags: []}

        ],
        categoryActivities: [

        ],
        searchResults: [
            
        ],
        profileInfo: {
            name: "Felix Berget",
            img: "test.jpg",
            bio: "Jeg heter Felix og liker å klatre i fjellet",
            topActivities: ["Klatre lokalt fjell","Klatre fjellene ved elven","Løpetur"],
            following: ["John Smith","Ola Normann"],
        }

    }
}