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
                activityName: "Fjellklatring",
                rating: 9.5,
                duration: "2t 30min",
                difficulty: "4/5",
                description: "Fjellklatring er en spennende aktivitet som kombinerer styrke, utholdenhet og teknikk. Du beveger deg oppover naturlige klippevegger eller kunstige vegger, ofte med sikringstau og utstyr. Aktiviteten passer både for nybegynnere og erfarne, og gir en unik opplevelse av mestring og nærhet til naturen.",
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