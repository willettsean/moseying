'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../app/globals.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            home 
          </Link>
        </li>
        <li>
          <Link href="/travelogue" className={pathname === '/travelogue' ? 'active' : ''}>
            travelogue
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
