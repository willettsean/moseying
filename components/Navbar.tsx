'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import '../app/globals.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="social-links">
        <li>
          <a href="https://www.instagram.com/__callmeshu__/" target="_blank" rel="noopener noreferrer"> insta
          </a>
        </li>
        <li>
          <a href="https://x.com/shupog_" target="_blank" rel="noopener noreferrer"> x
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/siwillett/" target="_blank" rel="noopener noreferrer"> linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/willettsean" target="_blank" rel="noopener noreferrer"> github
          </a>
        </li>
      </ul>
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
