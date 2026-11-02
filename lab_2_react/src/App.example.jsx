// ПРИКЛАД: перенесіть потрібні частини у ваш наявний src/App.jsx
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';

function getThemeByTime() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark'; // 07:00–21:00 — день
}

function App() {
  const [theme, setTheme] = useState('light');

  // автоматичний вибір теми при першому завантаженні
  useEffect(() => {
    setTheme(getThemeByTime());
  }, []);

  // застосування класу до <body>
  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <>
      <header className="app-header">
        {/* ...ваша наявна навігація... */}
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main>
        {/* ...ваш наявний вміст... */}
        <Reviews />
      </main>

      <Footer />
      <ContactForm />
    </>
  );
}

export default App;
