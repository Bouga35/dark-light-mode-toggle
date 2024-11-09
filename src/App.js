// src/App.js
import './App.css';
import Header from './Header';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <div className="min-h-screen animated-bg dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="mb-6">This is a simple React app with a responsive header and animated background.</p>
        <ThemeToggle />
      </main>
    </div>
  );
}

export default App;
