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
        activityData:{
                img: "",
                activityName: "",
                rating: "",
                duration: "",
                difficulty: "",
                description: "",
                tags: [],
        },
        popularActivities: [

        ],
        categoryActivities: [

        ],
        searchResults: [
            
        ],
        profileInfo: {
            name: "",
            img: "",
            bio: "",
            topActivities: [],
            following: [],
        }

    }
}