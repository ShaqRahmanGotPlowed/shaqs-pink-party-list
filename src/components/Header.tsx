import React from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "lucide-react";

// Custom TikTok and Crunchbase icons as SVG components
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.05A6.34 6.34 0 003 15.69a6.34 6.34 0 0010.86 4.41V12.5a8.32 8.32 0 005.73 2.24V11.3a5.08 5.08 0 01-3.3-1.24l.02-.01a4.88 4.88 0 003.28-3.36z"/>
  </svg>
);

const CrunchbaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
    <path d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2m-8 14h-5v-1.25l1.25-.25V9.5L8 9.25V8h5c1.5 0 2.75 1 2.75 2.5 0 1-.5 1.75-1.25 2v.25c1 .25 1.75 1.25 1.75 2.5 0 1.75-1.5 2.75-3.25 2.75m-.75-7h-2v2h2c.75 0 1.25-.5 1.25-1s-.5-1-1.25-1m.5 3.5h-2.5V16h2.5c.75 0 1.25-.5 1.25-1.25s-.5-1.25-1.25-1.25z"/>
  </svg>
);

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-4 px-6 md:px-8 flex justify-between items-center", className)}>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold font-dancing gradient-text">Shaq's Celebration</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-3 mr-4">
          <a 
            href="https://ca.linkedin.com/in/shaqrahman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-party-black hover:text-party-pink transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/shxqr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-party-black hover:text-party-pink transition-colors duration-200"
            aria-label="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.crunchbase.com/person/shaq-rahman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-party-black hover:text-party-pink transition-colors duration-200"
            aria-label="Crunchbase Profile"
          >
            <CrunchbaseIcon />
          </a>
          <a 
            href="https://www.tiktok.com/@shxqr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-party-black hover:text-party-pink transition-colors duration-200"
            aria-label="TikTok Profile"
          >
            <TikTokIcon />
          </a>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#about" 
                className="text-party-black hover:text-party-pink transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#rsvp" 
                className="text-party-black hover:text-party-pink transition-colors duration-200"
              >
                RSVP
              </a>
            </li>
            <li>
              <a 
                href="#details" 
                className="text-party-black hover:text-party-pink transition-colors duration-200"
              >
                Details
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
