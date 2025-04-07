
import React from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "lucide-react";

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
            <span className="font-bold text-sm">CB</span>
          </a>
          <a 
            href="https://www.tiktok.com/@shxqr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-party-black hover:text-party-pink transition-colors duration-200"
            aria-label="TikTok Profile"
          >
            <span className="font-bold text-sm">TT</span>
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
