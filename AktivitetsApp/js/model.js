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
                name: "",
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
                name: "Gå tur i skogen",
                rating: "",
                duration: "",
                difficulty: "",
                description: "",
                tags: [],
            },
             {
                img: "",
                name: "Fjellklatring",
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
                rating: 10,
                duration: "2t 30min",
                difficulty: "3/5",
                description: "Fjellklatring er en spennende aktivitet som kombinerer styrke, utholdenhet og teknikk. Du beveger deg oppover naturlige klippevegger eller kunstige vegger, ofte med sikringstau og utstyr. Aktiviteten passer både for nybegynnere og erfarne, og gir en unik opplevelse av mestring og nærhet til naturen.",
                tags: ["Friluftsliv", "Klatring", "Natur"]
                },
                {img: "img/kayaking.jpg",
                activityName: "Kajakkpadling",
                rating: 9,
                duration: "1t 45min",
                difficulty: "2/5",
                description: "Kajakkpadling er en rolig og naturnær aktivitet der du beveger deg over vann med padleårer. Det kan gjøres på innsjøer, elver eller langs kysten, og passer både til rekreasjon, trening og eventyr.",
                tags: ["Friluftsliv", "Vannaktivitet", "Natur"]
                },

        ],
        displayedActivity: 0,
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