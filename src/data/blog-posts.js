import blogPostImg1 from "./img/blog-post-item-1.jpg"
import blogPostImg2 from "./img/blog-post-item-2.jpg"
import blogPostImg3 from "./img/blog-post-item-3.jpg"
import smallBlogPostImg from "./img/small-blog-post-1.jpg"

let blogPosts = [
    {
        title: "Private parties from 20 to 50 guests",
        img: blogPostImg1,
        asideImg: smallBlogPostImg,
        id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
        date: "2019-11-02",
        author: "Jane Smith",
        authorId: "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            {
                id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
                userId: "a304959a-76c0-4b34-954a-b38dbf310360",
                text: "Not bad"
            },
            {
                id: "429dea85-11dd-4054-a31e-c60c92e17255",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers"
            }
        ]
    },
    {
        title: "Every evening beer parties from 10pm to 12px",
        img: blogPostImg2,
        asideImg: smallBlogPostImg,
        id: "a304959a-76c0-4b34-954a-b38dbf310360",
        date: "2019-10-28",
        author: "Bruce Robertson",
        authorId: "d75f762a-eadd-49be-8918-ed0daa8dd024",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto",
        reviews: [
            {
                id: "13b642d7-5e86-4717-a466-0640a1dee076",
                userId: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
                text: "Best bakery"
            },
            {
                id: "5db6247b-ab1c-49db-be1f-8dd27fd38b81",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "Finally! This place is amazing place for breakfast, lunch, dinner and supper"
            },
            {
                id: "381b0c31-6360-43ff-80d1-581a116159d8",
                userId: "1547335a-ea18-4547-a73d-32bd6e9f651c",
                text: "Meat here is extremely delicious"
            }
        ]
    },    {
        title: "Private parties only for major people",
        img: blogPostImg3,
        asideImg: smallBlogPostImg,
        id: "429dea85-11dd-4054-a31e-c60c92e17255",
        date: "2019-12-01",
        author: "Amanda Brian",
        authorId: "bd129641-c0eb-432b-84b6-8b81d2930358",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores ex natus non nostrum. Ad, asperiores assumenda debitis est explicabo fugiat maiores molestiae numquam, officia quo soluta sunt suscipit unde?",
        reviews: [
            {
                id: "429dea85-11dd-4054-a31e-c60c92e17255",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers"
            },
            {
                id: "53b642d7-5e86-4717-a466-0640a1dee076",
                userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
                text: "Perfect Margarita"
            },
            {
                id: "c27ab88e-375c-4e98-aa94-8a180150a797",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers again. But Chef Pizza is the best one"
            },
            {
                id: "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
                userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
                text: "Good for lunch"
            }
        ]
    },
    {
        title: "Private parties from 20 to 50 guests",
        img: blogPostImg3,
        asideImg: smallBlogPostImg,
        id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
        date: "2019-09-15",
        author: "Allan Butler",
        authorId: "5909796d-5030-4e36-adec-68b8f9ec2d96",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            {
                id: "429dea85-11dd-4054-a31e-c60c92e17255",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers"
            },
            {
                id: "53b642d7-5e86-4717-a466-0640a1dee076",
                userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
                text: "Perfect Margarita"
            },
            {
                id: "c27ab88e-375c-4e98-aa94-8a180150a797",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers again. But Chef Pizza is the best one"
            }
        ]
    },
    {
        title: "Every evening beer parties from 10pm to 12px",
        img: blogPostImg1,
        asideImg: smallBlogPostImg,
        id: "53b642d7-5e86-4717-a466-0640a1dee076",
        date: "2019-11-17",
        author: "Alison Black",
        authorId: "429dea85-11dd-4054-a31e-c60c92e17255",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto",
        reviews: [
            {
                id: "429dea85-11dd-4054-a31e-c60c92e17255",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers"
            },
            {
                id: "53b642d7-5e86-4717-a466-0640a1dee076",
                userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
                text: "Perfect Margarita"
            }
        ]
    },
    {
        title: "Private parties only for major people",
        img: blogPostImg2,
        asideImg: smallBlogPostImg,
        id: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
        date: "2020-01-17",
        author: "Daisy Nail",
        authorId: "bb8afbec-2fec-491f-93e9-7f13950dd80b",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores ex natus non nostrum. Ad, asperiores assumenda debitis est explicabo fugiat maiores molestiae numquam, officia quo soluta sunt suscipit unde?",
        reviews: [
            {
                id: "429dea85-11dd-4054-a31e-c60c92e17255",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers"
            },
            {
                id: "53b642d7-5e86-4717-a466-0640a1dee076",
                userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
                text: "Perfect Margarita"
            },
            {
                id: "429dea85-11dd-4054-a31e-c60c92e17255",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers"
            },
            {
                id: "53b642d7-5e86-4717-a466-0640a1dee076",
                userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
                text: "Perfect Margarita"
            },
            {
                id: "c27ab88e-375c-4e98-aa94-8a180150a797",
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: "No burgers again. But Chef Pizza is the best one"
            },
            {
                id: "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
                userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
                text: "Good for lunch"
            }
        ]
    }
];

let sortedEvents = blogPosts.sort(({date: dateA}, {date: dateB}) => {
    return Date.parse(dateB) - Date.parse(dateA);
});

export default sortedEvents;