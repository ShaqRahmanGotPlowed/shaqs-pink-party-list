
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-4 px-6 md:px-8 flex justify-between items-center", className)}>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold font-dancing gradient-text">Shaq's Celebration</h1>
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
    </header>
  );
};

export default Header;
