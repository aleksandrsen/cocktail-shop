const router = require("express").Router();
const mocks = require("./mock");

let {
    cocktails,
    events,
    users,
    reviews,
    bartenders,
    blogPosts,
    instagram
} = mocks;

const reply = (res, body, timeout = 1000, status = 200) => {
    setTimeout(() => {
        res.status(status).json(body);
    }, 1000)
};

router.get("/instagram", function (req, res, next) {
    reply(res, instagram);
});

router.get("/reviews", function (req, res, next) {
    reply(res, reviews);
});

router.get("/users", function (req, res, next) {
    reply(res, users);
});

// Index
router.get("/cocktails", function (req, res, next) {
    reply(res, cocktails);
});

router.get("/random", function (req, res, next) {
    let randomCocktails = [];
    for (let i = 0; i < 16; i++) {
        let rand = Math.round(Math.random() * cocktails.length);
        randomCocktails.push(cocktails[rand])
    }
    reply(res, randomCocktails);
});

// Bartenders
router.get("/bartenders-section", function (req, res, next) {
    reply(res, bartenders);
});

router.get("/bartenders-section/:id", function (req, res, next) {
    let bartenderId = req.params.id;
    let response = bartenders.find(({id}) => id === bartenderId);
    reply(res, response);
});

// Blog posts
router.get("/blog-posts", function (req, res, next) {
    let response = blogPosts.sort((firstBlogPost, secondBlogPost) => {
        let dateStartFirst = +Date.parse(firstBlogPost.date);
        let dateStartSecond = +Date.parse(secondBlogPost.date);
        return dateStartSecond - dateStartFirst;
    });
    reply(res, response);
});

router.get("/blog-posts/:id", function (req, res, next) {
    let blogPostId = req.params.id;
    let response = blogPosts.find(({id}) => id === blogPostId);
    reply(res, response);
});

// Events
router.get("/events", function (req, res, next) {
    let response = events.filter(evenItem => {
        let date = Date.now();
        let dateEventStart = +Date.parse(evenItem.dateStart);
        return date < dateEventStart;
    }).sort((firstEvent, secondEvent) => {
        let dateStartFirst = +Date.parse(firstEvent.dateStart);
        let dateStartSecond = +Date.parse(secondEvent.dateStart);
        return dateStartFirst - dateStartSecond;
    });
    reply(res, response);
});

router.get("/events/:id", function (req, res, next) {
    let eventId = req.params.id;
    let response = events.find(({id}) => id === eventId);
    reply(res, response);
});

module.exports = router;
