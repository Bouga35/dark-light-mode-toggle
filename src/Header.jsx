// src/Header.js
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav className="hidden md:flex gap-4">
        <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300">Home</a>
        <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300">About</a>
        <a href="#services" className="hover:text-gray-700 dark:hover:text-gray-300">Services</a>
        <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
      </nav>
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <div className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 transition-transform ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <nav className="flex flex-col gap-4 p-4">
          <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-700 dark:hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
