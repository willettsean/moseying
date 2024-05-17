"use client";

import Image from 'next/image';
import '../styles/footer.css'; // Create this CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li>
          <a href="https://www.instagram.com/__callmeshu__/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/instagram-icon.png" alt="Facebook" width={24} height={24} />
          </a>
        </li>
        <li>
          <a href="https://x.com/shupog_" target="_blank" rel="noopener noreferrer">
            <Image src="/images/x-icon.png" alt="Twitter" width={24} height={24} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/siwillett/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
