const model = {
  app: {
    currentUser: null,
    savedUser: localStorage.getItem("currentUser"),
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
      message: "",
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
      date: null,
    },
    profileEditing: {
      name: "",
      password: "",
    },

    // Er favoritt en input, og skal den inn i viewState?
  },
  data: {
    votingActive: false,
    avatars: [
      "austronaut.png",
      "bird.png",
      "moose.png",
      "robot.png",
      "wizard.png",
      "fox.png",
      "man.png",
    ],
    meetingdate: "",
    meetingAttendees: {
      coming: 0,
      notComing: 0,
      comingList: [],
      notComingList: [],
    },
    booksInVoting: [
      {
        id: 0,
        img: "img/lake-of-darkness.webp",
        author: "Adam Roberts",
        title: "Lake of Darkness",
        purchaseLink:
          "https://www.norli.no/boker/skjonnlitteratur/fantasy-og-scifi/lake-of-darkness",
        votes: 0,
        usersWhoHaveVoted: [],
      },
      {
        id: 1,
        img: "img/dune.webp",
        author: "Frank Herbert",
        title: "Dune",
        purchaseLink:
          "https://www.norli.no/boker/boker-pa-andre-sprak/engelske-boker/dune",
        votes: 0,
        usersWhoHaveVoted: [],
      },
    ],
    winnerBook:
      null,
    users: [
      {
        name: "Geir",
        password: "Book_Worm88",
        avatar: "moose.png",
        addedBooks: [

                {
        id: 1,
        img: "img/dune.webp",
        author: "Frank Herbert",
        title: "Dune",
        releaseDate: "1965",
        ratings: [],
        description:
          "Dune er et episk science fiction-verk satt til en fjern fremtid hvor intergalaktiske føydale hus kjemper om kontroll over den ørkenplaneten Arrakis. Denne planeten er den eneste kilden til krydderet (melange), det mest verdifulle stoffet i universet, som er avgjørende for reiser i verdensrommet, livsforlengelse og synske evner. Boken følger den unge Paul Atreides, hvis familie får kontroll over Arrakis, og hans kamp for overlevelse, makt og skjebnen til planetens innfødte ørkenfolk, Fremen. Den utforsker dype temaer som politikk, religion, økologi og evolusjon.",
        addedByUser: "Geir",
        purchaseLink:
          "https://www.norli.no/boker/boker-pa-andre-sprak/engelske-boker/dune",
        isFavorite: false,
        votes: 0,
        usersWhoHaveVoted: [],
      }
        ],
        favorites: [],
        isAdmin: true,
        decidedMeeting: false,
      },
      {
        name: "Ole",
        password: "Passord888",
        avatar: "moose.png",
        addedBooks: [

                {
        id: 0,
        img: "img/lake-of-darkness.webp",
        author: "Adam Roberts",
        title: "Lake of Darkness",
        releaseDate: "2024",
        ratings: [],
        description:
          "Lake of Darkness er en filosofisk space opera der et utopisk, post-mangel samfunn blir rystet. Handlingen starter ved et svart hull (QV Tel) hvor en kaptein plutselig begår brutale drap på mannskapet sitt, drevet av en tilsynelatende stemme fra mørket. Romanen utforsker dype spørsmål om ondskapens natur, black hole-fysikk og hvordan en naiv, høyteknologisk sivilisasjon takler ren ondskap.",
        addedByUser: "Ole",
        purchaseLink:
          "https://www.norli.no/boker/skjonnlitteratur/fantasy-og-scifi/lake-of-darkness",
        isFavorite: false,
        votes: 0,
        usersWhoHaveVoted: [],
      }
        ],
        favorites: [],
        isAdmin: false,
        decidedMeeting: false,
      },
      {
        name: "Per",
        password: "Passord888",
        avatar: "moose.png",
        addedBooks: [],
        favorites: [],
        isAdmin: false,
        decidedMeeting: false,
      },
    ],

    bookInfo: {
      title: "",
      releaseDate: "",
      author: "",
      description: "",
      ratings: [],
      coverImg: "",
      addedByUser: "",
      purchaseLink: "",
      isFavorite: false,
    },
    bookList: [
      {
        id: 0,
        img: "img/lake-of-darkness.webp",
        author: "Adam Roberts",
        title: "Lake of Darkness",
        releaseDate: "2024",
        ratings: [],
        description:
          "Lake of Darkness er en filosofisk space opera der et utopisk, post-mangel samfunn blir rystet. Handlingen starter ved et svart hull (QV Tel) hvor en kaptein plutselig begår brutale drap på mannskapet sitt, drevet av en tilsynelatende stemme fra mørket. Romanen utforsker dype spørsmål om ondskapens natur, black hole-fysikk og hvordan en naiv, høyteknologisk sivilisasjon takler ren ondskap.",
        addedByUser: "Ole",
        purchaseLink:
          "https://www.norli.no/boker/skjonnlitteratur/fantasy-og-scifi/lake-of-darkness",
        isFavorite: false,
        votes: 0,
        usersWhoHaveVoted: [],
      },
      {
        id: 1,
        img: "img/dune.webp",
        author: "Frank Herbert",
        title: "Dune",
        releaseDate: "1965",
        ratings: [],
        description:
          "Dune er et episk science fiction-verk satt til en fjern fremtid hvor intergalaktiske føydale hus kjemper om kontroll over den ørkenplaneten Arrakis. Denne planeten er den eneste kilden til krydderet (melange), det mest verdifulle stoffet i universet, som er avgjørende for reiser i verdensrommet, livsforlengelse og synske evner. Boken følger den unge Paul Atreides, hvis familie får kontroll over Arrakis, og hans kamp for overlevelse, makt og skjebnen til planetens innfødte ørkenfolk, Fremen. Den utforsker dype temaer som politikk, religion, økologi og evolusjon.",
        addedByUser: "Geir",
        purchaseLink:
          "https://www.norli.no/boker/boker-pa-andre-sprak/engelske-boker/dune",
        isFavorite: false,
        votes: 0,
        usersWhoHaveVoted: [],
      },
    ],

    currentVote: [],
  },
};
