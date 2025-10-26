export const siteMeta = {
  title: "Oʻahu Pride Volleyball — Season 4 (Fall 2025)",
  description:
    "Inclusive, all-gender grass volleyball league in Honolulu bringing the Oʻahu LGBTQIA+ community together.",
  // Update this when the final domain is known. Runtime code will set canonical/og:url from here.
  canonicalUrl: "https://oahupridevolleyball.org/",
  ogImage:
    "https://www.aikaneohana.com/_files/ugd/952afa_season4poster.png",
};

export const season = {
  // Confirmed by user: Sept 20 – Nov 22, 2025
  startISO: "2025-09-20",
  endISO: "2025-11-22",
  rangeShort: "Sept 20–Nov 22, 2025",
  day: "Saturdays",
  timeWindow: "9:00 AM – 3:00 PM",
};

export const links = {
  home: "https://opv.netlify.app",
  donate:
    "https://www.zeffy.com/fundraising/support-season-4-oahu-pride-volleyball-league",
  rules:
    "https://www.aikaneohana.com/_files/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf",
  photos: "https://ericzmartin.com/",
  teamSideline: "https://teamsideline.com/sites/aikaneohana/schedules",
  tournament: "https://bit.ly/kaiauluclassic",
  store: "https://www.bonfire.com/opvseason4/",
  aikaneOhana: "https://www.aikaneohana.com/",
  social: "https://linktr.ee/oahupridevolleyball",
  facebook: "https://www.facebook.com/groups/577119141300496",
  instagram: "https://www.instagram.com/oahupridevolleyball/",
  sponsorsBecome:
    "https://www.zeffy.com/en-US/fundraising/191a11d3-841f-420d-912a-990a33cace29",
};

export type Sponsor = {
  name: string;
  logo: string; // path under /public
  website: string | null;
};

export const sponsors: Sponsor[] = [
  {
    name: "Eric Martin Photography",
    logo: "/eric-z-martin.png",
    website: "https://ericzmartin.com",
  },
  {
    name: "Hula's Waikiki",
    logo: "/hulas-waikiki.png",
    website: "https://hulas.com",
  },
  {
    name: "Wang Chungs",
    logo: "/wang-chungs.webp",
    website: "https://www.wangchungs.com",
  },
  {
    name: "Team Mimosa",
    logo: "/team-mimosa.png",
    website: null,
  },
  {
    name: "Halau Hula O Ikemanu",
    logo: "/halau-hula.jpg",
    website:
      "https://www.instagram.com/halau_hula_o_ikemanu_?igsh=ZnM3c2hmY2hnZ255",
  },
  {
    name: "Tapas Waikiki",
    logo: "/tapas-waikiki.png",
    website: "https://www.hawaiigaybar.com/",
  },
];
