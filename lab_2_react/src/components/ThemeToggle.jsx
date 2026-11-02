function ThemeToggle({ theme, onToggle }) {
  return (
    <button type="button" className="theme-toggle" onClick={onToggle}>
      {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
    </button>
  );
}

export default ThemeToggle;
