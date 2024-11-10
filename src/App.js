// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ThemeToggle from './ThemeToggle';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen animated-bg dark:bg-gray-900 text-black dark:text-white flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ThemeToggle />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Web</h1>
      <p>This is a simple React app with a responsive header and animated background.</p>
    </div>
  );
}

export default App;
