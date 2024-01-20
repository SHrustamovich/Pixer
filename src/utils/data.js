import YoutubeImg from "../assets/image/youtube.png";
import CardOne from "../assets/image/card1.png"
const menuData = [
    {
        id: 1,
        title: "Bosh sahifa",
        path: "/",
    },
    {
        id: 2,
        title: "Xizmatlar",
        path: "/service",
    },
    {
        id: 3,
        title: "Portfolio",
        path: "/portfolio",
    },
    {
        id: 4,
        title: "Jamoa",
        path: "/team",
    },
    {
        id: 5,
        title: "Blog",
        path: "/blog",
    },
    {
        id: 6,
        title: "Kontaktlar",
        path: "/cantact",
    },
];

const introData = {
    id: 1,
    title: "Biznesingizni keyingi bosqichga olib chiqing",
    text: "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar",
    img: YoutubeImg,
};

const serviseData = {
    id: 1,
    title: "Xizmatlar",
    text: "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar",
    cards: [
        {
            id: 1,
            title: "Vebsayt tuzish",
            text: "lorem ipsum",
            img: CardOne,
        },
        {
            id: 2,
            title: "Vebsayt tuzish",
            text: "lorem ipsum",
            img: CardOne,
        },
        {
            id: 3,
            title: "Vebsayt tuzish",
            text: "lorem ipsum",
            img: CardOne,
        },
        {
            id: 4,
            title: "Vebsayt tuzish",
            text: "lorem ipsum",
            img: CardOne,
        },
        {
            id: 5,
            title: "Vebsayt tuzish",
            text: "lorem ipsum",
            img: CardOne,
        },
    ],
};

export { menuData, introData, serviseData };
