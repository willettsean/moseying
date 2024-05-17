import Link from 'next/link';
import travelogues from '../../data/travelogues';

export default function Travelogue() {
  const sortedTravelogues = travelogues.sort((a,b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })
  return (
    <div>
      <h1 className="centered-title">moseying</h1>
      <ul>
        {sortedTravelogues.map((travelogue) => (
          <li key={travelogue.slug}>
            <Link href={`/travelogue/${travelogue.slug}`}>
              {travelogue.title} - {travelogue.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
