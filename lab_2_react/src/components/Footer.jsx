import { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    // 1. читаємо дані про систему і браузер
    const data = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
    };

    // 2. зберігаємо в localStorage
    Object.entries(data).forEach(([key, value]) => localStorage.setItem(key, value));

    // 3. читаємо назад із localStorage і кладемо в стан
    const stored = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      stored[key] = localStorage.getItem(key);
    }
    setInfo(stored);
  }, []);

  return (
    <footer className="footer">
      <p>&copy; 2026 Савчак Маркіян</p>
      <h2>Інформація про систему (localStorage)</h2>
      <ul>
        {Object.entries(info).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
