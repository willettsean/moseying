type Travelogue = {
    slug: string;
    title: string;
    summary: string;
    date: string;
};

const travelogues: Travelogue[] = [
    { slug: "paris", title: "Trip to Paris", summary: "A wonderful trip to Paris...", date: "2023-05-17" },
    { slug: "vancouver", title: "a canadian expedition", summary: "Muggy...", date: "2023-05-31" },
    { slug: "belize", title: "sitting on the beach in belize", summary: "reading, hanging...", date: "2023-06-13" },
];

export default travelogues;
