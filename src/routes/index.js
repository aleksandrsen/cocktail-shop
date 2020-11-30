export const routes = {
    home: {
        link: "/",
        label: "Home"
    },
    about: {
        link: "/about",
        label: "about"
    },
    cocktails: {
        link: "/cocktails/",
        label: "Cocktails",
        details: "/cocktails/:id"
    },
    musicEvents: {
        link: "/music-events/",
        label: "Music&Events",
        details: "/music-events/:id",
    },
    bartenders: {
        link: "/bartenders/",
        details: "/bartenders/:id",
        label: "Bartenders"
    },
    blog: {
        link: "/blog/",
        details: "/blog/:id",
        label: "Blog"
    },
    contact: {
        link: "/contact",
        label: "Contact"
    },
}