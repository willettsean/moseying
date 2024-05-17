'use client'

import { usePathname } from 'next/navigation';
import travelogues from '../../../data/travelogues';

export default function TravelogueEntryPage() {
    const pathname = usePathname();
    const slug = pathname.split('/').filter(Boolean).pop();

    const travelogue = travelogues.find(t => t.slug === slug);
    if (!travelogue) {
        return <p>Travelogue not found.</p>;
    }
    console.log("Pathname: ", pathname);
    console.log("Slug: ", slug);
    console.log("Travelogue found: ", travelogue);


    return (
        <div>
            <h1>{travelogue.title}</h1>
            <p>{travelogue.summary}</p>
            <p><strong>Date of Visit:</strong> {travelogue.date}</p>
        </div>
    );
}
