import assets from "../assets";

const cardData = [
    {
        id: crypto.randomUUID(),
        title: "Hi there, I'm Taiseen",
        description:
            "With 4 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.",
        image: assets.img.Grid1,
        isVideo: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Tech Stack",
        description:
            "I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.",
        image: assets.img.Grid2,
        isVideo: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Time zone",
        description: "I'm very flexible with time zone communications & locations & open to remote work worldwide.",
        image: "/glob.mp4",
        isVideo: true,
    },
    {
        id: crypto.randomUUID(),
        title: "My Passion for Coding",
        description:
            "I love solving problems and building things through code. Programming isn't just my profession - it's my passion. I enjoy exploring new technologies and enhancing my skills.",
        image: assets.img.Grid4,
        isVideo: false,
    },
];

export default cardData;