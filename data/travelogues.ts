type Travelogue = {
    slug: string;
    title: string;
    summary: string;
    date: string;
};

const travelogues: Travelogue[] = [
    { slug: "paris", title: "Trip to Paris", summary: "A wonderful trip to Paris...", date: "2023-05-17" },
    { slug: "seattle", title: "seattle time", summary: "Muggy...", date: "2023-06-02" },
    { slug: "belize", title: "sitting on the beach in belize", summary: "reading, hanging...", date: "2023-06-13" },
];

export default travelogues;
