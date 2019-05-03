const anime_arr = [{
    genre: "Action",
    video: "https://www.youtube.com/watch?v=BOm_PAI2goo",
    link: "https://myanimelist.net/anime/genre/1/Action",
    description: "The action genre in anime depicts extremely high levels of intense action. More often than not, you’ll be witnessing thrilling battles and action-packed fight scenes in the shows from this genre. These series will make you jump off your seat or knock your socks off. Overall, the action genre usually possesses lots of battle scenes, fluid animation, and highly-engaging elements that will make your adrenaline rush!",
    scores: [3, 1, 5, 1, 5, 3, 2, 2, 4, 3]
  },
  {
    genre: "Adventure",
    video: "https://www.youtube.com/watch?v=d6kBeJjTGnY",
    link: "https://myanimelist.net/anime/genre/2/Adventure",
    description: "The adventure genre is about travelling and undertaking an adventure in a certain place or around the world (which may sometimes escalate to the whole universe or even to the other dimensions). In this genre, the main characters don’t usually stay in one place. They venture into several different places, usually with a goal in mind (e.g. searching for treasure, exploring some new place, defeating a heinous villain, or saving the world). Adventure anime are so broad and flexible that these shows can usually stretch to a huge number of episodes as well as overlap with multiple genres, usually with action.",
    scores: [3, 1, 4, 3, 2, 3, 4, 3, 1, 4]
  },
  {
    genre: "Comedy",
    video: "https://www.youtube.com/watch?v=9eCFxxQ4WE0",
    link: "https://myanimelist.net/anime/genre/4/Comedy",
    description: "The main purpose of the comedy genre is…you got it…to make you laugh! If it fails to make you laugh or at least make you giggle, then it’s a failure. But then again, humor can depend on your personal sense of humor. The animation may not be as impressive as TV shows in the action and drama category, but that can be forgiven for the laughs. Funny moments, hilarious scenes, wacky dialogue, comical happenings—all of these are covered by the comedy genre in anime!",
    scores: [3, 3, 1, 4, 1, 3, 3, 2, 1, 1]
  },
  {
    genre: "Drama",
    video: "https://www.youtube.com/watch?v=3aL0gDZtFbE",
    link: "https://myanimelist.net/anime/genre/8/Drama",
    description: "Bringing us tears and a wave of emotions is basically what the drama genre does best! Drama anime tends to connect the viewers to the experiences of the characters. This results in viewers feeling what the characters are going through. Whether it's a tickle of emotion or a barrage of feelings, the goal of these series is to touch our hearts. In anime, one of the greatest signs that the drama effectively worked is if it was able to make you cry.",
    scores: [4, 3, 5, 4, 1, 4, 5, 2, 1, 3]
  },
  {
    genre: "Slice of Life",
    video: "https://www.youtube.com/watch?v=JOGp2c7-cKc",
    link: "https://myanimelist.net/anime/genre/36/Slice_of_Life",
    description: "When one says slice of life, that means the mundane good ol’ life. Stories depicted in this genre are realistically set in the domain of real life. Nothing out-of-the-blue happens, but that’s the point! Everyday life is portrayed in a realistic light, with nothing out of the extraordinary wrecking the premise.",
    scores: [5, 4, 3, 4, 1, 2, 2, 1, 5, 5]
  },
  {
    genre: "Fantasy",
    video: "https://www.youtube.com/watch?v=YNTYLr3PF-A",
    link: "https://myanimelist.net/anime/genre/10/Fantasy",
    description: "The fantasy genre in anime primarily deals with fantasy worlds and surreal events and locations. Most of the time, the setting is in a magical world where the characters start an adventure. Sometimes they get sent there from the real world. Magic is oftentimes a component of this genre, and various mystical elements serve as the building blocks of the story. You’ll often know it’s a fantasy anime if the environment and atmosphere seems so dazzling and dreamlike that it’ll make you feel captivated and allured.",
    scores: [4, 4, 3, 2, 4, 3, 3, 3, 1, 1]
  },
  {
    genre: "Magic",
    video: "https://www.youtube.com/watch?v=bNNaZdtGZVc",
    link: "https://myanimelist.net/anime/genre/16/Magic",
    description: "Magic, in all its essence, is about magical stuff like spells and incantations. It can also include magical sources, beings that grants wishes, and good ol’ sleeve tricks. One of the most famous themes in the magic genre is magical girls. It is so popular that it might just become a whole new genre on its own in the future.",
    scores: [4, 4, 3, 2, 4, 3, 2, 2, 2, 1]
  },
  {
    genre: "Supernatural",
    video: "https://www.youtube.com/watch?v=StCN_4qWfWE",
    link: "https://myanimelist.net/anime/genre/37/Supernatural",
    description: "When one says supernatural, they’re referring to stuff or events that are odd and out-of-the-blue. For this category, supernatural might refer to something mythical, mystical, bizarre, or something outside the bounds of accepted reality. There’s a shadow of mystery often found in shows involved with this genre.",
    scores: [3, 5, 3, 1, 3, 4, 3, 4, 1, 1]
  },
  {
    genre: "Horror",
    video: "https://www.youtube.com/watch?v=weMxaz2KqHk",
    link: "https://myanimelist.net/anime/genre/14/Horror",
    description: "It’s not difficult to spot the horror genre in anime. Usually, if there are ghosts, monsters, gore, and creeps, then you’re likely watching a horror series. Heavy gore and bloody violence is a common trait. The most important factor for a show to be considered horror is its ability to scare and creep you out.",
    scores: [3, 4, 5, 1, 4, 4, 3, 4, 1, 4]
  },
  {
    genre: "Mystery",
    video: "https://www.youtube.com/watch?v=DwmxEAWjTQQ",
    link: "https://myanimelist.net/anime/genre/7/Mystery",
    description: "If there’s one thing that’s similar in all mystery anime shows, it is the existence of a central enigma. Whether it’s an event, a place, or an item, there’s some sort of mystery surrounding the narrative. In the history of anime, the most popular shows in the genre have featured detectives and gumshoes.",
    scores: [3, 4, 5, 1, 2, 5, 3, 5, 1, 5]
  },
  {
    genre: "Psychological",
    video: "https://www.youtube.com/watch?v=ELIKAYTDjNc",
    link: "https://myanimelist.net/anime/genre/40/Psychological",
    description: "Psychological anime are shows that delve into how the mind and psyche work. This genre tackles everything on a psychological level (sometimes even philosophical). You’ll often find mind games here as well as battles where the use of the wits is the primary focus. Series in this genre will play with your mind and make you think hard.",
    scores: [4, 4, 5, 1, 5, 5, 3, 5, 2, 5]
  },
  {
    genre: "Romance",
    video: "https://www.youtube.com/watch?v=6TN4a0kZuXg",
    link: "https://myanimelist.net/anime/genre/22/Romance",
    description: "Romance is all about love and sweet moments. Shows involved with this genre often have the skill to tug everyone’s heartstrings with their romantic scenes and tender moments. The focus of these shows is the romantic relationships between the characters as well as their blooming love with one another. You’ll often find romance anime tightly tied with the shoujo subgenre, but it also works pretty well with comedy, harem, and drama.",
    scores: [4, 4, 2, 5, 1, 2, 5, 3, 1, 3]
  },
  {
    genre: "Sci-Fi",
    video: "https://www.youtube.com/watch?v=RI08P5SaJNU",
    link: "https://myanimelist.net/anime/genre/24/Sci-Fi",
    description: "Sci-fi (short for science fiction) is a genre that showcases scientific and technological elements in its story. Machines and various kinds of technologies are staples of this genre. Most of the time, its focus is on the advancement and development of science and technology. That is why you’ll often find sci-fi combined with subgenres such as mecha and space.",
    scores: [3, 5, 3, 2, 4, 3, 3, 3, 2, 1]
  }
];

module.exports = anime_arr;