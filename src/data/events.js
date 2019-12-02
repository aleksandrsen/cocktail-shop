import eventImg1 from "./img/event-item-1.jpg"
import eventImg2 from "./img/event-item-2.jpg"
import eventImg3 from "./img/event-item-3.jpg"
import eventImg4 from "./img/event-item-4.jpg"
import eventImg5 from "./img/event-item-5.jpg"

import middleEventImg1 from "./img/middle-event-item-1.jpg"
import middleEventImg2 from "./img/middle-event-item-2.jpg"
import middleEventImg3 from "./img/middle-event-item-3.jpg"
import middleEventImg4 from "./img/middle-event-item-4.jpg"
import middleEventImg5 from "./img/middle-event-item-5.jpg"

let events = [
    {
        title: "Private parties from 20 to 50 guests",
        img: eventImg1,
        middleImg: middleEventImg1,
        id: "5909796d-5030-4e36-adec-68b8f9es2d96",
        dateStart: "2019-12-30T13:00",
        dateEnd: "2019-12-30T19:00",
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
        title: "Private parties from 20 to 50 guests",
        img: eventImg2,
        middleImg: middleEventImg2,
        id: "5909796d-5030-4e36-adec-68b8f9eaac2d96",
        dateStart: "2019-12-20T19:00",
        dateEnd: "2019-12-20T22:00",
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
        title: "Every saturday night party in pub",
        img: eventImg3,
        middleImg: middleEventImg3,
        id: "5909716d-5030-4e36-adec-68b8f9ec2d96",
        dateStart: "2020-02-30T17:00",
        dateEnd: "2020-02-30T22:00",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem commodi corporis cumdignissimos eligendi eveniet excepturi, exercitationem ipsam iusto laborum, magnam nemo nulla omnisperspiciatis quas reprehenderit tenetur voluptates!Lorem ipsum dolor sit amet",
        reviews: [
            {
                id: "5909796d-5030-4e36-adec-68b8f9evc2d96",
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
        title: "Private parties from 20 to 50 guests",
        img: eventImg4,
        middleImg: middleEventImg4,
        id: "5909796d-5030-4e76-adec-68b8f9ec2d96",
        dateStart: "2020-01-25T20:00",
        dateEnd: "2020-01-26T02:00",
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
        title: "Private parties from 20 to 50 guests",
        img: eventImg5,
        middleImg: middleEventImg5,
        id: "5909796d-5030-4e36-adec-65b8f9ec2d96",
        dateStart: "2020-02-05T09:00",
        dateEnd: "2020-02-05T13:00",
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
    }
];

let sortedEvents = events.sort(({dateStart: dateA}, {dateStart: dateB}) => {
    return Date.parse(dateB) - Date.parse(dateA);
});

export default sortedEvents;